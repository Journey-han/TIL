# Exception
- 예외

```java
public int calculation() {
	int res = 0;
	while (true) {
		try {
			res = inputNum() / inputNum();
			break;
		} catch (InputMismatchException e) {
			// e.printStackTrace(); // 예외났을 때 빨간 글씨들
			System.out.println("잘못 입력하셨습니다. 숫자만 입력해 주세요.");
		} catch (ArithmeticException e) {
			System.out.println("0으로 나누면 안됩니다. 다시 입력해주세요.");
		} finally {
			System.out.println("계산 완료");
		}
		// System.out.println(res);
	}
	return res;
}

public int inputNum() {
	int n = 0;
	System.out.println("숫자만 입력하세요 : ");
	Scanner sc = new Scanner(System.in);
	n = sc.nextInt();
		return n;
}

public static void main(String[] args) {
	ExceptionCal ec = new ExceptionCal();
	System.out.println(ec.calculation());
}
```

```java
public class MyException extends Exception {

	public MyException() {
		this("내가 만든 예외");
	}

	public MyException(String message) {
		super(message);
	}
}

public static void main(String[] args) {
	int a = 0;

	try {
		System.out.println("숫자를 입력해 주세요.");
		Scanner sc = new Scanner(System.in);
		a = sc.nextInt();

		int result = 1 / a;
		if (a == 100) {
			// throw : 내가 원하는 예외를 발생시킴.
			throw new MyException();
		}
		if (a == 666) {
			throw new InputMismatchException(); // throw는 무조건 new 객체 생성해야한다.
		}
        
	} catch (InputMismatchException e) { // catch는 위에서 아래로 명령문을 수행한다.
		System.out.println("숫자만 입력해 주세요.");
	} catch (MyException e) {
		e.printStackTrace();
		System.out.println("100울 입력하셨습니다.");
	} catch (Exception e) { // 모든 예외를 다 잡아준다. 예외중에 가장 큰 예외. 단, 어떤 예외인지 모름
		System.out.println("예외가 발생했습니다. ");
	}
	System.out.println(a);
}

```