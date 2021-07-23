# Flask
[웹 프레임워크](../Framework.md).
**microframework**라고 하며, Django보다 가볍다. 

### sample
Hello world 출력하기

    from flask import Flask
    app = Flask(__name__)

    @app.route("/")
    def hello_world():
        return "<p>Hello, World!</p>"

### Setup
Flask 설치 - `pip install Flask`
가상 환경에서 서버 실행 - `flask run`

## MVC
- MVC는 디자인 패턴 중 하나
    - Model : 데이터베이스와 연결되는 부분
    - View : 클라이언트가 보는 부분
    - Controller : 접근 URL에 따라 비즈니스 로직이 수행되는 부분

## [Flask-SQLAlchemy](https://flask.palletsprojects.com/en/2.0.x/patterns/sqlalchemy/)
Flask는 Controller부분에 필요한 것을 수행해준다. 라우팅, 어떤 로직을 수행할 것인지 등.  
대신 microframework이기 때문에 도움이 미약하다. 그래서 다른 라이브러리의 도움을 받는다.  

`SQLAlchemy`는 Model부분을 지원해주는 라이브러리. **ORM**이라고 부른다.  
DB를 파이썬 내 객체로 사용할 수 있다.

## [jinja](https://jinja.palletsprojects.com/en/3.0.x/)


