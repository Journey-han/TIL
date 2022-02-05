# Spring MVC
- 스프링 MVC 프레임워크는 스프링 기반으로 사용 가능.  
- 스프링이 제공하는 트랜잭션처리가  DI 및 AOP 적용 등을 쉽게 사용할 수 있다.  
    
- 스프링 프레임워크를 연동하기 위해 추가적인 설정을 하지 않아도 된다.  
     
- Spring MVC는 **Model-View-Controller(MVC)** 구현을 포함하여 도메인 모델 코드와 웹 폼을 깔끔하게 분리 가능.  
- 스프링 프레임워크의 다른 모든 기능과 통합할 수 있다.  
- DI와 선언적인 방식으로 MVC 기반의 웹 프로그램 개발을 효율적으로 할 수 있도록 지원.   

## 특징
- Spring Framework의 다른 모듈과의 연계 용이.  
- 컨트롤러, command 객체, 모델 객체, validator 등 각각의 열할에 대한 명확한 분리.  
- Form 객체 없이 사용자 지정 가능한 데이터 바인딩과 유효성 체크 지원.  
- 어떠한 view 기술과도 연계 용이.  
- Tag lib 통한 Message 출력, Theme 적용 등과 입력 폼을 보다 쉽게 구현.

## 구성 요소
- **DispatcherServlet** :  
    - 클라이언트의 요청을 전달 받는다.  
    - 컨트롤러에게 클라이언트의 요청을 전달하고 컨트롤러가 리턴한 결과값을 view에 전달하여 알맞은 응답을 생성.
- **HandlerMapping** : 
    - 클라이언트의 요청 URL을 어떤 컨트롤러가 처리 할 지를 결정.  
    - RequestURL과 Controller 클래스의 매핑을 관리.  
- **Controller** :
    - 클라이언트의 요청을 처리한 뒤, 그 결과를 DispatcherServlet에 알려준다.  
    - 비즈니스 로직을 호출하여 처리 결과 ModelAndView 인스턴스를 반환.  
- **ModelAndView** :
    - 컨트롤러가 처리한 결과 정보 및 뷰 선택에 필요한 정보를 담는다.
- **ViewResolver** :
    - 컨트롤러의 처리결과를 생성할 뷰를 결정.

### 흐름  
![Spring MVC flow](/resources/image/Spring%20MVC%20flow.jpg)  
1. 브라우저가 요청을 DispatcherServlet으로 보내고 HandlerMapping에 가장 적합한 컨트롤러를 찾아서 선택해준다.   
2. 다시 DS에 와서 HandlerAdapter로 요청해서, 컨트롤러의 많은 메서드중에 요청을 처리할 수 있는 가장 적합한 메서드를 찾아준다. (dao, service 등 데이터가 가공되서 나온다)  
3. 컨트롤러에 요청해서 로직 수행.  
4. 찾은 다음 모델이라는 객체로 데이터를 가져온다.   
5. 다음 ViewResolver를 찾는다. 컨트롤러부터 모델 데이터와 뷰라는 정보가 왔는데 이 뷰에 해당하는 가장 적합한 jsp 문서를 찾아주세요.   
6. 처리결과를 출력할 view를 선택해서 view로 응답을 생성한다.  
7. DS로 전달  
8. 클라이언트로 응답 처리 한다.  
