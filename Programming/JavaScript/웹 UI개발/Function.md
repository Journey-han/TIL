# Function

- `function 축약된 이름() {축약할 코드}`
- 함수의 첫 번째 용도는 **"긴 코드 하나로 묶기"**
- 특정 기능을 다음에도 쓰기 위해 모듈화 해놓기. -> 재사용의 목적
- 함수에 구멍을 뚫어놓으면, 함수 쓸 때 구멍에 뭐 입력 가능. 
    - 파라미터의 장점: 함수 하나로 다양한 기능 만들기 가능
    - 구멍이 여러개 필요한 경우 : function asdf(구멍1, 구멍2) {} 콤마로 구분하다. 호출 시 asdf(abc, def). 구멍 타고 들어온 데이터는 어디에 박힐지 표시해줘야한다.


## 사용 방법

```javascript
<button onclick="AlertBox()">Open Button</button>

// 1. DOM으로 변경하기
document.getElementById('alert').style.display = 'block';

// 2. function(함수) 사용하기
function AlertBox() {
     document.getElementById('alert').style.display = 'block';
}
```

- function 이라는 키워드를 넣으면 함수를 만들 수 있다.
- function 오른쪽엔 함수의 이름을 작명해준다.
- { } 중괄호 안에는 축약하고 싶은 코드를 담아준다.
- `AlertBox();`라고 한 단만 쓰면 중괄호에 있던 긴 코드가 똑같이 실행시켜준다.


## 파라미터 사용하기

- 함수내에 구멍을 뚫어 파라미터를 사용할 수 있다.
- 함수 내에 구멍(파라미터)를 뚫었다. 
- {} 중괄호 내에 구멍자리를 만들고, ( ) 소괄호 내에 구멍을 뚫을 때 썼던 단어를 적는다.

```javascript
function AlertBox(구멍) {
    document.getElementById('alert').innerHTML = 구멍;
}
```

- 함수를 쓸 때 그냥 쓴느게 아니라 소괄호 내에 숫자나 문자를 입력해서 업그레이드 해서 사용할 수 있다.
- 업그레이드 된 함수들엔 소괄호 구멍자리에 **내가 원하는 문자**를 **입력**해줄 수 있다.
- 문자를 입력하면 중괄호 내부의 '구멍'자리에 문자가 들어가게 된다.

```javascript

<button onclick="알림창Close('none')">Close Button</button>

function 알림창Close(구멍) {
    document.getElementById('alert').style.display=구멍;
}

알림창Close('none');

// 파라미터 여러개 쓸 경우
function 알림창Open(구멍1, 구멍2) {
    document.getElementById(구멍1).style.display = 구멍2;
}
알림창Open('alert', 'none');

```

### 파라미터 쓰는 경우
- 함수를 여러개 만드는게 아니라 하나의 함수를 재활용할 때 쓰면 좋다.
- 함수 내부의 기능을 항상 똑같은 것만 실행하는게 아니라 다양한 기능을 수행하는 함수를 만들고 싶을 때 쓴다.