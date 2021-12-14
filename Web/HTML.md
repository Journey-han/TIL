# block-inline. 블럭요소, 인라인요소
```html
<body>
	<h1>블록요소, 인라인요소</h1>
	
	<h2>블록요소</h2>
	<p>줄바꿈</p>
	<div style="background-color: lightgray;">
		블록 요소 안에 텍스트, <strong>인라인 요소</strong> 포함가능
		<p>블록 요소 안에 블록요소 포함</p>
	</div>
	
	<hr/>
	
	<h2>인라인요소</h2>
	<a href="http://www.naver.com">줄바꿈X</a>
	<q>인라인 요소 안에 텍스트와 <a style="background-color: yellow;">인라인요소</a> 포함 가능</q>
	<span>인라인 요소 안에 <p>블록요소</p>포함 불가</span>
	<!-- 인라인 요소 안에 블록요소 사용은 가능하지만, 지양하자. -->
</body>
```

# title paragraph. 제목, 단락, 주소

```html
<body>
	<h1>제목</h1>
	<h2>글자</h2>
	<h3>크기</h3>
	<h4>지정</h4>
	<h5>하는</h5>
	<h6>태그</h6>
	
	<p>p 요소는 단락을 정의</p>
	<div> div요소는 영역을 정의</div>
	
	<p>
		인라인 요소와 텍스트 요소를 포함할 수 있는
		<strong>블록요소</strong>이지만, <br/>
		또 다른 <em>블록요소</em>를 포함할 수는 없다.
	</p>
	
	<address>연락처 : 010-1234-5678</address>
</body>
```

# hr, quotation. 구분선, 인용문

```html
<body>
	<h1>blockquote</h1>
	
	<strong>드래곤라자</strong>라는 소설에서, 내가 좋아하는 말이 있습니다.
	<blockquote cite="#" title="드래곤라자 명언"> <!-- <요소 Key="Value"> cite 속성 출처 -->
		<cite>드래곤 라자</cite> <!-- <cite> 요소 작품의 제목 -->
		나는 단수가 아니다. <!-- 실제 인용해온 내용. blockquote 블록요소라서 인용문 한 줄 다 잡아 먹는다. -->
	</blockquote>
	
	<hr/>
	
	<h1>q</h1>
	
	<b>드래곤라자</b>라는 소설에서, 내가 좋아하는 말이 있습니다.
	<q cite="#" title="드래곤라자 명언">나는 단수가 아니다.</q>
	<!-- q는 인라인 요소라서 한줄로 안잡아 먹고 한줄로 다 나타내준다. -->
</body>
```

# text, img. 텍스트, 이미지

```html
<body>
	<h1>TEXT</h1>
	<!-- web 접근성 (strong, em, ...) -->
	
	<p>
		<b>진하게 (&lt;b&gt;)</b><br/>
		<strong>진하게 (&lt;strong&gt;)</strong><br/>
		<!-- 글씨가 굵게 강조되어 보여지는것은 같으나, 시각장애인용 웹 읽어줄 땐 달라진다. b는 그냥 읽어주고 strong은 강하게 읽어준다. -->
		<i>기울임 (&lt;i&gt;)</i><br/>
		<em>기울임 (&lt;em&gt;)</em><br/>
		<small>작은 텍스트 표시, 코멘트 (&lt;small&gt;)</small><br/>
		윗 <sup>첨자</sup> (&lt;sup&gt;)<br/>
		아래 <sub>첨자</sub> (&lt;sub&gt;)<br/>
		<ins>내용 추가 (&lt;ins&gt;)</ins><br/>
		<del>내용 삭제 (&lt;del&gt;)</del><br/>
	</p>
	
	<hr/>
	
	<h1>IMG</h1>
	
	<!--  alt 이미지경로에 없어서 이미지 안뜨면 출력된다. -->
	<img alt="img01 설명입니다." src="resources/img/img01.jpg" width="500px" height="300px" title="img01.jpg임!!!"/>
	<!-- 
		px : 픽셀 (해상도 별 상대크기)
		pt : 포인트 ( 1pt = 0.72인치)
		%, em : 지정/상속 등에 대한 백분율 (상대크기)
	 -->
	 
	 <h3>이미지에 링크 걸기</h3>
	 <a href="index.html" title="index로 가자!">
	 	<img alt="goindex" src="resources/img/img01.jpg" width="150px" height="100px" />
	 </a>
	 
	 <h3>이미지 맵</h3>
	 
	 <img alt="my icon" src="resources/img/img01.jpg" usemap="#my" width="150px" height="100px" />
	 
	 <map name="my">
	 	<area alt="go index" shape="rect" coords="25, 25, 75, 75" href="index.html" title="인덱스 가자!!" />
	 </map>
</body>
```

# a. 링크

```html
<body>
	<h1>a tag</h1>
	
	<a href="http://www.naver.com">naver</a><br>
	
	<a href="#a">1번</a> <!-- #은 찾기기능. a인 애를 찾아서 거기로 링크걸기. 그냥 #만 있는 경우 현재 페이지-->
	<a href="#b">2번</a>
	<a href="#c">3번</a>
	<br>
	<p id="a">1번</p>
	<p id="b">2번</p>
	<p id="c">3번</p>
</body>
```

# list. 목록

```html
<body>
	<h1>목록</h1>
	
	<h2>순차적 목록</h2>
	
	<b>학원 오는 순서</b>
	<ol>	<!-- ordered list. -->
		<li>눈을 뜬다.</li> <!-- 순차적 목록은 자동으로 순서 배정. 1, 2, 3.. -->
		<li>씻는다
			<ol>	<!-- 목록 안에 또 목록 가능 ol써서 -->
				<li>머리 감는다</li>
				<li>세수한다</li>
				<li>몸 씻는다</li>
			</ol>
		</li>
		<li>옷 입고 출발</li>
		<li>걸어간다</li>
		<li>학원도착</li>
	</ol>
	
	<hr/>
	
	<b>집으로 가는 순서</b>
	
	<ul>	<!-- unordered list는 숫자가 아니라 ●으로 리스트 목록으로 써준다. 순서가 없다. 하위목록은 ○으로 표시 -->
		<li>학원에서 출발</li>
		<li>역삼역으로 간다</li>
		<li>잠실역으로 간다</li>
		<li>천호역에서 내린다</li>
		<li>집까지 간다.
			<ul>
				<li>걸어간다.</li>
				<li>자전거탄다.</li>
				<li>퀵보드탄다.</li>
				<li>버스탄다.</li>
			</ul>
		</li>
	</ul>
	
	<hr/>
	
	<h2>정의형 목록</h2>
	<dl>	<!-- 제목에 대한 내용들로 이루어진다. dl안에 dt(제목) dd(내용)-->
		<dt>제목</dt>
		<dd>내용</dd>
	</dl>
	
	<dl>
		<dt>QClass 강의시간</dt>
		<dd>오전시간</dd>
		<dd>점심시간</dd>
			<dl>
				<dt>식사메뉴</dt>
				<dd>샐러드</dd>
				<dd>중화요리 1인세트</dd>
				<dd>만둣국</dd>
			</dl>
		</dd>
		<dd>오후시간</dd>
	</dl>
</body>
```

# table. 테이블

```html
<body>
	<h1>01. 기본 테이블 만들기</h1>
	
	<table border="1" style="width: 300px">
		<tr style="background-color: gray;">
			<th>컬럼1</th>	<!-- th는 가운데 정렬과 볼드체. 컬럼 -->
			<th>컬럼2</th>
		</tr>
		
		<tr>
			<td>1</td> 		<!-- td는 왼쪽 정렬해서 기본체. 데이터 -->
			<td>2</td>
		</tr>
		
		<tr>
			<td>3</td>
			<td>4</td>
		</tr>
		
		</table>
	
	<h1>02. 주요 태그 사용해서 만들기</h1>
	
	<table border="1">
		<caption>테이블 제목</caption> <!-- 가운데에 배치된다. -->
		
		<colgroup>
			<col width="100px" />
			<col width="300px" >
			<col width="500px" />
		</colgroup>
		
		<thead> <!-- 테이블의 헤드. 해당 테이블의 가장 위에 들어가라. 필요없으면 안써도 됨. -->
			<tr>
				<th>컬럼 1</th>
				<th>컬럼 2</th>
				<th>컬럼 3</th>
			</tr>
		</thead>
		
		<tbody>
			<tr>
				<td>1</td>
				<td>2</td>
				<td>3</td>
			</tr>
			<tr>
				<td>4</td>
				<td>5</td>
				<td>6</td>
			</tr>
			<tr>
				<td>7</td>
				<td>8</td>
				<td>9</td>
			</tr>
		</tbody>
		
		<tfoot> <!-- 테이블의 끝. 해당 테이블의 제일 밑에 들어가라. 필요없으면 안써도 됨. -->
			<tr>
				<td>footer1</td>
				<td>footer2</td>
				<td>footer3</td>
			</tr>
		</tfoot>

	</table>

	<h1>03. 테이블 셀 병합하기</h1>
	
	<table border="1">
		<thead style="background-color: skyblue;">
			<tr>
				<th>컬럼1</th><th>컬럼2</th><th>컬럼3</th><th>컬럼4</th>
			</tr>
		</thead>
		
		<tbody>
			<tr>
				<td rowspan="2">1</td>	<!-- row(줄) 2개 합치자. 세로로 2줄 병합 -->
				<td>2</td>
				<td>3</td>
				<td>4</td>
			</tr>
			
			<tr>
				<td>6</td>
				<td colspan="2">7</td> <!-- col(행) 2개 합치자. 가로로 2줄 병합 -->
				<!-- 만약 td 8 td 해서 8 안지우면 한칸 밀릴 것이다. -->
			</tr>
			
		</tbody>
			
		<tfoot>
			<tr>
				<td colspan="4">9</td>
			</tr>
			</tfoot>	
	</table>
</body>
```

# form. 양식

1. form-input

```html
<body>
	<!-- 
		get : 데이터가 보여지면서 전달
		post : 데이터가 숨겨져서 전달	
	 -->
	 
	<form action="html08-form01-res.html" method="post">
		<fieldset> <!-- 네모 만들어준다. -->
			<legend>회원가입</legend> <!-- 제목 써주는 것 -->
			
		<!-- input태그는 일반적으로 form태그 안에 쓴다. 입력받은 데이터 action태그 안에 있는 곳으로 전달한다. -->
			<p>아이디 : <input type="text" name="id" /></p>	<!-- 타입이 텍스트라서 글자 그대로 들어감 -->
			<p>비밀번호 : <input type="password" name="pw" /></p>	<!-- 타입이 패스워드라서 쓴 글자 안보임 -->
			<p>이메일 수신여부<br/>
				<input type="radio" name="radio" value="y"/>Yes<br/>  <!-- 라디오 타입은 한개만 선택 가능. -->
				<input type="radio" name="radio" value="n"/>No
			</p>
			<p> 관심분야<br/>
			<!-- 타입이 체크박스면 중복 선택 가능. -->
				<input type="checkbox" name="cb1" value="html"/>HTML<br/>
				<input type="checkbox" name="cb1" value="html"/>CSS<br/>
				<input type="checkbox" name="cb1" value="html"/>JavaScript<br/>
				<input type="checkbox" name="cb1" value="html"/>JQuery<br/>
			</p>
			<p>
			<!-- 만약 IE 쓰는 경우에는 꼭 "/> / 써줘야 한다.ㅜㅜ html5 부터는 생략가능 -->
				<input type="reset" value="취소">	
				<input type="button" value="그냥 버튼">
				<input type="submit" value="전송">
			</p>
			<p>
				<input type="file">
				<!-- 사람들한테는 보여지지 않지만, 데이터 전송 할 것이 있으면 쓴다. 소스보기(f12)에는 보임 -->
				<input type="hidden" name="hd" value="my hidden value">
			</p>
		</fieldset>
	</form>

</body>

<!------------res. 결과-------------->
<script type="text/javascript">

	window.onload=function(){
		var val = location.search;
		alert(val);
		document.getElementById("val").innerHTML = val;
	}

</script>

</head>
<body>

	<div id="val"></div>


</body>
```
2. form-select

```html
<body>
	<h1>select 요소</h1>
	
	<form action="#" method="get">
		<fieldset>
		 	<legend>여러줄 글 상자와 목록상자</legend>
		 
		 	<p>
		 	<!-- 라벨을 달아준다. reply에 붙어 있는 라벨. -->
				<label for="reply">답글</label><br/>
			<!--  보여지는 줄 수 칸 수. 화면에서 늘리고 줄일 수 있다. -->
				<textarea rows="3" cols="30" id="reply" name="re"></textarea>		 	
		 	</p>
		 	
		 	<p>
		 		과목선택
		 		<!-- 하나 지정하기. -->
		 		<select name="select01">
		 			<option value="html">HTML</option>
		 			<option value="css">CSS</option>
		 			<option value="js">JavaScript</option>
		 			<option value="jq">JQuery</option>
		 	</select>
		 	</p>
		 	
		 	<p>
		 		점심메뉴
		 		<select name="select02">
		 		<!-- 옵션들을 나눠 줄 때 쓰는 optgroup. 옵션만 선택 가능 옵그룹은 선택이 안된다. 셀렉트 안에 넣어야한다.-->
		 		<!-- 옵션의 값들이 전송된다. -->
		 			<optgroup label="한식">
		 				<option value="kimchi-zzigae">김치찌개</option>
		 				<option value="bulgogi">불고기</option>
		 				<option value="duenjang-zzigae">된장찌개</option>
		 				<option value="samketan">삼계탕</option>

		 			</optgroup>
		 			<optgroup label="분식">
		 				<option value="jjolmean">쫄면</option>
		 				<option value="dducbokki">떡볶이</option>
		 				<option value="sun-dae">순대</option>
		 			</optgroup>
		 		</select>
		 	</p>
		 	
		 	<input type="submit" value="전송"/>

		 </fieldset>
	</form>
</body>
```

# div, span. 그룹

```html
<title>Insert title here</title>

<style type="text/css">
	* {
		padding: 0px;
		margin: 0px;
	}
	div {
		border: 1px dashed blue;
		margin: 10px;
	}
	#body{
		height: 400px;
	}
	#left {
		width: 48%;
		height: 90%;
		float: left;
	}
	#right{
		width: 48%;
		height: 90%;
		float: right;
	}

</style>

</head>
<body>

<div id="header">
<h1>제목</h1>
	<div>
		<span><a href="#">메뉴1</a></span>
		<span><a href="#">메뉴2</a></span>
		<span><a href="#">메뉴3</a></span>
		<span><a href="#">메뉴4</a></span>
	</div> 
</div>
	
<div id="body">
		<div id="left">
			<p>내용1</p>		
		</div>
		<div id="right">
			<p>내용2</p>
		</div>
	</div>
	
	<div id="footer">
		<address>copyright &copy; all rights reserved qclass...</address>
	</div>

</body>
```

# semantic. 시멘틱 구조
- body안에 header, section, footer로 구분
![시멘틱구조](https://sangyeon96.gitbooks.io/do-it-html5-css3/content/assets/semantic_tag.png)

```html
<style type="text/css">

	*{
		padding: 0px;
		margin: 0px;
	}
	.html5{
		border: 1px dotted red;
		margin: 10px;
	}
	section{
		height: 400px;
	}
	#left{
		width: 48%;
		height: 90%;
		float: left;
	}
	#right{
		width: 48%;
		height: 90%;
		float: right;
	}
</style>

<body>

	<header class="html5">
		<h1>제목</h1>
		
		<nav class="html5">
			<span><a href="#">메뉴1</a></span>
			<span><a href="#">메뉴2</a></span>
			<span><a href="#">메뉴3</a></span>
			<span><a href="#">메뉴4</a></span>
		</nav>
	</header>
	
	<section class="html5">
		<article class="html5" id="left">
			<p>내용1</p>		
		</article>
		<article class="html5" id="right">
			<p>내용2</p>
		</article>
	</section>
	
	<footer class="html5">
		<address>copyright &copy; all rights reserved qclass...</address>
	</footer>

</body>
```

# html4 vs html5 비교

![비교](https://s3.amazonaws.com/viking_education/web_development/web_app_eng/html5_sectioning_high_level.jpg)
![비교2](https://s3.amazonaws.com/viking_education/web_development/web_app_eng/html5_sectioning_specific_post.jpg)