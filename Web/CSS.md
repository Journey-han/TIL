# 작성법
1. 인라인 스타일시트 : 태그 안에 바로 작성. 우선순위가 높다.
- `<b style="color: gray;">1. 인라인 스타일시트 : 우선순위 높다!</b>`
    - b태그에 바로 스타일이 붙는다.

2. 내부 스타일시트 : html 내부에 간단하게 작성
    - html 파일에서 스타일 태그써서 적용한다.
```html
<head>
<style type="text/css">
	@import url("css01.css");
	
	p{
		background-color: skyblue;
	}
</style>
</head>
<body>
<p>
	<span>2.내부 스타일시트 : html 내부에 간단하게 작성</span><br>
</p>
</body>
```

3. 외부 스타일시트 : css 파일을 만든다.
- `<link href="css01.css" rel="stylesheet" type="text/css"/>`
    - css파일 따로 만들어서 html 파일에 링크로 적용한다. 
    - 스타일이 내부 있을 경우 일일이 수정해야하는데 외부 파일은 한번에 수정해서 적용 가능하다. 
	- 보통 실무에서는 외부 스타일시트로 파일로 많이 만든다.

## selector. 선택자
1. 타입 선택자

```css
pre {
	text-align: center;
}
h1 {
	color: #BC55FF;
}
```

2. id 선택자
- 요소에 id를 지정하고 style에서 지정된 id값으로 사용. #으로 구분

```css
#sid01{
	color: red;
}
#sid02{
	color: green;
}
#sid03{
	background-color: blue;
	color: white;
}
```

3. class 선택자
- 요소에 class를 지정하고 style에서 지정된 class값으로 사용. .(dot)으로 구분

```css
.scls{
	color: lightgray;
}
```

4. 전체 선택자
- *을 붙이면 문서 전체에 css적용된다.

```css
*{
	text-align: center;
}
```

5. 자식 선택자
- at라는 id의 p라는 자식 요소만

```css
#at > p{
	color: #2CE0BC;
}
```

- div가 가지고 있는 하위 선택자

```css
#at > div > p{
	background-color: black;
	color: white;
}
```

6. 하위 선택자
- 특정 요소 하위의 요소를 지정할 때 사용

- div의 span 하위 전부

```css
div span{
	background-color: fuchsia;
}
```

7. 인접 선택자
- 지정한 요소 다음에 나오는 요소(태그)에 적용

```css
h3 + b {
	color: silver;
}
b + span {
	color: gold;
}
```

8. 속성 선택자
- 속성이 정의된 태그만 선택하는 선택자
- title이라는 속성을 가진 p태그

```css
p[title] {
	color: lime;
}
p[title="b"] {
	background-color: yellow;
}
```

9. 그룹 선택자
- 여러 요소에 각각 같은 속성을 적용한다.

```css
p, pre, strong {
	background-color: green;
	color: yellow;
}
```

10. 종속 선택자
- 타입 선택자와 id 선택자(#), class(.)선택자가 혼합된 형태

- li가 가진 scls01인 애

```css
li.scls01{
	background-color: pink;
}
```

- li가 가진 scls02인데 id가 sidul인 애

```css
li.scls02#sidul {
	font-size: 40px;
}
```

### 가상 클래스 선택자
- 특정 이벤트가 발생한 태그 선택!

1. link
- 방문하기 전 글자색은 hotpink

```css
a:link{
	color: hotpink;
	font-size: 20pt;
}
```

2. visited
- 이미 한번 이상 방문한 사이트면 글자색 skyblue로 바뀜

```css
a:visited{
	color: skyblue;
	font-size: 50pt;
}
```

3. hover
- 링크에 마우스 올려뒀을 때, maroon색으로 바뀐다.

```css
a:hover{
	background-color: maroon;
	font-size: 35pt;
}
```

4. active
- 마우스 클릭하는 순간 글자색이 red로 바뀐다. 손 떼지 말고 봐보기

```css
a:active{
	color: red;
}
```

5. checked
- 체크박스 체크하면 크기 커져라! 체크 해제하면 원래상태로

```css
input:checked{
	width: 100px;
	height: 100px;
}
```

