# Conditional. 조건문
## if
- 조건식의 결과에 따라 블록 실행 여부가 결정된다. 
- 조건식에는 true 또는 false 값을 산출할 수 있는 연산식이나, boolean 타입 변수가 온다.
- `if(조건식) { ... }` : 조건식이 true가 되면 중괄호 내부 실행. 

```java
if (i < j) { // 만일 조건이 참이라면
	// body(block) 안에 있는 명령들을 수행하자.
	System.out.println("i는 j보다 작습니다.");
} // 거짓이라면 수행 안하고 내려감
```

### if ~ else
- else 블록과 함께 사용된다. if문의 조건식이 true면 if문이 실행되고, 조건식이 false면 else 블록이 실행된다.
- 한 블록의 내용만 실행되고 전체 if문을 벗어나게 된다.
- `if(조건식) { ... } else { ... }` : 조건식이 true가 되면 if 중괄호 내부를 실행, false가 되면 else 중괄호 내부 실행.

```java
if (i > j) { // 조건이 모두가 거짓이라면 수행 안함. 참이라면 수행함.
	System.out.println("i는 j보다 큽니다.");
} else {
    // 위의 조건이 참이 아니라면
	System.out.println("i는 j보다 크지 않습니다.");
}
```

### if ~ else if ~ ... ~ else
- 조건문이 여러 개인 if문이다.
- 처음 if문의 조건식이 false일 경우 다른 조건식의 결과에 따라 실행 블록을 선택할 수 있다. 이때 if 블록의 끝에 else if문을 붙이면 된다.
- else if문의 수는 제한이 없다. 단, 여러 개의 조건식 중 true가 되는 블록만 실행하고 전체 if문을 벗어나게 된다.
- 모든 조건식이 false일 경우 else 블록을 실행하고 if문을 벗어나게 된다.
- `if(조건식1) { ... } else if(조건식2) { ... } else { ... }` : 조건식1이 true -> if문 실행, 조건식2가 true -> else if문 실행, 조건식1과 조건식2 모두 false -> else 블록 실행.

```java
if (i == 2) { // 참일 때 이 조건 출력 만약 이 조건이 거짓이라면
	System.out.println("i는 2 입니다.");
} else if (i == 3) { // 여기서 확인. 참 일 때 출력 만약 이 조건도 거짓이라면
	System.out.println("i는 3 입니다.");
} else if (i == 4) { // 여기서 확인 이것도 거짓이라면
	System.out.println("i는 4 입니다.");
} else if (i == 5) { // 여기서 확인.
	System.out.println("i는 5 입니다.");
} else { // 다 거짓이라면 이거 출력.
	System.out.println("i는 2, 3, 4, 5도 아닙니다.");
}
```

- 예문)

```java
if (i % 5 == 0) {
	System.out.println("5의 배수 입니다.");
}

if (i == i % 5) {
     System.out.println("5의 배수 입니다.");
} else {
	System.out.println("5의 배수가 아닙니다");
}

//삼항 연산자
// 메서드 파라미터를 char c로 받았을 경우
String res = (Character.isLowerCase(c)) ? "소문자 입니다." : 
	(Character.isUpperCase(c)) ? "대문자 입니다." : ""; // 빈 문자열은 ""; 이렇게 쓰던가 null;이라고 써야함}

// ~ 이면서 =. 2의 배수 이면서 3의 배수여야 함
if (i % 2 == 0) {
	if (i % 3 == 0) {
		System.out.println("2와 3의 배수입니다.");
	} else {
		System.out.println("2와 3의 배수가 아닙니다.");
	}
} else {
	System.out.println("2와 3의 배수가 아닙니다.");
}
```

## Switch
- 변수가 어떤 값을 갖느냐에 따라 실행문이 선택된다. switch문에 식 또는 값이 들어가야 한다. 조건문X
- if는 가장 위의 조건부터 순차적으로 모든 코드를 읽지만 switch는 해당 식 / 값에 맞는 case로 jumping 한다 -> 컴파일러가 작업하기 수월하다. fall through break;는 해당 식 / 값 명령만 출력하고 싶다면 break;를 작성해서 거기서 출력을 멈춘다. switch body에서 break;를 만나면 해당 switch body에서 탈출해라! 해당 식 또는 값이 없다면 그냥 끝난다.
- 같은 기능의 if문보다 코드가 간결하다.
- `switch(변수) { case 값1: ... case 값2: ... default: ... }` : 변수가 값1이면 첫 번째 case 코드 실행, 값2이면 두 번째 case 코드 실행. 값1과 값2 모두 아니면 default 코드 실행

```java
int i = 5;

	switch (i) { // 식 또는 값이어야 함. 조건문은 안돼요. switch case break는 셋트 개념으로 사용하기.

	case 1:
	case 3:
	case 5:
	case 7:
	case 9:
		System.out.println("홀수입니다.");
		break;
	case 2: case 4: case 6: case 8: case 10: // 이렇게 옆으로 쓸 수 있음. 하지만 한줄 한줄 쓰는걸 권장!!
		System.out.println("짝수입니다.");
		break;
    default: // else 같은 아이. case 아무것도 안맞으면.
			System.out.println("홀수, 짝수 아닙니다.");
    }
```

- java 1.7 이후부터 문자열도 가능.

# Loop. 반복문
## While
- 조건에 따라 반복할 때 주로 사용한다.
- while문의 괄호 안의 주건이 참일 동안 명령을 수행하고 계속 반복한다. 거짓이 될 때 까지 반복. 거짓이 되면 명령 수행을 멈춘다.
- `while(조건식) { ... }` : 조건식이 true가 될 때까지만 중괄호를 반복 실행한다.

```java
int i = 10;
		
//조건식
while(i < 10) {	//while(??) 괄호 안의 조건이 참일 동안 명령을 수행하고 계속 반복한다. 거짓이 될때까지 반복, 거짓이 되면 명령 수행 안한다,
	System.out.println(i);
			
	//증감식
	i++;	
}
		
System.out.println("while이 종료된 이후의 i : " + i);
```

### do while
- 무조건 수행 한번 하고 나서 조건을 판별한다.
- `do { ... } while { ... }` : 먼저 do 블록을 실행하고, 그다음 조건식이 true가 되면 while문 반복 실행한다.

```java
int i = 10;
		
do { //무조건 수행 한번 하고 나서 조건을 판별한다. while로 내려감
	System.out.println(i);
	i++;
} while(i < 10); //조건이 참일때 명령. 거짓이라면 명령 수행 안한다.
	System.out.println("while 이 끝난 후의 i : " + i); //그리고 출력
```

- 무한 루프 : 계속 돌아가야 하는 상황에서 참일 때 계속 실행.

```java
int i = 1;
		
while (true) { //무한루프. 계속 돌아가야하는 상황에서 참일 때 계속 실행.
	System.out.println(i);
	i++;
			
	if (i == 10) { // 무한루프에는 멈추는 조건이 필요하다.
		 break;
	}
}
System.out.println("while이 끝난 후의 i : " + i);
```

### Break
- 반복문과 switch문의 실행을 중지 할 때 사용한다.

```java
int count = 0;
char c = 'A';
boolean stop = false;
		
while(!stop) { //! NOT. stop에 있는 값이 false이니까 !false는 true.
	while (true) {
		System.out.print(c + " ");
		c++;
		count++;
				
		if (count % 5 == 0) {
			break;
		}
		if (count == 26) {
			stop = true;
			break;
		}
	}
	System.out.println();	
}
```

### Continue
- 반복문에서만 사용한다. continue문이 실행되면 for문의 증감식 또는 while문, do-while문의 조건식으로 이동한다.

```java
int i = 0;
		
while(i < 10) {
	i++;
	if(i % 2 == 0) {
		continue;	//밑에 있는 내용을 뛰어넘고 다음 조건으로 넘어간다. 
	}
	System.out.println(i);
}
```

## For
- 반복 횟수를 알고 있을 때 주로 사용한다.
- 연산은 초기값 조건식 명령문 증감식 순으로 수행한다.
- 조건이 참이면 명령문 조건식 증감식 -> 명령문 조건식 증감식 ... 반복 된다.
- `for (초기값; 조건식; 증감식) { 바디. 명령문 }` : 조건식이 true가 될 떄까지만 명령문 실행. 반복할 때마다 증감식이 실행. 초기화식은 조건식과 증감식에서 사용할 루프 카운터 변수를 초기화. 주로 지정된 횟수만큼 반복할 때 사용한다.

```java
for (int i = 0; i < 10; i++) {
	System.out.println(i); //초기값 조건식 명령 증감식 순으로 수행한다. 조건이 참이면 명령 조건 증감 명령 조건 증감 반복
}
```

### 대표적인 반복문 예시. 구구단

- while문을 사용항 구구단

```java
// i 초기값
int i = 2;

// i 조건식
while (i < 10) {
	System.out.println("<" + i + "단>");
	// j 초기값
	int j =1;
	// j 조건식
	while (j < 10) {
		System.out.printf("%d * %d = %d\n", i, j, (i * j));
		// j 증감식
		j++;
	}
	// i 증감식
	i++;
}
```

- for문을 사용한 구구단. 
- 중첩 for문 사용. 중첩 for문이 끝나면 바깥 for문으로 돌아간다. 

```java
for (int i = 2; i < 10; i++) { // 2 ~ 9 단  
// System.out.printf("<%d>단\n", i);
	System.out.println("<" + i + "단");
	for (int j = 1; j < 10; j++) { // 1 ~ 9 행
		System.out.printf("%d * %d = %d\n", i, j, (i * j));				
	} //for j
	System.out.println();
} //for i

// 구구단 프린트를 위한 메서드
public static void gugu02(int dan) {
	System.out.println("<" + dan + "단>");

	for (int j = 1; j < 10; j++) {
				
		System.out.printf("%d * %d = %d\n", dan, j, (dan * j));
				
	} //for j			
}
```
