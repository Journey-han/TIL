# 끝말잇기 게임
## 코드

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>끝말잇기</title>
</head>

<body>

  <div><span id="order">1</span>번째 참가자</div>
  <div>제시어: <span id="word"></span></div>
  <input type="text">
  <button>입력</button>

</body>

<script>
const number = Number(prompt('몇 명이 참가하나요?'));
const $button = document.querySelector('button');
const $input = document.querySelector("input");
const $word = document.querySelector("#word");
const $order = document.querySelector('#order');

let word;	// 제시어
let newWord;	// 현재 단어

const onClickButton = () => {
	console.log('버튼 클릭');
	
	if(!word || word[word.length - 1] === newWord[0]) {	// 제시어가 비어 있거나 올바른 단어인가?
		// 비어있다. or 올바르다
		
		word = newWord;				// 입력한 단어가 제시어가 된다.
		$word.textContent = word;	// 화면에 제시어 표시
									// 태그.textContent		 		태그 내부의 문자열을 가져옴
									// 태그.textContent = 값		태그 내부의 문자열을 해당 값으로 설정한다. 
		const order = Number($order.textContent);
		if (order + 1 > number) {
			$order.textContent = 1;
		} else {
			$order.textContent = order + 1;
		}

	} else {
		// 비어있지 않다. or 올바르지 않다.
		
		alert('올바르지 않은 단어지롱~');
	
	}
		
	$input.value = '';
	$input.focus();
					// 입력태그.value			입력창의 값을 가져옴
					// 입력태그.value = 값		입력창에 값을 넣음
					// 입력태그.focus()			입력창을 하이라이트
	
};


const onInput = (event) => {
	console.log('글자입력', event.target.value);
	
	newWord = event.target.value;	// 입력하는 단어를 현재 단어로
};

$button.addEventListener('click', onClickButton);
$input.addEventListener('input', onInput);
</script>

</html>
```

## 주요 문법
### 대화 상자 띄우기
- `prompt('메시지');` - 대화 상자에 사용자가 입력한 메시지가 문자열 형태로 전달되고, 입력하지 않고 취소를 누르면 null이 전달된다.    
- `alert('메시지');` - 단순한 알림창으로, 호출하면 확인을 누르기 전까지 다음 스크립트 실행이 중단된다. 디버깅 용도로 사용할 때는 console.log를 사용한다.    
- `confirm('메시지');` - 사용자에게 확인을 받을 때 사용한다. 사용자가 확인을 누르면 true가 전달되고, 취소를 누르면 false가 전달된다.    
    
### HTML 태그 선택하기
- 하나의 태그만 선택하기 - `document.querySelector('선택자');`    
- 여러개의 태그 선택하기 - `document.querySelectorAll('선택자');`    
    
'#아이디', '.클래스', '태그',     
'선택자 내부선택자 내부선택자...' -> 어떤 태그 안에 들어 있는 다른 태그를 선택하고 싶을 때    
    
### 태그에 이벤트 달기
- . 태그를 선택한 후에 addEventListener 메서드를 사용해서 이벤트를 연결한다. 리스너 함수는 이벤트가 발생할 때 실행되는 함수.     
    - `태그.addEventListener('이벤트 이름', '리스터함수');`    
    
- 리스너 함수의 매개변수로 event 객체를 제공해서 이벤트와 관련된 정보를 얻을 수 있다.     
    - 예) input 태그에 입력된 값을 가져오기. -> `event.target.value`를 넣는다. event.target은 이벤트가 발생한 대상 태그.    

- 사용 방법    

```Javascript
const 리스너함수 = (event) => {
	console.log(event.target.value);
};
```

- 입력창에 입력된 값은 value 속성으로 가져온다. value에 값을 대입하면 대입한 값으로 변경된다.    
    - 입력창의 값을 가져옴 - `입력창.value`    
    - 입력창에 값을 넣음 - `입력창.value = 값`    
    
- 입력태그(input, select, textarea 등)이 아닌 일반 태그들이 내부 값을 가져올 때는 value가 아니라 textContent 속성을 사용한다.     
    - 태그 내부의 문자열을 가져옴 - `태그.textContent`      
    - 태그 내부의 문자열을 해당 값으로 설정 - `태그.textContent = 값`     

- 입력창이나 버튼의 경우 focus 메서드를 호출하면 해당 태그가 하이라이트 된다.    
    - 입력창을 하이라이트 - `입력창.focus()`    
    
## 순서도 최적화 하기
여러 개의 if문을 하나로 합치려면 진리표를 이용한다. 두 if 문의 관계가 OR(||, 또는) 인지 AND(&&, 그리고)인지에 따라 진리표가 달라진다.    

- **OR 관계**    
|First|Second|Result|
|---|---|---|
|true|true|true|
|true|false|true|
|false|true|true|
|false|fale|false|
    
- **AND 관계**    
|First|Second|Result|
|---|---|---|
|true|true|true|
|true|false|false|
|false|true|false|
|false|fale|false|