# AOP
**AOP(Aspect Oriented Programming)**  
관점 지향 프로그래밍(AOP)은 객체지향 프로그래밍의 뒤를 이은 또 하나의 프로그래밍 언어구조. 객체지향보다 큰 관점.    
**횡단 관점의 분리(Separation of Cross Cutting Concern)**  

문제를 해결하기 위한 핵심관심사항과 전체에 적용되는 공통관심사항을 기준으로 프로그래밍함으로써 공통모듈을 여러코드에 쉽게 적용할 수 있도록 지원하는 기술.  

공통으로 사용하는 기능들을 모듈화하고 해당 기능을 프로그램 코드에서 직접 명시하지 않고 선언적으로 처리하여 필요한 컴포넌트에 계층적으로 다양한 기능들을 적용한다.  

**공통 부분은 빼서 따로 관리하는 것**

### CC (Core Concern)
주 관심사항.  
주 업무. 객체로 만들어짐. 실질적인 업무들은 메서드로 만들어짐.  
  
### CCC (Cross Cutting Concern)
공통 관심사항. 보안처리, Logging, transaction 등.  
주 업무가 아님. 보조업무로써 실질적인 업무를 담당하는 CC의 위 아래에 붙어서 수행.

### 결합점 (Join Point)
인스턴스의 생성시점. 메소드를 호출하는 시점. Exception이 발생하는 시점과 같이 애플리케이션이 실행될 때 특정 작업이 실행되는 시점을 의미한다. (Aspect를 플러그인 할 수 있는 애플리케이션의 실행 시점).  
  
### 교차점 (Pointcut)  
충고가 어떤 결합점에 적용되어야 하는지 정의. 명시적인 클래스의 이름, 메소드의 이름이나 클래스나 메소드의 이름과 패턴이 일치하는 결합점을 지정 가능토고 해준다.(스프링 설정파일 안에 XML로 작성)  

### 충고 (Advice)
교차점에서 지정한 결합점에서 실행(삽입)되어야 하는 코드. Aspect의 실제 구현체.  

### 에스펙트 (Aspect)  
에스펙트는 AOP의 중심 단위. Advice와 pointcut을 합친 것. 구현하고자 하는 횡단 관심사의 기능, 애플리케이션의 모듈화 하고자 하는 부분.  

### 엮기 (Weaving)  
Aspect를 대상 객체에 적용하여 새로운 프록시 객체를 생성하는 과정을 말한다. Aspect는 대상 객체의 지정된 결합점에 엮인다.
  
## 설정 구조
xml파일에 직접 설정하기.
`<aop:config>`  
`<aop:pointcut/>`           : pointcut 설정
`<aop:aspect>`              : aspect 설정
`<aop:before/>`             : method 실행 전
`<aop:after-returning/>`    : method 정상 실행 후
`<aop:after-thorwing/>`     : method 예외 발생 시
`<aop:after/>`              : method 실행 후 (예외 발생 여부 상관 없음.) 
`<aop:around/>`             : 모든 시점 적용 가능
`</aspect>`  
`</aop:config>`  
  
## Advice
언제 Aspect를 로직에 적용할 지를 정의.

- @Before
- @After
- @AfterReturning
- @AfterThrowing
- @Around 

## Joinpoint
CCC 가 결합 될 수 있는 모든 상황. 
Advice를 적용 가능한 지점. 메서드 호출, 필드 값 변경 등이 Joinpoint에 해당.  
Spring AOP는 프록시 기반의 AOP이기 때문에 메서드 실행에 대한 Joinpoint만 지원된다. *(필드 값 변경 같은 Joinpoint를 사용하고 싶다면 AspectJ를 사용)*

## Pointcut
ccc가 결합될 특정 joinpoint를 선언.  
Join point의 부분 집합. 실제로 Advice가 적용되는 Join point를 나타냄.  
스프링에서는 **정규 표현식**이나 AspectJ의 문법을 이용해 Pointcut을 재정의 할 수 있다.

    pointcut="execution(public void com.test03.Woman.classWork())"
    pointcut="execution(public * *(..))"
    <!-- * 리턴타입, * 메소드 타입. . 파라미터타입 갯수 몇개인지 상관 없다. -->

## Advisor(Aspect)
공통으로 적용되는 기능. advice + pointcut.  
   
    <bean id="myAdvisor" class="org.springframework.aop.aspectj.AspectJExpressionPointcutAdvisor">
		<property name="advice" ref="myAdvice" />
		<property name="expression" value="execution(public * *(..))" />
	</bean>

## Weaving
Advice를 핵심 로직 코드에 적용하는 것.  
로깅이나 / 트랜잭션에 많이 사용한다.   
  
1. Compile-time Weaving  
Load-time에 대한 절차가 없어서 퍼포먼스 하락 없이 구성이 가능.  
Lombok과 같이 compile시 간섭하는 plugin들과 충돌이 발생. 

2. Class Load-time Weaving  
applicationContext에 로드된 객체들을 불러온 뒤, AspectJ weaver에 의해 객체들을 weaving.  
객체들을 다 불러온 뒤 weaving을 하기 때문에 약간의 퍼포먼스 하락이 존재.  

3. **Run-time weaving**  
***Spring AOP에서 사용하는 방식***   
소스코드나 클래스 정보 자체를 변경하지 않고 중간에 프록시 객체를 생성하여 AOP를 적용.  

## Proxy
타겟을 감싸서 요청을 대신 받아주는 랩핑 클래스. Advisor가 객체가 되어(프록시 객체)

    <bean class="org.springframework.aop.framework.autoproxy.DefaultAdvisorAutoProxyCreator" />

### AOP에서 Spring Bean에 Proxy 주입
![Spring bean Proxy](./resources/image/스프링 프록시.png)


## OCP
Open-Closed Principle  
- 인터페이스를 통해 제공되는 확장 포인트는 확장을 위해 개방되어 있고, 인터페이스를 이용하는 클래스는 자신의 변화가 불필요하게 일어나지 않도록 굳게 폐쇄 되어있다.

- A가 B를 의존한다면, B를 가져다 쓰는 A는 변화가 없게 폐쇄.  
공개 되어 있는 B는 언제든 다른 기능으로 변화를 줄 수 있는 확장성이 좋게 개방시켜두는게 좋다.