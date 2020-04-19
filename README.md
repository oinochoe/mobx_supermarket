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

- SuperMarket
  - SuperMarketTemplate을 사용한 슈퍼마켓을 보여줌

- ShopItem
  - 숍 아이템

- ShopItemList
  - 숍 아이템의 리스트들. 이것을 다시 SuperMarket에서 보여줌

- BasketItem
  - 장바구니도 마찬가지..

## Store 작성

- 본격적으로 store 작성하면서 기능 구현 (hooks)
- hooks 사용 시 Provider와 Context를 사용하지 않고 구현

## mobx의 리액트 컴포넌트 최적화

- 리스트를 렌더링할 땐 컴포넌트에 리스트 관련 데이터만 props로 넣기
- 세부참조는 최대한 늦게
- 함수는 미리 바인딩하고, 파라미터는 내부에서 넣어주기

## 결론

- 흑마법이다. 좋네요! 😸