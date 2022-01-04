# Operator
### 전역 변수
- 형태 : public static int ten = 10;
- 메서드 바깥에서. 메서드에서 호출 가능하다.
   
- class 변수 : static이 붙여진 전역변수는 해당 클래스 타입 전체에 똑같은 값을 가지게 된다.
    - 예) static int basketSize = 20;
- instance 변수 : static이 붙여지지 않는다.각각의 클래스 변수가 따로따로 가지고 있다.
    - 예) int count = 10;

### 지역 변수
- 메서드 안에서 사용. 바깥에서 호출이 불가하다.
- 전역 변수와 지역변수의 이름이 같으면  **_지역변수_**가 우선적! 되독록이면 같은 이름으로 안쓰는게 좋다.
- 예) int ten = 10;

### 상수 : 항상 같은 값. 변하지 않는 수. 변수의 반댓말.
- 상수를 표현할 때는 final을 쓴다. 상수는 대문자로 쓰는게 암묵적인 룰.
- 예) public static **final** int *MY_TEN* = 10;

## 사칙 연산
- f formatter -> java.base -> java.util.Formatter
- %d : digit - 숫자 (정수)

```java
public static String op01(int a, int b) {

    System.out.printf("%d + %d = %d\n", a, b, a + b);
    System.out.printf("%d - %d = %d\n", a, b, a - b);
    System.out.printf("%d * %d = %d\n", a, b, a * b);
    System.out.printf("%d / %d 의 몫 : %d, 나머지 : %d\n", a, b, a / b, a % b);

    return "사칙연산 끝!\n";
}
```

## 대입 연산
- 연산 후 대입 : +=, -=, *=, /= 

```java
public static String op02() {
		
	int res = 0;
	System.out.println("res : " + res);

	res = res + 10;
	System.out.println("res : " + res);

	res = res - 5;
	System.out.println("res : " + res);

	res += 5; // res = res + 5
	System.out.println(res);

	res *= 2; // res = res * 2
	System.out.println(res);

	return null;
}
```

## 증감 연산
- 변수의 앞 뒤에 증가/증감 연산자를 붙이게 되면, 변수가 가진 값을 1씩 증가/증감하게 된다.
- 전위 연산 : 연산자를 변수 앞에 붙여서 연산을 먼저 하게 되고, 값을 나중에 리턴한다. 예) **++1**
- 후위 연산 : 연산자를 변수 뒤에 붙여서 값을 먼저 리턴하고, 연산을 나중에 하게 된다. 예) **1++**

```java
public static void op03(int a, int b) {

	System.out.println(a); // 10
	System.out.println(++a); // 전위연산자. 11
	System.out.println(a++); // 후위연산자. 11 (11로 먼저 출력 되고 12로 연산한다)
	System.out.println(a); // 12

	// a = 12 b =3
	int result = a++ + --b + b++ + ++a;
	// result = 12(13) + 2(2) + 2(3) + 14(14)
	// 12 + 2 + 2 + 14
	// a = 14 b = 3
	System.out.println(result);
	System.out.println("a : " + a);
	System.out.println("b : " + b);
}
```

## 논리 연산
- &(and), |(or), &&, ||

### OR 관계   
     
|First|Second|Result|
|:-:|:-:|:-:|
|true|true|true|
|true|false|true|
|false|true|true|
|false|false|false|
    
### AND 관계    
    
|First|Second|Result|
|:-:|:-:|:-:|
|true|true|true|
|true|false|false|
|false|true|false|
|false|false|false|

```java
System.out.println(true & true); 	// 참 그리고 참 : 참;
System.out.println(true & false); 	// 참 그리고 거짓 : 거짓; 	하나라도 거짓이면 거짓!
System.out.println(false & true); 	// 거짓 그리고 참 : 거짓;
System.out.println(false & false); 	// 거짓 그리고 거짓 : 거짓;

System.out.println(true | true); 	// 참 또는 참 : 참;
System.out.println(true | false); 	// 참 또는 것짓 : 참;
System.out.println(false | true); 	// 거짓 또느 참 : 참;
System.out.println(false | false); 	// 거짓 또는 거짓 : 거짓;
		
System.out.println(true && true); 	// 참 그리고 참
System.out.println(true && false); 	// 참 그리고 거짓
System.out.println(false && true); 	// 거짓 그리고 참
System.out.println(false && false); // 거짓 그리고 거짓
		
System.out.println(true || true);
System.out.println(true || false);
System.out.println(false || true);
System.out.println(false || false);
// 메모리 효율을 위해서 && || 쓴다.
		
int a = 2;
int b = 3;
System.out.println((a > b) && (b > a));
```

## 삼항 연산
- 식 : (조건) ? 참일 때 리턴 값 : 거짓일 때 리턴 값;

```java
public static boolean op05() {

	int a = MY_TEN;
	int b = 7;
	int result = (a > b) ? a - b : b - a;
	System.out.println(result);
		
	String res = (a > b) ? "a가 b보다 크다" : ((a < b) ? "a가 b보다 작다." : "a와 b는 같다.");
				// (조건) ? 조건이 참일 때 리턴값 : 거짓일 때 ((조건 ? 참 : 거짓)); 삼항연산자 안에 중첩된 삼항연산. 중첩에는 () 안해도 됨.
	System.out.println(res);
		
	return false;
	// System.out.println("끝났니?");	// 여기까지 손이 닿지 않아요.. return에서 기능을 다 수행했기 때문에
}
```

## 비교 연산
-  `>, < >=, ==`

```java
System.out.println(true == false);
System.out.println(MY_TEN != 3); //!= 같지 않다. ! NOT이란 뜻.
```

## 비트 연산
- 값을 0과 1 비트 상태에서 연산한 결과를 리턴한다.
- `&, ||, ^, ~, <<, >> ...`

```java
int a = 10;
// 0000 0000 0000 0000 0000 0000 0000 0000 1010;
int b = 2;					// 3 이면..... 0011
// 0000 0000 0000 0000 0000 0000 0000 0000 0010;
		
System.out.println(a & b);
// 0000 0000 0000 0000 0000 0000 0000 0000 1010;
// 0000 0000 0000 0000 0000 0000 0000 0000 0010;
//&----------------------------------------------
// 0000 0000 0000 0000 0000 0000 0000 0000 0010;
		
System.out.println(a | b);
// 0000 0000 0000 0000 0000 0000 0000 0000 1010;
// 0000 0000 0000 0000 0000 0000 0000 0000 0010;
//|----------------------------------------------
// 0000 0000 0000 0000 0000 0000 0000 0000 1010;
		
System.out.println(~a);
// 0000 0000 0000 0000 0000 0000 0000 0000 1010;		
//~----------------------------------------------
// 1111 1111 1111 1111 1111 1111 1111 1111 0101;	2의 보수. 2진수!
		
System.out.println("-------------------------------------------");
		
int c = 10;
// 0000 0000 0000 0000 0000 0000 0000 1010;
		
System.out.println(c >> 2); // 왼쪽으로 2칸 가세요.
// 00 0000 0000 0000 0000 0000 0000 10;
System.out.println(Integer.toBinaryString(c >> 2));
System.out.println(c << 4); // 오른쪽으로 4칸 가세요.
// 0000 0000 0000 0000 0000 0000 1010 0000;
System.out.println(Integer.toBinaryString(c << 4));
}
```