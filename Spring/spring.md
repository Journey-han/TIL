# Spring
분산형, 기업형 응용 프로그램 개발을 위한 API  
결합력을 낮추는 DI, DB Transaction 처리, 로그 처리 등  
  
애플리케이션 개발에 바탕이 되는 템플릿과 같은 역할을 하는 클래스들과 인터페이스의 집합.  
  
### ***스프링은 POJO(Plain Old Java object) 기반의 경량 컨테이너***  
*POJO* - 순수하게 자바의 기술 기반.  
*컨테이너* - 객체들을 담기 때문에 컨테이너이다.    
    
**EJB(Enterprise JavaBean)** 기반 개발 에서 **POJO(Plain Old Java Object)** 기반 개발로 진화.  
    
***Spring framework는 엔터프라이즈 애플리케이션 개발을 복잡한 EJB가 아닌 POJO를 통해서 개발 할 수 있도록 돕는다.***  
  
## Java EE  
일반적인 로컬 응요프로그램 개발을 위한 API. 파일I/O, 콘솔 I/O, 윈도우 I/O, 네트워크 I/O, Thread, 등  

### Why Spring? 
기업형 어플리케이션을 만들 땐 다양한 레이어를 만들게 되는데 유지보수를 어떻게 할 것인가? 소스코드를 수정해서 유지보수 하려면 소스코드가 항상 있어야 하고, 소스코드를 계속 열고 수정하는건 위험부담이 크기때문에 대체하는 방법 또는 추가하는 방법으로 유지보수해야한다.  
  
인터페이스를 사용해서 객체를 숨길 수 있다.  
  
## Framework
프로그램의 골격이 되는 기본 코드. 개발하기 위한 템플릿. 반 쯤 만들어진 프로그램.  
소프트웨어 개발을 간소화하기 위해 개발됐다.  
공통적인 부분은 만들어져 있고, 개발자가 필요한 부분만 추가적으로 써주면 된다.  
(개발자는 프레임워크를 기반으로 소스코드를 작성하여 소프트웨어 완성시킨다.)  
  
## Library
특정 목저을 위해 사용하는 함수들을 모듈화 시킨 것. (*.jar)  
  
## MyBatis
JDBC 대신 공통부분(1. DB연결, 2. 계정연결, 5. DB종료)은 만들어져 있어서 쿼리 부분만 신경쓸 수 있게 만들어 놓았다.  


## Spring 개요

### 기본 설명
1. 어플리케이션 프레임워크로 불리며, 웹 어플리케이션은 물론 콘솔 어플리케이션이나 스윙과 같은 GUI 어플리케이션 등 어떤 어플리케이션에도 적용 가능한 프레임워크이다.  
2. 스프링은 EJB와 같이 복잡한 순서를 거치지 않아도 간단하게 이용할 수 있기 때문에 **경량 컨테이너**라고도 부른다.  
3. DI(Dependency Injection)과 AOP(Aspect Oriented Programming), OCP(Open-Closed Principle)을 중점 기술로 사용하고 있지만, 이 외에도 여러가지 기능을 제공한다.  

### 구성요소(Module)
**Core Container**    : IoC, DI 기능을 포함하여 프레임워크의 기본 부분 제공.  
**AOP**               : Aspect 지향 프로그래밍 구현 제공  
**Instrumentation**   : 애플리케이션 서버에서 사용되는 클래스 제공  
**Messaging**         : message 기반 애플리케이션의 토대가 되는 모듈  
**DataAccess/Intergration**     : JDBC 추상화 계층 제공, 트랜잭션 관리 등.  
**Web**               : 웹 어플리케이션 개발에 필요한 기능 제공  
**Test**              : 스프링 구성 요소에 대한 유닛 테스트 및 통합 테스트 지원.  
    
## 3대 용어
DI(Dependency Injection) / IoC(Inversion of Control)  
AOP(Aspect Oriented Programming)  
OCP(Open Closed Principle)  
