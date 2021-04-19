# 파이썬 가상환경

## 파이썬 가상환경 명령어 기초
- 가상환경 생성
    python -m venv 가상환경명
- 가상환경 실행 / 해제 -> (Script, 맥:Bin)폴더
    activate.bat / deactivate.bat
- 패키지 설치 및 삭제
    pip install simplejson
    pip uninstall simplejson
- 패키지 리스트 출력
    pip list
- 패키지 상세 출력
    pip show simplejson
- 패키지 검색
    pip search simplejson
    pip search simple*
- 패키지 업그레이드
    pip install --upgrade simplejson