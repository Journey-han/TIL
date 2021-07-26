# Django의 MTV
자바의 MVC와 같은 개념이다. 대신 Model, Template, View의 약자이다.

처음 APP을 생성하면 model과 view가 만들어져 있다. 그래서 Template만 필요하기 때문에, App의 하위폴더로 templates를 생성해서 **html** 파일들을 생성해서 개발할 수 있다.

## App을 Project에 등록하기 
이전에 생성한 프로젝트에서 `settings.py`를 열어 app들을 등록해준다. 

**기존 설정**

    INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

**app등록하기**

    INSTALLED_APPS = [
    ...,
    'board',
    'user'
]