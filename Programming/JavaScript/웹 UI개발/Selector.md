# Selector

- 자바스크립트 / jQuery 문법은 HTML 변경을 위해 사용한다.
- 셀렉터는 HTML요소를 찾기 위해 사용한다.
- 셀렉터 뒤에 메서드는 여러가지 있다. 그때그때 찾아서 쓰는게 효율적이다.

## 예제 코드

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <h2 id="hello">안녕하세요</h2>
    <h2 id="hi">안녕</h2>

    <script>
        // document.getElementById('hello').innerHTML = '안녕!';
        document.getElementById('hello').style.fontSize = '30px';
        document.getElementById('hi').innerHTML = '안녕하는데';
    </script>
    
</body>
</html>
```

### DOM구조 해석하기
- **document** : 웹 문서(HTML)를 뜻한다.
- **.(마침표)** : ~의
- **getElementById('hi')** : 아이디가 hello인 요소를 찾아라
- **innerHTML** : 내부의 HTML
- **=** : 등호는 오른쪽의 내용을 왼쪽에 대입하라는 뜻
- **'안녕하는데'** : 안녕하는데라는 문자열이다. 모든 글자는 따옴표('')안에 담는다. 큰따옴표 작은따옴표 둘 다 가능