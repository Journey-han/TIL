# MySQL
## MySQL이란?    
- MySQL은 가장 널리 사용되고 있는 관계형 데이터베이스 관리 시스템(RDBMS: Relational DBMS)이다.    

# 기본 문법
## 조회(SELECT)

기본값은 오름차순으로 조회.

```sql
-내림차순 조회-
SELECT "COLUMN 이름" FROM "TABLE 명" ORDER BY "정렬할 기준" DESC

*DESC = 내림차순  
```

정렬할 기준이 여러개일 시

```sql
SELECT ANIMAL_ID, NAME, DATETIME FROM ANIMAL_INS ORDER BY NAME DESC, DATETIME
```

**NAME에만 DESC가 적용**되고, **DATETIME은 디폴트**인 오름차순이다.

## 조건 조회(WHERE)

```sql
SELECT "Clumn NAME" FROM "TABLE NAME"  WHERE "조건" ORDER BY "정렬 기준" ;

ex)
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS  WHERE INTAKE_CONDITION='Sick' ORDER BY ANIMAL_ID ;
```

**WHERE에는 AND OR NOT 연산도 가능하다.**

## 특정 개수의 ROW 조회(LIMIT)

```sql
SELECT * FROM "TABLE NAME" LIMIT 5;
*맨 위의 5개의 row만 가져온다.

SELECT * FROM "TABLE NAME" LIMIT 2, 10;
*3번째 row부터 11번째 row 까지 조회하기. (첫번째 줄은 0이다)
```

## 최대값, 최소값(MAX, MIN)

```sql
SELECT MAX("CLUMN NAME") FROM "TABLE NAME";

SELECT MIN("CLUMN NAME") FROM "TABLE NAME";
```

문자형 데이터에도 사용 가능하다.

## 데이터 개수, 카운트(COUNT)

```sql
SELECT COUNT(*) FROM "TABLE NAME";
SELECT COUNT("CLUMN NAME") FROM "TABLE NAME";
SELECT COUNT("CLUMN NAME") AS 개수 FROM "TABLE NAME";

위에서 부터 각각, 전체 개수 , 특정 Column의 개수, 그리고 마지막줄은 가져온 데이터갯수의 Column을 명시
```

## 중복 제거(DISTINCT), (GROUP BY)

중복 제거 + 카운팅을 할 때는 **DISTINCT**를 이용한다.

```sql
SEELCT COUNT("DISTINCT NAME") AS NAME_COUNT FROM ANIMAL_INS WHERE NAME IS NOT NULL
```

중복제거한 목록을 조회할때는 **GROUP BY**를 이용한다. 이름대로 데이터를 원하는 그룹으로 나누는 명령이다.

DISTINCT는 중복제거와 같이 특정 컬럼을 가져올때 주로 사용하고, GROUP BY는 그룹핑이 필요한 결과를 가져올때 사용한다.

## 조건 비교(HAVING)

WHERE와 비슷한 역할이지만, WHERE은 집계함수를 사용할 수 없지만 HAVING에서는 사용 가능.

```sql
SELECT NAME, COUNT(NAME) AS COUNTING FROM ANIMAL_INS GROUP BY NAME HAVING COUNTING >= 2;

* NAME을 카운트하여, 2개 이상의 중복이름이 있을시에 가져온다. (HAVING COUNTING >=2)
```

## 날짜, 시간 조회(YEAR, MONTH, DAY, HOUR, TIME, DATETIME)

TIME : hh:mm:dd[.nnnnnnn]

DATE : YYYY-MM-DD

SMALLDATETIME : YYYY-MM-DD hh:mm:ss 

```sql
SELECT YEAR("DATETIME이 있는 컬럼") FROM "테이블 명"       -> '연도' 조회
SELECT MONTH("DATETIME이 있는 컬럼") FROM "테이블 명"      -> '월' 조회
SELECT DAY("DATETIME이 있는 컬럼") FROM "테이블 명"        -> '일' 조회
SELECT TIME("DATETIME이 있는 컬럼") FROM "테이블 명"       -> '시간' 조회
```

### DATE_FORMAT 함수 : 여러가지 형태로 시간을 반환한다.

```sql
SELECT DATE_FORMAT("date컬럼", "%Y-%m-%d") FROM "테이블명"

%y %Y 대문자 소문자에 따라 출력결과가 다르다.
```

## NULL값 처리(IFNULL)

해당 필드 값이 NULL이라면 다른 값을 반환하도록 해주는 함수. (조건문)

```sql
SELECT IFNULL("컬럼명","대체할 값") FORM "테이블명";

ex)
SELECT ANIMAL_TYPE, IFNULL(NAME, "No name") ,  SEX_UPON_INTAKE AS NAME
FROM ANIMAL_INS ORDER BY ANIMAL_ID
```

## 특정 문자열을 포함하는지 검색 (LIKE)

예 ) user id 중, 특정 문자 "star"을 포함하는 필드가 있는지 검색하는 경우

다만, 검색할 특정 문자가 앞에오는지, 또는 뒤에오는지, 포함된 모든값인지 설정 가능합니다. (**WHERE절 뒤에 옵니다.)**

**예1)**

```sql
SELECT ANIMAL_ID , NAME FROM ANIMAL_INS
WHERE ANIMAL_TYPE = "Dog" AND(NAME LIKE "%el%"or NAME LIKE "%EL%")
ORDER BY NAME
```

**예2)**

```sql
SELECT USER_ID FROM USER_INFO WHERE USER_ID LIKE "star%"
---------------->  star123 , starWars , starKING / 시작부분이 star인경우

SELECT USER_ID FROM USER_INFO WHERE USER_ID LIKE "%star"
---------------->  iAmstar, iniestar, 13star, wwstar / 끝부분이 star인 경우

SELECT USER_ID FROM USER_INFO WHERE USER_ID LIKE "%star%"
---------------->  ,star123 , starWars , kpopstar1, awstar12, 48stareln   /
star가 들어있는 모든값
```

## **조건문 (IF , CASE)**

IF ( 조건 , 참일때의 값, 거짓일때의 값)

```sql
SELECT ANIMAL_ID, NAME , IF(SEX_UPON_INTAKE LIKE "%Spayed%", "O", "X") AS 중성화
FROM ANIMAL_INS
ORDER BY ANIMAL_ID
```