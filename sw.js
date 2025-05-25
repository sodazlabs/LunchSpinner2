const CACHE_NAME = 'food-roulette-v1.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/app_icon.png',
  '/app_og_image.png',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
  'https://cdn.freesound.org/previews/316/316847_5123451-lq.mp3',
  'https://cdn.freesound.org/previews/423/423663_8418827-lq.mp3'
];

// 서비스 워커 설치
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('캐시 열림');
        return cache.addAll(urlsToCache.map(url => {
          return new Request(url, { cache: 'reload' });
        }));
      })
      .catch(error => {
        console.log('캐시 저장 실패:', error);
      })
  );
  self.skipWaiting();
});

// 서비스 워커 활성화
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('오래된 캐시 삭제:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 네트워크 요청 가로채기
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 캐시에 있으면 캐시된 버전 반환
        if (response) {
          return response;
        }

        // 네트워크 요청 복제
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(response => {
          // 유효하지 않은 응답 확인
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // 응답 복제
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        }).catch(() => {
          // 오프라인일 때 기본 페이지 반환
          if (event.request.destination === 'document') {
            return caches.match('/index.html');
          }
        });
      })
  );
});

// 백그라운드 동기화
self.addEventListener('sync', event => {
  if (event.tag === 'menu-sync') {
    event.waitUntil(syncMenuData());
  }
});

// 푸시 알림 처리
self.addEventListener('push', event => {
  const options = {
    body: '새로운 메뉴가 추가되었습니다!',
    icon: '/app_icon.png',
    badge: '/app_icon.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: '룰렛 돌리기',
        icon: '/app_icon.png'
      },
      {
        action: 'close',
        title: '닫기'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('음식 룰렛', options)
  );
});

// 알림 클릭 처리
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// 메뉴 데이터 동기화 함수
async function syncMenuData() {
  try {
    // 여기서 서버와 메뉴 데이터 동기화 로직 구현
    console.log('메뉴 데이터 동기화 완료');
  } catch (error) {
    console.log('메뉴 데이터 동기화 실패:', error);
  }
}