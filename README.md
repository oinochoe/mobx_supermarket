# Mobx supermarket

- stores/counter.js
  - 데코레이터를 사용하지 않음
  - class가 아니라 객체 혀앹와 메소드로 작성하고 observable로 감싸줌

- useStore.js
  - custom hook 작성

- src/components/Counter.jsx
  - components들을 모아놓기 위해 components 폴더를 생성하고 작성
  - 기존 class에서는 @나 decorate를 이용하고서 observer로 컴포넌트를 깜쌌습니다.
  - mobx 6.xx 이후 hook이 추가되면서 간단

- SuperMarketTemplate.jsx
  - 상품과 장바구니를 props로 받아와서 보여줌