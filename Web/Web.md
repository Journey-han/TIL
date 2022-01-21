# WEB이란
- **World Wide Web**(WWW, W3)은 인터넷에 연결된 컴퓨터를 통해 사람들이 정보를 공유할 수 있는 전 세계적인 정보 공간을 말한다.
- web의 용도는 다양하게 나눌 수 있다.

### Web Site
- google, naver, facebook 등 HTML로 구성된 여러 도메인 사이트들

### API (Application Programming Interface)
- Web Service. Kakao Open API, Google Open API, Naver Open API 등

### User Interface
- Chrome, Safari, Explorer, Firefox, Smart Watch, IP TV 등

## HTTP
- Hypertext Transfer ***Protocol***
- 어플리케이션 컨트롤
- GET, POST, PUT, DELETE, OPTIONS, HEAD, TRACE, CONNECT

## URI
- Uniform ***Resource*** Identifier
- 리소스 식별자
- 특정 사이트, 특정 쇼핑 목록, 동영상 목록
- 모든 정보에 접근 할 수 있는 정보

## HTML
- Hyper Text Markup ***Language***
- 하이퍼미디어 포맷
- XML을 바탕으로 한 범용 문서 포맷
- 이를 이용하여 Chrome, Safari, Explorer에서 사용자가 알아보기 쉬운 형태로 표현

## REST
- Representational State Transfer : 자원의 상태 전달. 네트워크 아키텍처
1. Client, Server : 클라이언트와 서버가 서로 독립적으로 분리되어있어야 한다.
2. Stateless : 요청에 대해서 클라이언트의 상태를 서버에 저장하지 않는다.
3. Cashe : 클라이언트는 서버의 응답을 Cache(임시저장) 할 수 있어야한다.
4. 계층화 (Layerd System) : 서버와 클라이언트 사이에, 방화벽, 게이트웨이, Proxy 등 다양한 계층 형태로 구성이 가능해야하며, 이를 확장할 수 있어야한다.
5. 인터페이스 일관성 : 인터페이스의 일관성을 지키고, 아키텍처를 단순화시켜 작은 단위로 분리하여, 클라이언트, 서버가 독립적으로 개선 될 수 있어야 한다.
6. Code on Demand (optional) : 자바 애플릿, 자바스크립트, 플래시 등 특정한 기능을 서버로부터 클라이언트가 전달받아 코드를 실행 할 수 있어야 한다.

### REST를 잘 사용했는지 판단하기.
- 다음 인터페이스 일관성이 잘 지켜졌는지 확인.
1. 자원의 식별
2. 메시지를 통한 리소스 조작
3. 자기 서술적 메시지
4. 애플리케이션 상태에 대한 엔진으로써 하이퍼미디어 