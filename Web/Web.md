# 01. Web(웹)이란

- World Wide Web, WWW, W3은 인터넷에 연결된 컴퓨터를 통해 사람들이 정보를 공유할 수 있는 전 세계적인 정보 공간을 말한다.
- Web의 용도는 다양하게 나눌 수 있다.

### Web Site

- google, naver, daum, facebook 등 **HTML로 구성된 여러 사이트** 들

### API (Application Programming Interface)

- Web Service
- Kakao Open API, Google Open API, Navaer Open API 등

### User Interface

- Chrome, Safari, Explorer, Smart Watch, IP TV 등

## Web의 기본 3가지 요소

| URI | HTTP | HTML |
| :---: | :---: | :---: |
| Uniform Resource Idenfier | Hypertext Transfer Protocol | Hyper Text Markup Language |
| 리소스 식별자 | 어플리케이션 컨트롤 | 하이퍼 미디어 포맷 |
| 특정 사이트</br> 특정 쇼핑 목록</br> 동영상 목록</br></br>모든 정보에 접근 할 수 있는 정보 | GET</br>POST</br>PUT</br>DELETE</br>OPTIONS</br>HEAD</br>TRACE</br>CONNECT | XML을 바탕으로한 범용 문서 포맷</br></br>이를 이요하여 Chrome, Safari, Explorer에서</br> 사용자가 알아보기 쉬운 형태로 표현 |


# 02. REST API

## REST

### Representational State Transfer : 자원의 상태 전달. 네트워크 아키텍처

1. **Client, Server :** 클라이언트와 서버가 서로 독립적으로 분리되어있어야 한다.
2. **Stateless :** 요청에 대해서 클라이언트의 상태를 서버에 저장하지 않는다.
3. **Cashe :** 클라이언트는 서버의 응답을 Cache(임시저장) 할 수 있어야한다.
4. **계층화 (Layerd System) :** 서버와 클라이언트 사이에, 방화벽, 게이트웨이, Proxy 등 다양한 계층 형태로 구성이 가능해야하며, 이를 확장할 수 있어야한다.
5. **인터페이스 일관성 :** 인터페이스의 일관성을 지키고, 아키텍처를 단순화시켜 작은 단위로 분리하여, 클라이언트, 서버가 독립적으로 개선 될 수 있어야 한다.
6. **Code on Demand (optional) :** 자바 애플릿, 자바스크립트, 플래시 등 특정한 기능을 서버로부터 클라이언트가 전달받아 코드를 실행 할 수 있어야 한다.

## **REST를 잘 사용했는지 판단하기**

- 다음 인터페이스 **일관성**이 잘 지켜졌는지 확인.

### 1. 자원의 식별

- 웹 기반의 REST에서는 **리소스 접근을 할 때 URI를 사용**한다.
- https:<hi>//<hi>foo.<hi>co.<hi>kr/_user_/**100**
    - resource : *user*
    - 식별자 : **100**

### 2. 메시지를 통한 리소스 조작

- Web에서는 **다양한 방식으로 데이터를 전달** 할 수 있다.
- 그 중에서 가장 많이 사용하는 방식은 **HTML, XML, JSON, TEXT**등이 있다.
- 이 중에서 어떤 타입의 데이터인지를 알려주기 위해서 **HTTP Header 부분에 content-type을 통해서** value 값으로 데이터의 타입을 지정해 줄 수 있다.
- 또한 리소스 조작을 위해서 데이터 전체를 전달하지 않고, 이를 **메시지로 전달**한다.

>💡 EX) 서버의 user라는 정보의 전화번호를 처음에는 number라고 결정했고,  이 정보를 Client와 주고 받을 때, 그대로 사용하고 있었다면 후에 서버의 resource 변경으로 phone-number로 바뀌게 된다면      Client는 처리를 하지 못 하고 에러가 난다.
>  </br>
>  
>이러한 부분을 방지하기 위하여, **별도의 메세지의 형태로 데이터**를 주고 받으며, client-server가 독립적으로 확장 가능하도록 한다.

### 3. 자기 서술적 메시지

- 요청하는 데이터가 어떻게 처리 되어져야 하는지 충분한 데이터를 포함 할 수 있어야 한다.
- HTTP 기반의 REST에서는 HTTP Method와 Header 정보, 그리고 URI의 포함되는 정보로 표현할 수 있다.

|Method|Address|Message|
|:---:|:---:|:---:|
| GET | https://<hi>foo.co.<hi>kr/user/100 | 사용자의 정보 요청 |
| POST | https://<hi>foo.co.<hi>kr/user | 사용자 정보 생성 |
| PUT | https://<hi>foo.co.<hi>kr/user | 사용자 정보 생성 및 수정 |
| DELETE | https://<hi>foo.co.<hi>kr/user/100 | 사용자 정보 삭제 |
- 그 외에 담지 못 한 정보들은 URI의 메세지를 통하여 표현한다.

### 4. 애플리케이션 상태에 대한 엔진으로써 하이퍼미디어

- REST API를 개발할 때, 단순히 Client 요청에 대한 데이터만 응답해주는 것이 아닌 관련된 리소스에 대한 Link 정보까지 같이 포함되어져야한다.

### 이러한 조건들을 잘 갖춘 경우 **RESTFul**하다고 표현하고, 이를 **REST API**라고 부른다.


# 03. URI 설계

## 1. 설계 패턴

### 1. URI (Uniform Resource Identifier)

- 인터넷에서 특정 자원을 나타내는 주소 값. 해당 값은 유일하다. (응답은 달라질 수 있다.)
- **요청 :** https://<hi>naver.<hi>com/resource/sample/1
- **응답 :** naver.pdf, naver.docx

### 2. URL (Uniform Resource Locator)

- 인터넷 상에서의 자원, 특정 파일이 어디에 위치하는지 식별하는 주소
- **요청 :** https://<hi>naver.<hi>com/naver.pdf

### **URL은 URI**의 하위 개념이다.

## 2. URI 설계 원칙 (RFC-3986)

### 1) 슬래시 구분자(/)는 계층 관계를 나타내는 데 사용한다.

- https://<hi>naver.<hi>com/classes **/** java **/** curriculums **/** web-master

### 2) URI 마지막 문자로(/)는 포함되지 않는다.

- https://<hi>naver.<hi>com/classes/java/curriculums/web-master **/**

### 3) 하이픈(-)은 URI 가독성을 높이는데 사용한다.

- https://<hi>naver.<hi>com/classes/java/curriculums/web **-** master

### 4) 밑줄(_)은 사용하지 않는다.

- https://<hi>naver.<hi>com/classes/java/curriculums/web **_** master

### 5) URI 경로에는 소문자가 적합하다.

- https://<hi>naver.<hi>com/classes/**JAVA**/curriculums/web-master **(X)**
- https://<hi>naver.<hi>com/classes/java/curriculums/web-master

### 6) 파일 확장자는 URI에 포함하지 않는다.

- https://<hi>naver.<hi>com/classes/java/curriculums/web-master **.jsp**

### 7) 프로그래밍 언어네 의존적인 확장자를 사용하지 않는다.

- https://<hi>naver.<hi>com/classes/java/curriculums/web-master **.do**

### 8) 구현에 의존적인 경로를 사용하지 않는다.

- https://<hi>naver.<hi>com/ **servlet** /classes/java/curriculums/web-master

### 9) 세션 ID를 포함하지 않는다.

- https://<hi>naver.<hi>com/classes/java/curriculums/web-master?**session-id=asdf**

### 10) 프로그래밍 언어의 Methodㄹ명을 사용하지 않는다.

- https://<hi>naver.<hi>com/classes/java/curriculums/web-master?**action=intro**

### 11) 명사에 단수형보다는 복수형을 사용해야한다. 컬렉션에 대한 표현은 복수로 사용한다.

- https://<hi>naver.<hi>com/class**es**/java/curriculum**s**/web-master

### 12) 컨트롤러 이름으로는 동사나 동사구를 사용한다.

- https://<hi>naver.<hi>com/classes/java/curriculums/web-master/**re-order**

### 13) 경로 부분 중 변하는 부분은 유일한 값으로 대체 한다.

- ..../curriculums/web-master/lessons/**{lesson-id}**/users/**{user-id}**
- ..../curriculums/web-master/lessons/**002**/users/**100**

### 14) CRUD 기능을 나타내는 것은 URI에 사용하지 않는다.

- GET : ..../curriculums/web-master/lessons/002/users/100/**READ**  **(X)**
- DELETE : ..../curriculums/web-master/lessons/002/users/100

### 15) URI Query Parameter 디자인

- URI 쿼리 부분으로 컬렉션 결과에 대해서 필터링 할 수 있다.
- ..../curriculums/web-master **?chapter=7**

### 16) URI 쿼리는 컬렉션의 결과를 페이지로 구분하여 나타내는데 사용한다.

- ..../curriculums/web-master **?chapter=7&page=12&size=4&sort=asc**

### 17) API에 있어서 서브 도메인은 일관성 있게 사용해야 한다.

- https://<hi> **api.** naver.com, https://<hi> **api-** naver.com

### 18) 클라이언트 개발자 포털 서브 도메인은 일관성 있게 만든다. (운영기 반영 전 개발기)

- https://<hi> **dev-** naver.com, https://<hi> **developer-** naver.com

# 04. HTTP Protocol

- HTTP(**H**yper **T**ext **T**ransfer **P**rotocol)로 RFC 2616에서 규정된 Web에서 데이터를 주고 받는 프로토콜.
- 이름에는 하이퍼텍스트 전송용 프로토콜로 정의되어 있지만 실제로는 HTML, XML, JSON, Image, Voice, Video, Javascript, PDF 등 다양한 컴퓨터에서 다룰 수 있는 것은 모두 전송할수 있다.
- HTTP는 TCP를 기반으로 한 REST의 특징을 모두 구현하고 있는 Web기반의 프로토콜
- HTTP는 메세지를 주고(Request) 받는(Response) 형태의 통신 방법이다.

![스9.png](https://t1.daumcdn.net/cafeattach/1Dzpp/3ec67ff72d7fce5668c1e0c3363d9334db917171)

## HTTP의 요청을 특정하는 Method 8가지

- REST를 구현하기 위한 인터페이스이기 때문에 알아둬야 한다.

|  | 의미 | CRUD | 멱등성 | 안정성 | Path Variable | Query Parameter | DataBody |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| GET | 리소스 취득 | R | O | X | O | O | X |
| POST | 리소스 생성, 추가 | C | X | X | O | △ | O |
| PUT | 리소스 갱신, 생성 | C / U | O | X | O | △ | O |
| DELETE | 리속스 삭제 | D | O | X | O | O | X |
| HEAD | 헤더 데이터 취득 | - | O | O | - | - | - |
| OPTIONS | 지원하는 메소드 취득 | - | O | - | - | - | - |
| TRACE | 요청메세지 반환 | - | O | - | - | - | - |
| CONNECT | 프록시 동작의 터널 접속으로 변경  | - | X | - | - | - | - |

## HTTP Status Code

- 응답의 상태를 나타내는 코드

|  | 의미 | 내용 |
| :---: | :---: | :---: |
| 1XX | 처리중 | 처리가 계속  되고 있는 상태. 클라이언트는 요청을 계속하거나 서버의 지시에 따라서 재요청 |
| 2XX | 성공 | 요청의 성공 |
| 3XX | 리다이렉트 | 다른 리소스로 리다이렉트. 해당 코드를 받았을 때는 Response의 새로운 주소로 다시 요청 |
| 4XX | 클라이언트 에러 | 클라이언트의 요청에 에러가 있는 상태. 재전송 하여도 에러가 해결되지 않는다. |
| 5XX | 서버 에러 | 서버 처리중 에러가 발생한 상태. 재 전송시 에러가 해결 되었을 수도 있다. |

### 자주 사용되는 코드

| 코드 | 내용 |
| :---: | :---: |
| 200 | 성공 |
| 201 | 성공. 리소스 생성 성공(PUT 했을 때) |
| 301 | 리다이렉트, 리소스가 다른 장소로 변경됨을 알림 |
| 303 | 리다이렉트, Client에서 자동으로 새로운 리소스로 요청 처리 |
| 400 | 요청 오류, 필수 값 빠졌을 때, 파라미터 에러 |
| 401 | 권한 없음 (인증실패) |
| 404 | 리소스 없음 (페이지를 찾을 수 없음. 경로 오류) |
| 500 | 서버 내부 에러 (서버 동작 처리 에러) |
| 503 | 서비스 정지 (점검, lock 등) |