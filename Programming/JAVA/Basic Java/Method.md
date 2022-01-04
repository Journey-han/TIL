# Method
- Method : 기능. 명령문들의 집합.   
- Main method : 프로그램의 주 진입점. 메인 메서드는 프로젝트 하나 당 하나만 있으면 된다.    
- 기본 구성 : 접근제한자 메모리 영역 리턴타입 메서드명 (파라미터) { 바디 }.  
    
```java
public static void main(String[] args) {
        // JVM이 가져갈 것이고 메서드 안의 명령들을 수행시킬 것이다.
}
```
    
- 호출 하기 : 메인 메서드 바디 안에서는 `class.method();`로 호출 가능하다.    
    - 같은 클래스 내부에 있는 메서드를 호출 할 때는 class 생략 가능하다.    
    
## 접근 제한자
- public : 어디서나 접근, 참조 가능(+).    
    
```java
public static void publicMethod() {
		System.out.println("public method 호출!");
}
```
    
- protectd : 상속일 경우 상속된 곳에서, 상속이 아닌 경우 같은 패키지 내애서 (#)    
    
```java
protected static void protectedMethod() {
		System.out.println("protected method 호출!");
}
```
    
- (default) : 같은 패키지 내에서만 (~) 아무것도 안썼을 때     
    
```java
static void defaultMethod() {
		System.out.println("default method 호출!");
}
```
    
- private : 현재 클래스 내에서만 (-)    
    
```java
private static void privateMethod() {
		System.out.println("private method 호출!");
}
```
    
- non-static method : 객체 필요!    
    
```java
public void nonStaticMethod() {
		System.out.println("MethodTest01의 non-static method 호출!");
}
```
    
## 메서드 호출 방법
1. static method    
- class.method();    
    
```java
MethodTest01.publicMethod();
MethodTest01.protectedMethod(); 	// 상속인경우 상속된 매소드 내, 아닐경우 같은 패키지 내에서
MethodTest01.defaultMethod();
MethodTest01.privateMethod(); 		// not visible. 만들어 있지만 접근할 수 없다. 보일 수 없다. 해당 class 내에서만 실행가능
MethodTest01.abc();					// undefined 정의XX. abc는 없다.
```
    
2. non-static method    
- class(참조타입) 변수 = new class();    
    - 변수.method();    
    
```java
MethodTest01 method01 = new MethodTest01();
method01.nonStaticMethod();
```
    
### objectaid
- UML : Unified Modeling Language