# Filter
HTTP 요청과 응답을 변경할 수 있는 재사용 가능한 코드. 서블릿 2.3 규약에 새롭게 추가됐다. 
필터는 객체의 형태로 존재. 클라이언트로부터 오는 요청(request)과 최종자원(서블릿/JSP) 사이에 위치하며 클라이어느의 요청 정보를 알맞게 변경할 수 있다. 또한 최종 자원과 클라이언트로 가는 응답(response) 사이에 위치하여 최종 자원의 요청 결과를 알맞게 변경할 수 있다.
**서버 밖에서 존재. 요청되는거, 응답되는거 받는 역할**

## 필터의 기본 구조
**서블릿이 받게 되는 요청 정보는 클라이언트와 서블릿 사이에 존재하는 필터에 의해 변경된 요청정보가 되며, 클라이언트가 보게 되는 응답 정보는 클라이언트와 자원사이에 존재하는 필터에 의해 변경된 응답 정보가 된다.**

필터는 클라이언트와 서블릿 사이에 1개가 존재하는 경우가 보통이지만, **여러개의 필터가 모여서 하나의 체인(chain)을 형성**할 수 있다.

여러개의 필터가 모여서 하나의 체인을 형성할 때 첫번 째 필터가 변경하는 요청정보는 클라이언트 요청정보, 체인의 두번째 필터가 변경하는 요청정보는 첫번째 필터를 통해서 변경된 요청정보. 즉 요청정보는 변경에 변경에 변경을 거듭.

필터는 요청/응답 정보를 변경하는 역할 뿐 아니라 흐름을 변경하는 역할도 할 수 있다. **필터는 클라이언트의 요청을 필터체인의 다음 단계에 보내는 것이 아니라, 다른 자원의 결과를 클라이언트에 저송할 수 있다.**

## 클래스
필터를 구현하는데 핵심적인 역할을 하는 인터페이스/클래스
**java.servlet.Filter 인터페이스**
클라이언트와 최종 자원 사이에 위치하는 필터를 나타내는 객체가 구현해야하는 인터페이스
**javax.servlet.ServletReuqestWrapper 클래스**
**javax.servlet.ServletResponseWrapper 클래스**
필터가 요청을 변경한 결과 또는 응답을 변경한 결과를 저장할 래퍼 클래스.


## 필터 메소드
- **public void init(FilterConfig filterConfig) throw ServletException** : 필터를 웹 컨테이너에 생성한 후 초기화할 때 호출.
필터가 만들어질 때. 필터 초기화 작업

- **public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws java.io.IOExecption, ServletException** : 체인을 따라 다음에 존재하는 필터로 이동. 체인의 가장 마지막에는 클라이언트가 요청한 서블릿/JSP가 위치한다. Request, Response가 필터를 거칠 때 수행되는 메소드

- **public void destroy()** : 필터가 웹 컨테이너에서 삭제될 때 호출. 필터가 종료될 때. 필터가 사용한 자원 반납.

필터의 역할을 하는 메소드 **doFilter()** 서블릿 컨테이너는 사용자가 특정한 자원 요청 시 그 자원 사이에 필터가 존재하는 경우 그 필터 객체의 doFilter() 메소드를 호출. 바로 그 시점부터 필터가 작용하기 시작한다.

## 설정하기
web.xml 에서 필터 설정하기.
- 어플리케이션에서 사용될 필터를 지정
- 특정 자원에 대해서 어떤 필터를 사용할지 지정()
- 필터 초기화 될 때 init() 메소드가 호출될 때 전달되는 파라미터 값. 주로 필터를 사용하기 전에 초기화해야하는 객체나 자원을 할당할 때 필요한 정보를 제공하기 위해 사용
- 클라이언트가 요청한 특정 URI에 대해서 필터링 할 때 사용. 
    '/'로 시작하고 '/*'로 끝나는 url-pattern은 경로 매핑 시 사용
    '*'로 시작하는 url-pattern은 확장자에 대한 매핑 시 사용

## 쓰임
필터는 주로 요청에 대한 인증, 권한 체크 등을 하는데에 쓰인다. 구체적으로 들어온 요청이 DispatcherServlet에 전달되기 전에 헤더를 검사해 인증 토큰이 있는지 없는지, 올바른지 올바르지 않은지 등을 검사할 수 있을 것.



# Interceptor
Spring Framework에서 자체적으로 제공하는 기능. dispatcher servlet이 읽는 설정파일에 interceptor를 설정해야한다.
- servlet-context.xml 또는 dispatcher-servlet.xml에 interceptor를 등록

HandlerInterceptoreAdapter를 상속받아서 custom한 interceptor를 작성

**preHandle** : DS -> C 넘어갈때 필요한 핸들러 매핑을 interceptor 해준다. 내가 원하는 대로 다른 컨트롤러로 전달.
Controller의 메소드를 실행하기 전 처리. 세션 검증에 많이 사용.

**postHandle** : Controller의 메소드를 실행 후 처리.
세션 검증 후 로그인 인증이 되어있다면 해당 사용자 정보를 세션에 저장하는 로직을 넣을 수도 있다. 
또한 view에 전달할 ModelAndView 객체를 이용해서 특정 작업을 수행도 할 수 있다.

**afterCompletion** : Controller의 메소드를 실행 후 view를 클라이언트에게 전송 후에 처리.

# Filter와 Interceptor 차이
### Filter
- dispatcherServlet으로 요청이 가기전에 실행
- DispatcherServlet 앞단에서 정보처리
- J2EE 표준스펙에 정의되어 있는 기능
- web.xml에서 설정

### Interceptor
- Controller로 요청이 가기전에 실행
- DispatcherServlet에서 Handler(Controller)로 가기전에 정보 처리
- SpringFramework에서 자체적으로 제공하는 기능
- servlet-context.xml에서 설정

### 적용시점
Filter -> Interceptor -> AOP