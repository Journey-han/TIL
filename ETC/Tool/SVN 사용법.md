형상관리 툴.    
    
**SVN**은 내 로컬PC에서 Commit을 하면 바로 중앙저장소(Remote Repository)에 반영된다.     
_Git은 내 로컬PC에서 Commit을 하면 로컬 저장소(Local Repository)에 반영 로컬 저장소에서 Push를 하면 원격 저장소에 반영된다._    
    
**Commit이 최종 Push라고 생각하기. 신중하게!!**     
     
### 해당 프로젝트 SVN Repository 열기    
Project 우클릭 → team → Syncronized with Repository    
    
### Update된 Project 내려받기    
Incoming Mode에서 Project 우클릭 → Update    
    
### Project Commit 하기    
Outgoing Mode에서 Project 우클릭 → Commit    
내가 커밋할 파일만 선택해서 커밋하기    
    
### Commit History 확인하기    
Project 우클릭 → Team → Show History    
    
### 현재 작업하고있는 소스와 전 버전 비교 확인하기.    
Compare with → Base Revision    
    
### 내 로컬 저장소에서의 Commit history 확인하기    
compare with → Local history    
    
### Conflict가 났을 경우    
update를 먼저 받고 팀원과 의견을 나누고 최종 수정 코드를 작성 후 저장    
Team → Mark Resolved로 컨플릭트 해결 완료되었다는 명령을 준다.    
그리고 Commit하기.    