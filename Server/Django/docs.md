## Django

## Model (모델 계층)
데이터베이스와 연동 계층. 
파이썬 함수만으로 자동으로 Sql문 생성 및 저장.  
직접 DB에서 설정할 필요 없이 프레임워크에서 제공.  

### 파이썬 클래스 생성

    from django.db import models

    class Person(models.Model):
        first_name = models.CharField(max_length=30)
        last_name = models.CharField(max_length=30)

### 내부적으로 자으로 만들어진 SQL문

    CREATE TABLE myapp_person (
        "id" serial NOT NULL PRIMARY KEY,
        "first_name" varchar(30) NOT NULL,
        "last_name" varchar(30) NOT NULL
    );

프레임워크에서 제공되는 것외에 SQL문을 복잡하게 작성하고 싶을 시(심화), **Raw SQL(SQL을 직접 작성해서 호출)**, 트랜잭션 등을 사용할 수있게 제공되어있다.  

## View (뷰 계층)
비즈니스 로직 해당. 비즈니스 로직에 필요한 부수적인것을 제공한다. 
Data 구성. URL파싱, 요청, 응답 등 처리한다.

### URL 파싱

    from django.urls import path
    from . import views

    urlpatterns = [
        path('articles/2003/', views.special_case_2003),
        path('articles/<int:year>/', views.year_archive),
        path('articles/<int:year>/<int:month>/', views.month_archive),
        path('articles/<int:year>/<int:month>/<slug:slug>/', views.article_detail),
    ]

### 내부 함수

    from django.http import HttpResponse
    import datetime

    def current_datetime(request):
        now = datetime.datetime.now()
        html = "<html><body>It is now %s.</body></html>" % now
        return HttpResponse(html)

## Template (템플릿 계층)
Data 만드는 역할. 표현. 형식은 html.

    {% extends "base_generic.html" %}
    
    {% block title %}{{ section.title }}{% endblock %}
    
    {% block content %}
        <h1>{{ section.title }}</h1>
    
    {% for story in story_list %}
        <h2>
            <a href="{{ story.get_absolute_url }}">
            {{ story.headline|upper }}
            </a>
        </h2>
        <p>{{ story.tease|truncatewords:"100" }}</p>
    {% endfor %}
    
    {% endblock %}
