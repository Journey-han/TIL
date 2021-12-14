# Singleton pattern
- 소프트웨어 디자인 패턴 중 하나. 메모리(heap)에 객체를 한번만 생성한다.
- 타입 - 싱글톤. 클래스는 참조타입

1. 생성자를 외부에서 사용할 수 없도록 private으로 선언. 

```java
private Singleton() {
	System.out.println("singleton instance 생성");
}
```

2. 객체를 확인할 주소(reference) 변수 선언.
- new 사용할 수 없음. 싱글톤을 리턴해주는 getInstance 객체 생성.

```java
private static Singleton singleton;
```

3. 객체가 heap에 있는지 확인. ->  있으면 주소값 리턴, 없으면 새로운 객체 생성
- 싱글톤은 메서드 이름을 보통 getInstance라고 쓴다.

```java
public static Singleton getInstance() {
if (singleton == null) {	// 싱글톤에 리턴할 객체가 없으면
	singleton = new Singleton();	// 객체 생성!
	System.out.println("new!");
} else {					// 객체가 있으면 생성 안함.
	System.out.println("exist!");
}	
return singleton;
}
```