# Abstract Interface
- 추상 클래스 : abstract class. 하나 이상의 추상 메서드를 가질 수 있는 클래스
    - `public abstract class Animal { }`
- 추상 메서드 : abstract method. body(block)가 없는 메소드 -> 상속 받는 자식 클래스에서 반드시 구현!
    - `public abstract void bark();`
    - 추상 클래스에서는 new 연산자를 사용할 수 없다. 기능이 없음.
    - **'상속받는 너희가 알아서 동물들의 울음소리를 만들어~'** 추상적으로 크게 묶어 놓는 것. 자식들이 따로 설장 할 수 있게끔.
    - 먹는 행위는 똑같기 때문에 추상클래스 안씀.
        - `public void eat(String feed) { System.out.println(feed + "먹는다"); }`

- Animal. java

```java
public abstract class Animal {
	
	public abstract void bark(); 			
	
	public void eat(String feed) {		
		System.out.println(feed + "먹는다.");
    }
}
```

- Cat.java

```java
public class Cat extends Animal {

	@Override
	public void bark() {
		System.out.println("야옹");
	}
	
	@Override			// 추상클래스와 상관없이 부모꺼에서 가져와서 확장할꺼니까 쓸 수 있다.
	public void eat (String feed) {
		System.out.println("고양이가");
		super.eat(feed);
    }
}
```

- Dog.java

```java
public class Dog extends Animal {

	@Override
	public void bark() {
		System.out.println("멍멍");
	}
}
```

- MTest.java

```java
public class MTest {
	public static void main(String[] args) {
		//Animal animal = new Animal(); 	// animal 타입의 객체를 만들 수 없음. 추상 클래스의 추상메소드이기 때문에.
		Animal cat = new Cat(); 			// 부모타입으로 씀. 추상클래스 아니기 때문에 new 쓸 수 있다.
		Animal dog = new Dog();
		
		cat.bark();
		dog.bark();
		
		cat.eat("생선");
		dog.eat("뼈다귀");
	}
}
```

## 동적 바인딩
- 실행 시 메모리 할당을 하면서 메서드를 동적으로 연동하는 방식.
    - 코드 절약, 실행속도 향상 4, 행위 은닉(코드 은닉) 

```java
System.out.println("선택해 주세요\n[1:고양이 2:멍멍이 3:도토]");
Scanner sc = new Scanner(System.in);
int select = sc.nextInt();
```

- 객체를 각각 안만든다. 컴파일시엔 모르고 런터임시 숫자를 입력하면 그 숫자에 맞게 객체 생성!

```java
Animal animal = null;
		
switch (select) {
    case 1: 
		animal = new Cat();
		break;
	case 2:
		animal = new Dog();
		break;
	case 3:
		animal = new Elephant();
		break;
}
		
animal.start(); 
        // 지금은 null 실행해서 스위치 번호 넣어서 그에 맞게 실행. 지금은 뭘 넣을지 모름.
animal.stop();
```