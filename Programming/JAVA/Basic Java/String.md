# String
- `문자열 + 숫자`에서 숫자는 문자열로 취급한다.
- 연산자 우선 순위. 왼쪽에서 오른쪽으로 계산한다.
    - `1 + 2 + s = 3s` : 숫자로 먼저 인식 후 연산.
    - `s + 1 + 2 = s12` : 문자열이 먼저 인식 후 나머지도 문자열로 취급.

## string pool
- `String s = "(hello");` : string pool에 이미 있는 값이 존재하면 새로 만들지 않고 그 값을 가져온다.
- `String newS = new String("hello");` : 새로운 객체가 만들어져서 따로 저장. -> 참조타입 처럼 만들면 새로 만들어진다. 문자열은 변하지 않는다.

```java
String s = ("hello");
String h = ("hello");
System.out.println(s == h);     // true

String newS = new String("Hello");
System.out.println(s == newS); // false. newS는 새로운 객체이기 때문에.
```

## 문자열 활용 예제

- 예제)

```java
private static String str = "The String class represents character strings."; //전역변수
```

1. str의 길이

```java
int length = str.length();

System.out.println("1. " + str.length());
```

2. str 전체 대문자

```java
String upper = str.toUpperCase();

System.out.println("2. " + str.toUpperCase());  
// 이전 str은 변하지 않았다. 대입을 안해서 immutable 때문에
```

3. str 전체 소문자

```java
String lower = str.toLowerCase();

System.out.println("3. " + str.toLowerCase());
```

4. str에서 첫번째로 나오는 c의 위치(인덱스)

```java
char ch = 'c';
int index = str.indexOf(ch);
System.out.println("4. " + str.indexOf(ch));

System.out.println("4. " + str.indexOf('c'));
```

5. class 단어를 찾아서 java로 바꿔서

```java
// class 찾아서
String target = "class";
int start = str.indexOf(target);
int end = start + target.length();
String change = str.substring(start, end );
		
// java로 바꿈
change = "java"; 
		
//전체 출력
System.out.println("5. " + str.replace(target, change));
// 간단하게
System.out.println("5. " + str.replace("class", "java"));
```

6. character 단어를 찾아서 대문자로 변환 후, 전체 출력

```java
// charcater 찾아서
String target = "character";
int start = str.indexOf(target);
int end = start + target.length();
String upper = str.substring(start, end);
		
// 대문자로 변환
upper = upper.toUpperCase();
		
// 전체 출력
System.out.println("6. " + str.replace(target, upper));
```

7. str을 char[]로 출력하되, 'c'만 출력하자. 그리고 c의 갯수 출력

```java
char[] ch = str.toCharArray();
int count = 0;
		
System.out.print("7. ");
for (int i = 0; i < ch.length; i++) {
	//System.out.printf("%c", ch[i]);
	if (ch[i] == 'c' || ch[i] == 'C') {
		System.out.printf("%c ", ch[i]);
		count++;
	}
}
System.out.println("\n c의 갯수: " + count);
```

8. str을 char[]로 출력하되, 대문자만 출력하자. 그리고 대문자의 갯수를 출력

```java
char[] ch = str.toCharArray();
int count = 0;
		
System.out.print("8. ");
for (int i = 0; i < ch.length; i++) {
	// ch[i] -> "char" -> isUpperCase();
	if (Character.isUpperCase(ch[i])) {
		System.out.printf("%c ", ch[i]);
		count++;
				
	}
}
System.out.println("\n 대문자의 갯수 : " + count);
```

9. str 사이의 공백 제거 후 출력

```java
System.out.println("9. " + str.trim()); // 앞 뒤 공백 없어주는 것. 이 경우엔 앞 뒤 공백이 없어서 변화 없음.
System.out.println("9. " + str.replace(" ", "")); 
System.out.println("9. " + str.replaceAll(" ", ""));
```

10. 전체를 역순으로 출력

```java
int arrIndex = 0;
		
char[] ch = new char[str.length()]; //새로운 배열, 원본과 똑같은 사이즈. // 문자열은 캐릭터 배열이기 때문에.
		
for (int i = str.length()-1; i >=0; i--) {	// length -1 번지에 원본의 0번지부터 대입하자.
	ch[i] = str.charAt(arrIndex);
	arrIndex++;
}
System.out.print("10. ");
System.out.println(ch); //character배열은 그냥 출력해도 문자열로 나온다.
```

## StringBuilder
- string을 +연산으로 연결할 떄, 내부적으로 StringBuilder로 더해준다. (jdk 1.5)
- 메모리 할당과 메모리 헤제를 발생 시키며 더하는 연산이 많아지면 성능적으로 좋지 않다.
- 새로운 객체를 생성하는 것이 아니라 기존의 데이터에 더하는 방식 -> 속도 빠름, 부하 적음

### immutable
- String은 소위 불변(immutable). 2개의 String 객체가 있을 때 + 연산 시 새로운 String 객체를 생성한다.

```java
String s = "안녕하세요.";
System.out.println(s.hashCode());
		
s += "저는 ";
System.out.println(s.hashCode());
		
s += "한지연 입니다.";
System.out.println(s.hashCode());
	
System.out.println(s);
// hashCode 해당 객체를 메모리가 관리하기 위한 코드. 주소라고 생각하기.
		
// 안녕하세요 -> 하이!
System.out.println(s.replace("안녕하세요.", "하이!"));
System.out.println(s);	// 그냥 만들어지고 나서 대입은 안했으니까. 하이로 출력 안함.
		
s = s.replace("안녕하세요.", "하이!");	//대입해서 새로 만들어졌다.
System.out.println(s);
System.out.println(s.hashCode());	// 해쉬코드도 새로 만들어짐.
```

### mutable

```java
StringBuilder ss = new StringBuilder();
ss.append("ABC");
ss.append("DEF");
System.out.println(ss.toString());
// 만들어진 문자열을 출력하기 위해서는 StringBuilder의 인스턴스인 ss의 toString()을 부른다.

StringBuffer sb = new StringBuffer(); // 꼭 참조타입으로 new 써야한다.
//method chaining
sb.append("안녕하세요.").append(" 저는 ").append("한지연입니다.");

System.out.println(sb.hashCode());	// 앞에 append만 출력했을 때랑 뒤에 append와 같이 출력했을 때의 해쉬코드는 같다. 값만 바뀐것.
System.out.println(sb); 
		
		
sb.replace(0, 5, "하이!");
System.out.println(sb);
		
// 거꾸로 출력
sb.reverse();
System.out.println(sb);
```

## 문자열 자르기

```java
String str = "The String class represents character strings."; // 지역변수라서 static 없다.
String str02 = "The,String,class,represents,character,strings.";
```

1. `java.lang.String.substring(begin index, end index);` 인덱스 기준으로 문자열을 자른다.

```java
System.out.println(str.substring(4, 10));
```		
		
2. `java.lang.String.split` 정규표현식 기준으로 문자열을 자른다.

```java
String[] temp = str02.split(","); // character 배열과 string배열고 다르다.
for (int i = 0; i < temp.length; i++) {
	System.out.println(temp[i]);
}
System.out.println(temp[1]); // temp의 2 번지를 찾아서.
```

3. java.util.StringTokenizer

```java
StringTokenizer st = new StringTokenizer(str02, ","); // new 새로운 객체 생성. str02를 ,로 잘라줄꺼야. 차레대로 가져오는건 좋음. 하지만 중간만 잘라서 오긴 힘들다.
		
while (st.hasMoreTokens()) { // 토큰을 더 가지고 있니? 화살표(주소값 가르키고 있다)가 가지고 있는지 확인, // while 이니까 반복 행위.
	System.out.println(st.nextToken()); // 다음 토큰. 가지고 있는 토큰을 빼오기. // 넥스트 토큰이 없으면 while문 끝난다.
}
```