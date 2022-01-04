# Thread
- Program : 실행파일
- Process : 실행되고 있는 상태
- Thread  : 작업 단위. 출력하는 스레드 입력받으려고 준비하는(커서) 스레드. 각자 무엇을 하고 있는 작업 단위.

- Process (Runtime) : 응용프로그램(.exe) 단위로 실행된느 모듈
- Runnable (Thread) : 하나의 process에 여러개의 메소드 단위로 실행되는 모듈

- Process - T, T, T, ...
    - (process : os에서 제어할 수 있는 가장 작은 단위)

### 자바에서 메소드 단위로 프로그램을 실행하는 방법 2가지
1. Runnable을 impliments (간단하게 실행 할 때)

```java
class MyThread01 implements Runnable {

	@Override
	public void run() {
		for (int i = 0; i < 10; i++) {
			System.out.println("i : " + i); // 0부터 9까지 출력하는 애
		}
	}
}

public class Thread01 {

	// main thread 이다. -> 우선순위가 높다.
	public static void main(String[] args) {

	System.out.println("main start -------------");

	// Thread가 아니다
	/*
	 * // 밑에 둘은 클래스를 객체로 만든것. 시퀀스다이어그램. MyTread01 my01 = new MyTread01(); MyTread01
	 * my02 = new MyTread01();
	 * my01.run(); my02.run();
	 */

	// Thread이다 // runnable을 implements받은것
	// 지 혼자 도는것.
	Thread my01 = new Thread(new MyThread01()); // implements Runnable 상속받아기 때문에 Thread 형식으로 만들어줘야 한다.
	Thread my02 = new Thread(new MyThread01());

	my01.start(); // start는 run을 자동으로 호출한다.
	my02.start();

	// 병렬로 동시에 실행되서. main은 main대로 우선순위로 일하고 1번, 2번도 알아서 일한다 동시에. 시작하자마자 끝났다. 지 일 한거임.
	System.out.println("main stop --------------");
}
```

2. Thread를 extends (기능 여러개가 필요할 때) -> Thread 간 양보, 죽이기, 등등...
- run() 메소드는 Thread.start()가 자동 호출

```java
class MyThread02 extends Thread {
	@Override
	public void run() {
		for (int i = 0; i < 10; i++) {
			System.out.println(i);
		}
	}
}

public class Thread02 {

	public static void main(String[] args) {
		MyThread02 my01 = new MyThread02(); // extends Thread 이기 때문에
		MyThread02 my02 = new MyThread02();

		// start() -> run()을 자동호출
		my01.start();
		my02.start();
	}
}
```

- 우선순위

```java
class MyThread03 extends Thread {

	public MyThread03(String name) {
		super(name);
	}

	@Override
	public void run() {
		for (int i = 0; i < 1000; i++) {
			System.out.println(this.getName() + " : " + i);
		}
		System.out.println(this.getName() + " 끝!!!!!!!!!!!!");
	}
}

public class Thread03 {

	public static void main(String[] args) {
		MyThread03 dog = new MyThread03("멍멍");
		MyThread03 cat = new MyThread03("야옹");
		
		// java의 thread scheduling은 우선순위(priority)와 순환할당(round-robin, 시간마다 번걸아가면서 할당.) 방식을 사욯한다.
		// 하지만 우선순위가 높다고 해서 먼저 끝나거나 하지 않음. 상황에 따라 다르다.
		
		// priority : 우선순위
		dog.setPriority(10);
		cat.setPriority(Thread.MIN_PRIORITY);
		
		dog.start();
		cat.start();
	}
}

public static void main(String[] args) {
	MyThread03 m1 = new MyThread03("야옹");
	MyThread03 m2 = new MyThread03("멍멍");

	long startTime = System.currentTimeMillis();

	m1.start();

	try {
		// join() : 해당 thread가 종료될 때 까지 다른 thread를 멈춤.
		m1.join();
	} catch (InterruptedException e) {
		e.printStackTrace();
	}
	m2.start();

	long endTime = System.currentTimeMillis();
	System.out.println("실행시간 : " + (endTime - startTime));
}
```

- 시간 만큼 죽이기

```java
while (true) {
	for (int i = 1; i < 10; i++) {
		try {
			// Thread를 해당 millis 만큼 sleep한다. 0.5초동안 메인메소드가 멈추는것.
			Thread.sleep(500);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		System.out.printf("%c ", '♥');
	}
	System.out.println();
}
```

### RuntimeTest

```java
Runtime rt = Runtime.getRuntime(); // new 안쓰니까 싱글톤.

// mac :
// String[] path = {"/usr
// p
try { // path
	Process prc = rt.exec("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe");
} catch (IOException e) {
	e.printStackTrace();
}
```