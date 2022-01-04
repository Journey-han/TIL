# Scanner
- 문자 파일이나 바이트 기반 입력 스트림에서 라인 단위 문자열을 쉽게 읽도록 하기 위해 java.util 패키지에서 제공하는 클래스.
- 라인 단위 문자열을 읽기 위해 nextLine() 메서드를 제공한다.

```java
Scanner scanner = new Scanner(System.in);

String inputData = scanner.nextLine();
```

1. `Scanner scanner` : scanner 변수 선언.
2. `new Scanner(System.in)` : 바이트 기반 입력 스트림으로부터 scanner 생성 .
3. `new Scanner(System.in) -> Scanner scanner` : 생성된 scanner를 변수에 저장.
4. `String inputData` : string 변수 선언.
5. `scanner.nextLine()` : 'enter' 이전까지 입력된 행단위 문자열을 읽음.
6. `scanner.nextLine() -> String inputData` : 읽은 문자열을 string 변수에 저장.

### 난수 발생 코드

```java
public class RandomCube {
	
	public static void prnCube() {

		int ranSum = 0;
		int ranCount = 0;
		double ranAvg = 0;
		int xSum = 0;
		
		for (int i = 0; i < 5; i++) {
			for (int j = 0; j < 5; j++) {
				//난수의 갯수 세기
				ranCount++;
				
				// 난수발생
				//1 ~9 : (int) (Math.random() * (9 -1 +1)) + 1
				int random = (int) (Math.random() * (9)) + 1;
				System.out.printf("%2d",random);
				
				ranSum += random;
				
				// X의 합
				 if ((i == j) || (i + j == 4)) {
					 //xSum = xSum + random;
					 xSum += random;
				 }

			}
			System.out.println();
			}
		ranAvg = (double) ranSum / ranCount;
		
		System.out.println("전체 난수의 합 : " + ranSum);
		System.out.println("전체 난수의 평균 : " + ranAvg);
		System.out.println("X의 합 : " + xSum);
	}
	
	public static void main(String[] args) {
		/*
		 *  1 ~ 9 사이의 난수로 이루어진
		 *  5 * 5 형태의 숫자를 출력하고,
		 *  전체 난수의 합,
		 *  전체 난수의 평균,
		 *  X의 합을 구하자.
		 */
		prnCube();
	}
}
```