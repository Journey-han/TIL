# Django 기초

## django가상환경 만들기
`python -m venv [가상환경이름]`

**입장**
`.가상환경 경로\Scripts\activate.bat`

**퇴장**
`deactivate`

## Django 프로젝트 및 APP 생성하기
가상환경에 들어오게 되면 cmd창에 `(가상환경이름) django폴더 경로`가 나오게 된다. 여기서 프로젝트와 APP 생성하기

**프로젝트 생성하기**
`django-adimin startproject [프로젝트이름]`

**APP 생성하기**
cd ./프로젝트이름 경로로 들어와서 여러가지 app을 생성한다.
`django-admin startapp [app이름]`