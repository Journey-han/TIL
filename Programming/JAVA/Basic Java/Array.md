# Array
- 데이터를 연속된 공간에 나열하고, 각 데이터에 **인덱스**(0부터 시작)를 부여해놓은 자료구조.
- 많은 양의 데이터를 다루는 프로그램에서 효율적인 방법으로 사용. 적은 코드로 처리 가능.
- 배열은 같은 타입의 데이터만 저장할 수 있다.
- 한 번 생성된 배열은 길이를 늘리거나 줄일 수 없다.

## 배열 선언
1. 방법 1
- `타입[] 변수;`

```java
int [] a;			// 선언. 여러개를 담을 수 있는 방이라고 생각하기. int a []; 이렇게 써도 된다.
a = new int[2];		// 정의. int값만 들어갈 수 있는 2칸 짜리 방(배열)이다. 해당 숫자만큼 메모리를 잡아둔다.
a[0] = 1;			// 초기화. 배열은 0번 째 부터 시작한다.
a[1] = 2;
```

2. 방법 2
- `타입[] 변수 = new 타입[] {값1, 값2, 값3, ...};`

```java
int[] b = new int[] {5, 4, 3, 2, 1};	// 선언 정의 초기화
```

3. 방법 3
- `타입[] 변수 = {값1, 값2, 값3, ...}`

```java
int[] c = {6, 7, 8, 9, 10};				// 선언 초기화. 스태틱한 형태로 만든 배열.
```

### 배열 예문
```java
System.out.println(a[0]+ b[1] + c[2]);				// 배열의 length가 5라면 번지수는 length - 1. 5-1이다. 0 ~ 4
		
int sum = 0;
sum= a[0]+b[1]+c[2];
System.out.printf("%d", sum);
		
System.out.println(c);			// [I@adca536 주소값. c라는 변수를 호출하면 c 배열이 가진 메모리 위치. 주소값이 나온다. 참조변수. 
System.out.println(Arrays.toString(c));		// java.util.Arrays패키지에 있는 메소드사용. 해당 배열에 있는 실제 값을 출력해준다.
								// 해당 배열의 값을 가져와서 리턴하는 것. toString
		
String[]s = new String[] {"Have", "a", "nice", "day"};
prn(s);
modi(s);
```

### for문 + if문 + 배열 예문

```java
// nice -> good 변경후 전체 출력
// [Have, a , good, day] (Arrays.toString 사용금지)
		
arr[2] = "good";		// 글자 변경.
		
System.out.print("[");
for (int i = 0; i < arr.length; i++) {	//length는 길이. 
	//System.out.printf("%s ", arr[i]);
	if (i == arr.length-1) {
		System.out.printf("%s", arr[i]);
	} else {
		System.out.printf("%s, ", arr[i]);
	}
} 
System.out.println("]");
```

## 다중 배열
- 배열이 두개 이상.

1. 방법 1
- `타입[][] 변수 = new 타입[값1][값2]`

```java
int [][] a = new int[2][2];		//배열이 두개. 왼쪽에 큰 배열(바깥 배열) 안에 오른쪽 작은 배열(안쪽 배열)이 들어가는 것.
a[0][0] = 1;
a[0][1] = 2;
a[1][0] = 3;
a[1][1] = 4;
		
System.out.println(Arrays.toString(a));
System.out.println(Arrays.deepToString(a));
```

2. 방법 2
- `타입[][] 변수 = new 타입 [값1][]` : 비정형 배열

```java
int[][] b = new int [3][]; // 비정형 배열
b[0] = new int[3];
b[1] = new int[5];
b[2] = new int[1];		// 배열안에 배열이 굳이 똑같을 필요 없다.
```

3. 방법 3, 방법 4
- `타입[][] 변수 = new 타입[][] {{값1,값2},{값1,값2,값3},{값1}, ... }`
- `타입[][] 변수 = {{값1,값2},{값1,값2,값3},{값1}, ... }`

```java
int[][]	c = new int[][] {{1,2},{3,4,5},{6,7,8,9},{10}};

int[][] d = {{1, 2, 3, 4},{5},{6, 7, 8},{9, 10}};
```

### 알파벳 출력 코드

```java
/*
* a b c d e f g h i j k l s t u v w x y z 출력! 단, 일차원 배열(char[])에, 반복문을 사용하여
* 알파벳을 저장한 후에 출력하자.
*/

public static void prn01(char[] arr) {
	for (int i = 0; i < 6; i++) {
		for (int j = 0; j < arr.length; j++) {
			System.out.print(" ");
		}
	}
}

public static void main(String[] args) {
	char[] ch = new char[26];
	for (int i = 0; i < ch.length; i++) {
		ch[i] = (char) ('a' + i); // int를 char 형태로 형변환.
	}
	System.out.println(Arrays.toString(ch));

	for (int i = 1; i <= ch.length; i++) {
		System.out.print(ch[i - 1] + " ");
		if (i % 6 == 0) {
			System.out.println();
		}
	}
	System.out.println("\n");

	// 2) 1번에서 만든 배열을 거꾸로 출력하자.
	int tmp = 1;
	for (int i = ch.length; i > 0; i--) {
		System.out.printf("%s ", ch[i-1]);
		if (tmp % 6 == 0) {
			System.out.println();
		}
		tmp++;
	}
		
	System.out.println("\n");
		
	// 3) 1번에서 만든 배열을 대문자로 바꾸어 출력하자.
	// ascii -> A : 65 a : 97	32차이.
	int cnt = 1;
	for (int i = 0; i <ch.length; i++) {
		ch[i] = Character.toUpperCase(ch[i]);
		System.out.printf("%s ", ch[i]);
		//System.out.print((char)(ch[i] - 32)); // 아스키코드 사용해서 출력하기.
			
		if (cnt % 6 == 0) {
			System.out.println();
		}
		cnt++;
	}	
}
```

## Deep Copy. 배열 깊은 복사
- 새로운 객체를 생성해서 값만 복사

### 값을 가져와서 복사하는 방법 3가지

```java
int[] original = {10, 20, 30, 40, 50};
```

1. 배열 인덱스의 값을 가져와서 복사

```java
int[] copy01 = new int[original.length]; // original.length를 가지고 새로운 객체 만들었음.
for (int i = 0; i < original.length; i++) {
	copy01[i] = original[i];
}
		
System.out.println(Arrays.toString(original));
System.out.println(Arrays.toString(copy01)); //값은 복사해서 값만 똑같음
System.out.println(original);
System.out.println(copy01); //주소값은 다름.
System.out.println(original == copy01);
		
copy01[2] = 300;
System.out.println(Arrays.toString(original)); // 주소값이 다르기 때문에 영향을 안받는다.

```

2. original에게 요청하여 복사

```java
int[] copy02 = original.clone(); 	// 새로 복사 한것.
System.out.println(Arrays.toString(original));
System.out.println(Arrays.toString(copy02)); // 역시 값만 복사. 
		
copy02[2] = 3000;
System.out.println(Arrays.toString(original));
System.out.println(Arrays.toString(copy02));
```

3. System.arrayCopy 사용

```java
int[] systemArr = new int[10];
Arrays.fill(systemArr, 100); //해당 배열을 모두 100으로 채워주자. 
System.out.println(Arrays.toString(systemArr));
		
 			     //  원본의, 시작, 복사본의, 시작, 갯수
System.arraycopy(original, 0, systemArr, 1, 3);
System.out.println(Arrays.toString(systemArr));
```

## Shallow Copy. 배열 얕은 복사
- 주소 값 복사. 

```java
int[] original = {10, 20, 30, 40, 50}; // 이 주소값을
int[] copy = original;	// copy도 가져감.
		 
System.out.println(Arrays.toString(original));
System.out.println(Arrays.toString(copy));
		 
System.out.println(original);
System.out.println(copy);
		 
copy[2] = 300;
System.out.println(Arrays.toString(original));	//주소가 같아서 값도 똑같이 나올 것.
System.out.println(Arrays.toString(copy));
		 
System.out.println(original == copy);
```