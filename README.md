# 🍽️ 음식 메뉴 룰렛 (Food Roulette)

재미있는 룰렛으로 오늘의 메뉴를 정해보세요! 메뉴 고민 끝!

## 🚀 [라이브 데모](https://sodalabs.github.io/LunchSpinner2/)

## ✨ 주요 기능

### 🎰 **다양한 카테고리 룰렛**
- 🥘 한식 - 김치찌개, 불고기, 비빔밥 등
- 🥡 중식 - 짜장면, 짬뽕, 탕수육 등  
- 🍝 양식 - 파스타, 피자, 스테이크 등
- 🍱 일식 - 초밥, 라멘, 돈카츠 등
- 🍔 패스트푸드 - 햄버거, 치킨, 피자 등

### 🎯 **완벽한 룰렛 경험**
- **충분한 회전**: 최소 3초, 20-35바퀴 회전으로 긴장감 극대화
- **화려한 폭죽 효과**: 3단계 파티클 폭발로 결과 발표
- **고품질 효과음**: 회전음 + 결과 발표음 + 백업 사운드
- **정확한 결과**: 포인터 위치와 완벽하게 일치하는 선택

### ⚙️ **메뉴 커스터마이징**  
- **메뉴 편집**: 각 카테고리별 메뉴 추가/삭제/수정
- **자동 저장**: localStorage + 메모리 백업으로 안전한 데이터 보관
- **실시간 반영**: 편집한 메뉴가 즉시 룰렛에 적용

### 📱 **모바일 최적화**
- **반응형 디자인**: 모든 화면 크기에 완벽 대응
- **터치 최적화**: 44px 이상 터치 영역, 햅틱 피드백
- **PWA 지원**: 홈 화면 추가, 오프라인 사용 가능
- **성능 최적화**: 빠른 로딩, 부드러운 애니메이션

## 📱 PWA (Progressive Web App) 기능

### 🔧 **설치 및 실행**
1. 웹사이트 방문
2. "앱으로 설치하기" 배너 클릭
3. 홈 화면에 아이콘 추가
4. 네이티브 앱처럼 실행

### ⚡ **오프라인 지원**
- 서비스 워커로 캐싱
- 인터넷 없이도 완전 동작
- 자동 업데이트

### 🎯 **바로가기 지원**
- 한식 룰렛 바로가기: `/?category=korean`
- 중식 룰렛 바로가기: `/?category=chinese`
- 기타 카테고리도 URL 파라미터 지원

## 🛠️ 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: 모던 스타일링, 그리드, 플렉스박스
- **JavaScript (ES6+)**: 모듈화된 코드
- **GSAP**: 부드러운 애니메이션
- **SVG**: 벡터 기반 룰렛 그래픽
- **Web APIs**: 햅틱 피드백, 오디오, localStorage
- **PWA**: 서비스 워커, 매니페스트

## 📦 프로젝트 구조

```
LunchSpinner2/
├── index.html          # 메인 HTML 파일
├── manifest.json       # PWA 매니페스트
├── sw.js              # 서비스 워커
├── app_icon.png       # 앱 아이콘 (192x192, 512x512)
├── app_og_image.png   # 소셜 미디어 이미지
└── README.md          # 프로젝트 설명서
```

## 🎨 디자인 특징

### 🌈 **모던 UI/UX**
- 그라데이션 배경
- 라운드 버튼 디자인
- 카드형 모달
- 부드러운 전환 효과

### 🎯 **사용성 중심**
- 직관적인 아이콘과 이모지
- 명확한 상태 표시
- 일관된 인터랙션 패턴

### 📱 **반응형 최적화**
- 모바일 퍼스트 디자인
- 세로/가로 모드 대응
- Safe Area 고려 (iPhone X+)

## 🔧 로컬 개발 환경 설정

1. **저장소 클론**
```bash
git clone https://github.com/sodalabs/LunchSpinner2.git
cd LunchSpinner2
```

2. **로컬 서버 실행**
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# Live Server (VS Code)
# Live Server 확장 프로그램 사용
```

3. **브라우저에서 확인**
```
http://localhost:8000
```

## 🚀 배포

### GitHub Pages 자동 배포
1. GitHub 저장소 Settings → Pages
2. Source: Deploy from a branch
3. Branch: main / (root)
4. 자동 배포 완료!

### 수동 배포
모든 파일을 웹 서버에 업로드하면 즉시 동작합니다.

## 🤝 기여하기

1. Fork 프로젝트
2. Feature 브랜치 생성 (`git checkout -b feature/AmazingFeature`)
3. 변경사항 커밋 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 Push (`git push origin feature/AmazingFeature`)
5. Pull Request 생성

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.

## 🙏 감사의 말

- **GSAP**: 부드러운 애니메이션 라이브러리
- **Freesound.org**: 무료 효과음 제공
- **Google Fonts**: 웹폰트 지원

## 📞 문의사항

버그 리포트나 기능 제안은 [Issues](https://github.com/sodalabs/LunchSpinner2/issues)에 등록해주세요!

---

**즐거운 식사 되세요! 🍽️✨**
