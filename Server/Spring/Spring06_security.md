# Spring Security
- 스프링 기반의 애플리케이션의 보안(인증과 권한, 인가 등)을 담당하는 스프링 하위프레임워크.
     
- 인증(Authenticate, 누구인지?)
- 인가(Authorize, 어떤 것을 할 수 있는지?)를 담당하는 프레임워크를 말한다.
     
- 스프링 시큐리티에서는 주로 서블릿 필터(filter)와 이들로 구성된 필터체인으로 구성된 위임모델을 사용. 보안과 관련해서 체계적으로 많은 옵션을 제공해주기 때문에 개발자 입장에서는 일일이 보안관련 로직을 작성하지 않아도 된다는 장점이 있다.

## 특징과 구조
- 보안과 관련하여 체계적으로 많은 옵션을 제공하여 편리하게 사용할 수 있다.
- Filter 기반으로 동작하여 MVC와 분리하여 관리 및 동작
- 어노테이션을 통한 간단한 설정
- Spring Security는 기본적으로 세션 & 쿠키방식으로 인증
- **인증관리자(Authentication Manager)**와 **접근 결정 관리자(Access Decision Manager)**를 통해 사용자의 리소스 접근을 관리
인증 관리자는 **UsenamePasswordAuthenticationFilter**, 접근 결정 관리자는 **FilterSecurityInterceptor**가 수행

