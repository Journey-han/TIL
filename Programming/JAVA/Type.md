# Type   
### 정수형 타입 : byte, short, int, long    
- 기본 형태 : `타입 변수 = 값;`, `type variable = literal;`      
    - 예) `byte b01 = 126;`     b01을 byte 형태인 값 126을 사용할 것이라고 변수 선언.     
- 형 변환 : `byte b02 = (byte) 128;`    Casting 128은 byte보다 크기가 크니까 바로 넣을 수 없다.    
    - 결과 : -128     
    - 이유 :     
- 정수형 연산의 기본 타입은 `int`타입이다.    
- 진수 표현 : 2진수(0b), 8진수(00), 16진수(0x)    
    - 2진수 10 : 0b10      
    - 8진수 10 : 0010    
    - 16진수 10 : 0x10    
    
### 실수형 타입 : float, double    
- 소숫점을 포함하는 수    
- 기본 형태 : `float f1 = 0.1f;`    
- 실수형 연산의 기본 타입은 `double`타입이다.    
- 실수형의 가장 기본 타입은  double타입이기 때문에 접미사 d 안써도 오류가 안난다.    
    
### 문자형 char, 문자열 String, 논리형 boolean    
- 문자형은 `'문자형'`
    - char c1 = 'a';
- 문자열은 `"문자열"`
    - String s1 = "a";
- 논리형
    - boolean b1 = true;

### 참조 타입. Wrapper Class
- 기본타입 호출하면 변수의 값 자체를 출력해줌. -> 참조타입으로 바꾸면 기능을 사용할 수 있다. 클래스    
- 기본타입을 참조타타입으로 바꾸는 방법.    
    - byte		-> Byte    
	- short	    -> Short    
	- int		-> Integer    
	- long		-> Long    
	- float	    -> Float    
	- double	-> Double    
	- char		-> Character    
	- boolean	-> Boolean    

### Type to Type
1. int to char

```java
int i = 65;
char c = (char)i;
System.out.println(c);
```

2. char to int

```java
char c2 = 'B';
int i2 = (int)c2;
System.out.println(i2);
		
char c3 = '1';
char c4 = '9';
int i3 = c3 + c4;		//+는 int형에서 +는 이라서 아스키코드에서 49+ 
System.out.println(i3);
```

3. String to int

```java
String str = "33";
System.out.println(str + 1);
int i4 = Integer.parseInt(str);
System.out.println(i4 + 1);
```

4. int to String

```java
int i5 = 55;
System.out.println(i5 + 1);
String s5 = Integer.toString(i5);
System.out.println(s5 + 1);
String s6 = String.valueOf(i5);		//()에 들어오는것을 String으로 바꿔줌
System.out.println(s6 + 1);
```

5. 형 변환
- 묵시적 형 변환 (upCasting : 작은 타입에서 큰 타입으로 형 변환 - promotion)

```java
byte b1 = (byte) 100;	//여기서 (byte)는 생략이 가능하다.
int i1 = b1;	//형변환. byte는 크기가 1byte, int는 4byte이기 때문에 작은 타입에서 큰 타입으로
System.out.println(i1);묵
```

- 명시적 형 변환 (downCasting : 큰 타입이에서 작은 타입으로 형 변환 -casting)

```java		
int i2 = 100;
byte b2 = (byte) i2;	//형변환
System.out.println(b2);
```

6. boxing
- 기본 타입으로 참조타입(클래스)에 넣기.

```java
Integer i = new Integer(100);
System.out.println(i);
System.out.println(i.doubleValue()); //기능을 사용하고 싶을 때 사용. double 값으로 출력하고 싶은 기능을 썼다.
```

7. unBoxing
- boxing한 것을 참조타입에서 다시 기본타입의 값을 가져오는 것.
- **명시적**. 참조 타입에 있는 값을 intValue의 기능을 사용해서 값을 가져오는 것.

``` java
int j = i.intValue();
System.out.println(i);
```

- **묵시적**. 여기서 i는 Integer 참조타입. 에서 바로 기본타입 int값을 가져오는 것.

```java
int k = i;
System.out.println(k);
```
