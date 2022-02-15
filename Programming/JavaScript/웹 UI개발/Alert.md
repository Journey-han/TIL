# Alert

## 기본적인 UI 만드는 법칙

- 메뉴, 탭, 모달창 등은 버튼을 누르면 UI가 등장한다.
- 미리 만들어 놓은 후 버튼을 누르면 짠하고 보여주기만 하면 된다.


1. HTML, CSS 등 미리 디자인해놓는다.
2. UI를 평소에 안보이게 숨긴다.
3. 원할 때 JS를 이용해서 버튼을 누르거나할 경우 UI를 보여준다.


### Onclick 속성
- 버튼을 눌렀을 때 UI같은 것이 동작하도록 코드를 작성할 수 있다.
- 모든 HTML태그 내에 onclicl이라는 속성을 넣을 수 있다.
- 해당 HTML을 눌렀을 때 onclick 내부의 자바스크립트를 실행하게 된다.

```javascript
<button onclick=""> 버튼 </button>
```

### HTML 숨기기 & 보여주기

- 자바스크립트를 이용하면 특정 HTML을 사라지거나 보이게 만들 수 있다.

```javascript
document.getElementById('hi').style.display = 'block'
```

- `display = 'block'` : UI가 나타난다.
- `display = 'none'` : UI가 숨겨진다.

