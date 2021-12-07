## Git의 Workflow    
### working directory    
프로젝트 파일들을 수정하고 작업하고 있는 곳.    
새로 만들어진 파일이거나, 기존에 존재하던 프로젝트에서 Git을 초기화 하게 되면 Git이파일에 대한 정보가 전혀 없다. 아직 트랙킹이 되지 않는 파일.    
    
### staging area    
어느정도 작업하다가 버전 히스토리에 저장할 준비가 되어 있는 파일들을 옮겨 놓는 곳.    
commit이란 명령어고 .git directory에 저장.    
    
### .git directory    
버전의 히스토리를 가지고 있는 깃 레파지토리 또는 깃 디렉토리.    
checkout이란 명령어로 언제든지 working directory의 원하는 버전으로 돌아갈 수 있다.    
    
## 사용법    
### git 설치하기    
1. https://git-for-windows.github.io/ 에서 다운로드    
2. 설치 중 중요메뉴설명    
    - Windows Explorer integration > Git Bash Here, Git GUI Here : 마우스 오른쪽 클릭 시 git bash 창이나 git gui창 실행하는 메뉴가 추가되도록        
    - Use Git from the Windows Command Prompt : git 관련 path를 window에 추가(cmd에서 git 사용 가능)    
    - Use Git and optional Unix tools from the Windows Command Prompt : unix tool도 path에 추가. (window cmd 명령어보다 우선한다!! 유닉스 명령어 모르면 사용하지 말기)     
    - Use OpenSSH : git에 포함된 open ssh(secure shell) 사용 (다른 프로그램이 있으면 Use (Tortoise)Plink 선택 후 설정)    
    - Checkout Windows-style, commit Unix-style line endings : 우리는 window, git은 unix. default값 선택하기    
3. 그냥 쭉 default값으로 두고 next해도..    
    
### git 설정하기    
1. 계정연결(git에 개인정보 설정 및 깃허브 연동)     
global 옵션을 붙이면 컴퓨터 전체, 안붙이명 해당 프로젝트 내에서만    
git config --global user.name "Country"             `“${[github id]}”`    
git config --global user.email "hnaras@naver.com"   `“${github email}”`    
    
2. alias 및 현재 git 설정 상태 보기    
git config --list    

### git 사용하기    
1. 저장소 만들기(원하는 폴더에서 마우스 오른쪽 클릭 -> git bash) git init : 현재 폴더를 git local 저장소로 만든다.    
2. 깃에 개인정보 설정(깃허브와 연동)    
    git 설정하기 참고    
3. ReadMe.txt 파일 생성    
    - touch ${ReadMe.txt} : 단순하게 file 생성    
    - git status : git 저장소 상태 체크 (현재는 모든 file이 utracked로 되어있음)    
    - git add ${ReadMe.txt} : git에 추가    
    - git status : ReadMe.txt가 추가된 것을 확인할 수 있다.    
4. Commit 하기
    - git commit –m “${commit 한 내용 설명}” :    
    - commit : 저장 -m : 저장한 내용이 어떤 것인지 설명해준다.    
5. 원격 저장소(github)와 연결하기    
    - git remote add origin [https://github.com/${github.id}/${github repository}] : 원격 저장소(github)와 연결한다.    
    - git remote –v : 원격 origin에 대한 설명    
6. 로컬저장소의 내용을 원격저장소에 저장하기 git push origin master (github login)    
7. ReadMe.txt 삭제    
    - git rm ReadMe.txt : 해당 file을 삭제한다. (로컬 저장소의 file이 삭제된다.) 변경사항이 있으니, commit(4번)과 push(6번)를 해준다.    
    
-원격저장소의 내용 가져오기-
8. 원격저장소의 file을 저장할 폴더 생성    
9. git pull [https://github.com/${github id}/${github repository}] : 해당 path의 file들이 1번의 폴더로 복사된다.    
10. git remote add origin [https://github.com/${github id}/${github repository}] : 원격저장소와 연결    
    
### branch 설정하기    
1. git branch ${[branch name]} : branch.name으로 새로운 branch가 생성    
2. git checkout ${[branch name]} : branch.name으로 이동    
//git checkout –b ${[branch name]} : branch 생성과 checkout을 한번에    
3. file 수정/삭제..    
git status를 하면 modified 된 file을 알 수 있다.    
4. git add ${modified.file} : 수정된 file git에 추가    
5. git commit –m “${내용 설명}” : 해당 file commit    
6. git checkout master : master로 이동    
7. git merge ${[branch name]} : master에 branch.name의 내용 합치기    
8. git push origin master : 로컬저장소에서 변경한 내용을 원격저장소에 저장 9. git branch –d ${[branch name]} : [branch name] 삭제    
    
### 프로젝트 팀원 추가하기    
1. 팀장이 프로젝트(github new repository) 생성    
2. github 프로젝트 화면 -> setting -> collaborators -> 추가할 팀원의 github id 검색 -> Add collaborator    
3. 팀원의 email 확인 (메일에서 초대 수락)    
4. collaborators에서 확인    
    
## git 라이프 사이클    
### status (st)        
- 현재 git 상태를 보여줌    
- Untracked files : `Untracked` 상태인 파일들    
    
### log (lg)        
- 히스토리를 조회하는 명령어    
- 커밋 단위로 히스토리가 쌓임    
- log를 볼 줄 알아야 develop, release, hotfix 브랜치가 난무할 때 merge 방향이나 순서를 이해할 수 있음    
- 위에 있는 것이 최신, 아래 있을 수록 예전 커밋    
    
### add    
- 이 파일을 Git이 관리하게 하겠다 (or 수정 완료했다)    
- 파일을 `Staged` 상태로 만듦 -> 파일을 Git이 관리하는 상태로 만듦    
    - `Untracked` / `Modified` 상태의 파일에 사용할 수 있음    
- 이제 `commit`을 하면 코드를 저장할 수 있음    
    
### commit (ci)    
- 파일을 `Unmodified` 상태로 만듦 -> 한 단위의 작업이 완료    
- Git 시스템에 영구적으로 변경을 저장    
- SHA-1 알고리즘을 적용한 해시값을 키로 생성.    
- 히스토리가 하나 추가됨    
- 실무에서 한 작업 (기능, 피처) 단위로 한 커밋 권장    
    
**옵션**    
- `m` : 메시지를 넣음    
- `a` : `add`를 같이 함. 단순히 Modified    
- `am` : `a`와 `m`을 합친 것. 제일 많이 사용    
- `amend`    
    - 마지막 커밋을 수정    
    - `Stage` 상태의 파일들과 같이 커밋됨    
    - 만약 `Stage`에 아무것도 없다면 (`commit`이후에 작업을 안 했으면 ) 커밋 메시지만 수정    
    
### Untracked    
- Git과 아무 상관이 없는 상태    
- 따라서 Git이 대상 파일을 관리하지 못함    
- 최초 `add`를 해줘야 Git의 관리 대상이 됨    
- Git이 관리하는 파일을 삭제하면 Untracked가 됨    
    
### Tracked - Unmodified    
- 코드 저장이 완료된 상태    
- Staged 상태에서 `commit`을 하면 Unmodified가 됨    
- 지금 이 시점에서 수정이 안됐다. 이전 버전과 비교해서 수정되지 않음.
    
### Tracked - Modified    
- Git으로 관리되고 있던 코드를 수정하여 변경이 일어난 상태    
- Unmofieid 상태인 파일을 수정하면 Modified가 됨    
- `commit` 할 수 없음. `commit` 하려면 Staged 상태가 되야함    
- 지금 이 시점에서 수정이 됐다. 오직 수정된 modified 파일만 Staging area로 이동할 수 있다.     
    
### Staged    
- 이제 코드를 저장해도 좋다는(`commit`이 가능한) 상태    
- Untracked/Modified 상태인 파일을 `add` 하면 Staged가 됨    
    
## branch 관련    
커밋 사이를 가볍게 이동할 수 있는 어떤 포인터 같은 것. 하나의 작업 공간 단위    
- 브랜치 확인 : git br    
- 브랜치 생성 : git br test    
- 브랜치 삭제 : git br -D test/1    
    
### HEAD    
- 지금 작업하는 로컬 브랜치를 가리키는 포인터.     
- 현재 브랜치 마지막 커밋의 스냅샷.    
- branch를 변경하면 해당 브랜치의 마지막을 가리키고 있음.    
- HEAD를 움직이면서 여러 버전의 코드를 볼 수 있음.        
    
### Checkout (co)    
- 다른 브랜치로 이동    
- 옵션    
    - `b` : 브랜치 생성하고 그 브랜치로 checkout    
        - 아래 두 명령은 같음    
        - `git co -b develop`    
        - `git br develop git co develop`    
- `git co master`    
    
**checkout TIP**    
- 커밋의 hash값을 알면 시간 여행이 가능함    
- 예시 `git co e5d33ad`    
    
## Stash    
현재 브랜치의 작업 내용 임시 저장    
브랜치에서 작업하다가 다른 브랜치로 변경해야 하는데 커밋은 하고 싶지 않은 경우    
    
## merge    
협업의 핵심, 다른 브랜치와 현재 브랜치를 합쳐서 코드를 합침.    
    
**방식**    
- fast-forward    
    - 커밋들이 공통이고 대상 브랜치의 커밋만 증가 했을 경우 단순히 HEAD만 옮겨짐    
- 3-way Merge    
    - 두 갈래로 나온 변경들을 합쳐서 새로운 커밋을 만듦    
    - conflict    
- squash    
    - 대상 브랜치의 커밋들을 하나의 커밋으로 합쳐서 merge    
    - `git merge --squash master`    
    
## fork
fork 는 다른 사람의 github repository에서 나의 Github repository로 복제하는 기능이다.     
또한 기존 repository 에 새로운 커밋이 생기면 이는 그대로 나의 repository로 반영할 수 있다.     
    
그저 다른 이의 프로젝트를 가져다가 사용하기만 하는 clone과는 달리 그 프로젝트에 pull request 를 하게되면 original repository 에서 허가 하게 된 경우 original repository를 변경시킬 수 있다.    
    
## Star    
쉽게 말해 좋아요 같은 역할을 한다. 이를 통해 관심있는 프로젝트나 레파지토리를 북마크 할 수 있다.    
    
## clone    
관심있는 repository를 복사해서 사용할 수 있다. 원본에는 영향이 없다.    