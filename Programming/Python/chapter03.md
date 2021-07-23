
# 파이썬 가상환경  

## 파이썬 가상환경 명령어 기초  
  
- 가상환경 생성  
`python -m venv 가상환경명`  
`python -m venv /path/to/venv : 윈도우, 맥, 리눅스 동일`  
  
- 가상환경 실행 / 해제 -> (윈도우:Script, 맥:Bin)폴더  
`윈도우 - activate.bat / deactivate.bat`  
`맥 - source ./activate, source ./deactivate`  
  
- 패키지 설치 및 삭제  
`pip install install simplejson`  
`pip uninstall simplejson`  
  
- 패키지 리스트 출력  
`pip list`  
  
- 패키지 상세 출력  
`pip show simplejson`  
`pip show -f simplejson`  
  
- 패키지 검색  
`pip search simplejson`  
`pip search simple*`  
  
- 패키지 업그레이드  
`pip install --upgrade simplejson`  
`pip install install simplejson==버전` 
   
		#외부 설치 패키지 테스트  
		import simplejson as json  
		 
		test_dict = {'1': 95, '4': 77, '3': 65, '5': 100, '2': 88}  
		  
		#simplejson 실행  
		print(json.dumps(test_dict, sort_keys=True, indent=4 * ' '))  
		

### 파이썬 가상환경으로 에디터 실행  
cmd창에서 파이썬 가상환경으로 설정해놓은 폴더로 진입.  
`cd\ - cd pyhon_basic - Scripts - activate.bat` - 여기까지 가상환경 실행 - code (VSCode로 열린다.)  

### 가상 환경  
버전에 따른 각각 가상의 독립된 환경에서 프로젝트를 생성할 수 있도록 한다.  