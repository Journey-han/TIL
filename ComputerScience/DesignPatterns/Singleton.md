# Singleton pattern
- 메모리(heap)에 **객체의 인스턴스가 오직 1개만 생성**되는 패턴이다.
- 생성자가 여러 차례 호출되더라도 실제로 생성되는 객체는 하나이고,
- 최초 생성 이후에 호출된 생성자는 최초의 생성자가 생성한 객체를 리턴
- 주로 공통된 객체를 여러개 생성해서 사용하는 DBCP(DataBase Connection Pool)와 같은 상황에서 많이 사용된다.
- 타입 - 싱글톤. 클래스는 참조타입

## 언어별 구현

- **파이썬**의 모듈은 그 자체로 싱글톤이다.
- **자바**는 생성자를 private으로 선언하여 상속이 불가능함을 지정하기도 한다.

## 구현 코드

```java
public class Singleton {

    private static Singleton instance = new Singleton();
    
    private Singleton() {
        // 생성자는 외부에서 호출못하게 private 으로 지정해야 한다.
    }

    public static Singleton getInstance() {
        return instance;
    }

    public void say() {
        System.out.println("hi, there");
    }
}
```

## 구현 방법
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

## 싱글톤 패턴을 사용하는 이유

- **메모리 측면**에서 이점. 최초 한 번의 new 연산자를 통해서 고정된 메모리 영역을 사용하기 때문에 추후 해당 객체에 접근할 때 메모리 낭비를 방지할 수 있다.
- 이미 생성된 인스턴스를 활용하니 **속도 측면**에서도 이점이 있다.
- 다른 클래스 간에 **데이터 공유가 쉽**다. 싱글톤 인스턴스가 전역으로 사용되는 인스턴스이기 때문에 다른 클래스들의 인스턴스들이 접근하여 사용할 수 있다. → 여러 클래스의 인스턴스에서 싱글톤 인스턴스의 데이터에 동시 접근하게 되면 동시성 문제가 발생 할 수 있다.

## 싱글톤 패턴의 문제점

- 싱글톤 패턴을 구현하는 코드 자체가 많이 필요하다.
- 테스트하기 어렵다.
- 의존 관계상 클라이언트가 구체 클래스에 의존하게 된다.
- 자식클래스를 만들 수 없다.
- 내부 상태를 변경하기 어렵다.
- 유연성이 많이 떨어지는 패턴이다.