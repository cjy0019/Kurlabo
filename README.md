# 🍭 Market Kurly Clone Project

## 프로젝트 소개

<hr>

'식문화'라는 뜻을 가진 영단어 'culinary'에서 시작된 대한민국 대표 유니콘 기업인 마켓컬리 웹 사이트를 클론하는 프로젝트를 진행했습니다.

BackEnd와 FrontEnd의 **협업**으로 완성한 클론 프로젝트입니다. kurly의 kurl과 '협동'을 의미하는 collaboration의 labo를 이어 붙여 **컬라보(Kurlabo)** 라는 이름으로 프로젝트를 진행했습니다.

<p align="center"><img src="https://blog.kakaocdn.net/dn/DKoEm/btqCXu4AZAW/1C2ln6Z0ovZiWYAJcYtqL1/img.jpg" width="30%"></p>

미리보기

![Kurlabo-Preview.gif](https://github.com/cjy0019/cjy0019.github.io/blob/master/images/Kurlabo-Preview.gif?raw=true)

## 프로젝트 기간

2021.01.25 - 2021.02.26 (5주)



## 라이브러리

- HTML
- CSS
- JS
- React
- Redux
- Redux-Saga, Thunk
- TailwindCSS
- axios



## Kurlabo 프로젝트 시작하기

```bash
$ git clone "https://github.com/Kurlabo/frontend.git
$ npm ci
$ npm run start
```




## CONTRIBUTING

- [CONTRIBUTING.md](https://github.com/Kurlabo/frontend/blob/develop/CONTRIBUTING.md)
- [wireframe](https://www.figma.com/file/9ZA0PoPDP14XQMiI8H1UBC/%EC%BB%AC%EB%9D%BC%EB%B3%B42?node-id=0%3A1)
- presentation
  - [프레젠테이션](https://slides.com/lexkim/title-texttitle-text/)
  - [YOUTUBE](https://www.youtube.com/playlist?list=PLw4AQO2Dk2sSHVtuFktOa74IJas9GbkFn)



## CONTRIBUTORS

- 김어진 
- 박상언 
- 조재연 
- 백나라
- 정세영

<br>

## 서비스 기능

### 1. 메인 Header

- 화면 최상단 고객센터 메뉴 마우스 오버시 드롭다운 메뉴.

- 전체 카테고리 마우스 오버시에 모든 카테고리 메뉴 보여주는 드롭다운 메뉴 렌더링.
- 전체 카테고리 드롭다운 메뉴에서 대분류 메뉴에서만 스크롤 렌더링.
- DAUM API를 이용하여 주소검색 기능.
- 주소 변경 기능.
- Session Storage를 이용하여 주소 set, get하여 배송가능한 주소 렌더링.
- cookie를 이용하여 토큰 값 유지하면서 회원정보 GET.

<br>

### 2. 메인 페이지

- 메인배너에대한 정보를 보여주는 infinity carousel 구현
- infinity carousel 자동 넘기기, mouseover, mouseout 일때 자동넘기기 정지, 재생 구현
- infinity carousel 자동 넘기기 재생, 정지 버튼 구현
- 추천하는 상품에대한 정보를 보여주는 carousel 구현
- carousel 에서 가장 우측페이지로 이동시 우측 버튼 hidden, 가장 좌측페이지 인경우 좌측버튼 hidden
- 추천하는 상품의 이미지 클릭시 각 상품별 세부정보 페이지로 URL이동 구현
- MD의 추천 상품 버튼클릭시 각 상품 카테고리 버튼별로 carousel 정보 변경 구현
- 인스타그램 고객 후기 이미지 및 인스타그램 URL이동 구현

<br>

### 3. 상품리스트(전체 카테고리, 알뜰상품, 베스트, 신상품)

- 대분류, 소분류에 따라서 다른 이미지 렌더링.
- 요청 가능한 페이지 갯수에 따른 페이지네이션.
- Redux 사용하여 상품, 로딩, 에러에 대한 state 관리.
- Redux-Thunk를 이용하여 비동기 처리.
- history.location을 사용하여 페이지 번호에 따라 다른 routing 처리.
- 각 상품 클릭시 해당 상품에 대한 설명 렌더링.
- Original 마켓컬리 페이지에서 장바구니 모달창의 외부를 클릭시 모달창이 닫히지 않는 접근성 issue 해결.
- 장바구니 담기 버튼 클릭시 해당 상품에 대한 정보 POST.

<br>

### 4. 장바구니페이지

- 상품을 장바구니에 넣을시 장바구니 페이지의 각 상품 보관 타입별(냉장, 냉동, 상온)로 상품 구분
- 상품 보관 타입의 아코디언 기능 구현
- 장바구니 상품별 개수 증가, 감소기능 구현
- 상품 개수 증가, 감소시 각 상품별 가격 정보 변경
- 상품 개별 삭제 구현
- 선택되어진 상품 선택삭제 기능구현
- 상품 선택시 선택되어진 상품 개수 정보 표시
- 상품 개별 삭제, 선택삭제시 삭제 확인, 취소 모달창 구현
- 상품 선택시 각 상품의 가격이 상품 결제 가격정보에 취합해서 선택되어진 상품의 총 상품금액, 총 상품 할인금액, 배송비 가격 추가하여 결제 예정금액 정보 표시
- 상품 전체 선택 기능 구현
- 상품 금액이 40000만원 이하시 배송비 3000원 추가, 이상시 배송비 0원 정보 표시
- 주소검색 daum API 를 통한 주소 검색후 주소 정보 표시
- 상품 선택하지않고 주소검색하지않은경우 주문하기 버튼 비활성화 / 상품 선택시, 주소검색시 주문하기 버튼 활성화

<br>

### 5. 주문서

- Redux-Thunk를 이용하여 비동기 처리.
- useState를 사용하여 주문상품, 회원정보, 결제 정보에 대한 상태관리.
- 주문 상품 화살표 메뉴 클릭시 텍스트 Swap 형태로 해당 상품에 대한 가격, 수량, 이미지 렌더링하고 재클릭시 '해당 상품 외 (개) 렌더링'.
- Original 마켓컬리 사이트는 배송지에 대한 수정을 할 때, 새로운 브라우저(윈도우)창을 띄웠지만 접근성 Issue가 있기 때문에 본 Kurlabo 프로젝트에서는 모달창으로 대체.
- 배송지 변경 모달창에서 받으실 장소, 출입 방법에 따라 각기 다른 Input 및 메세지 렌더링.
- 결제 정보 창 Sticky를 이용하여 해당 사이즈에 맞게 스크롤에 따라서 이동.
- 결제 동의 하지 않았을 시에 결제 불가 모달창 팝업.
- 결제하기 클릭시 가지고 있던 state를 모두 POST.
- 결제버튼 클릭시 결제 준비중 로딩창 렌더링.

<br>

### 6. 상품 상세 페이지

- 상품 ID에 따라 해당 상품에 대한 상세 정보 렌더링
- 해당 카테고리의 상품들로 구성된 연관 상품의 infinity carousel 구현
- 상품 정보 navigation의 선택된 탭에 따라 상품 info영역 렌더링
- 고객 후기 탭 선택시 해당 상품에 대한 상품 후기 렌더링
- 스크롤 위치에 따라 하단 장바구니 옵션창 여닫힘
- 개수 증가, 감소시 총 상품금액 정보 변경
- 장바구니 옵션(count, price) state로 관리하여 설정한 옵션 상/하단 연동
- 장바구니에 담기 기능 및 담기 결과 알림창 렌더
- count 수 1미만일 경우 알림 팝업창 구현
- 늘 사는 것 추가하기 기능 및 결과 팝업창 구현
- 후기 작성 가능여부 확인 후 후기 작성 페이지로 이동 또는 작성불가 알림

<br>

### 7. 고객센터 페이지

- navigation의 선택된 탭에 따라 해당 부류의 내용 렌더링
- 공지사항의 글 클릭시 해당 글의 페이지로 이동 및 렌더링
- 자주하는 질문의 카테고리 선택 시 해당 카테고리의 글 목록 렌더링
- 1:1문의의 글쓰기 버튼 클릭 시 글쓰기 페이지로 이동

### 8. 마이페이지(마이컬리)

- 늘 사는 것 (찜목록) 장바구니 등록
