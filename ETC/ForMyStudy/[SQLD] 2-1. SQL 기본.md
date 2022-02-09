# 2과목 SQL 기본 및 활용

# 1장. SQL 기본

## 1절 관계형 DB 개요

### 1. DB
- 특정 기업이나 조직 또는 개인이 필요에 의해 데이터를 일정한 형태로 저쟁해 놓은 것.
- DBMS : 효율적인 데이터 관리 뿐만 아니라 예기치 못한 사건으로 인한 데이터의 손상을 피하고, 필요시 필요한 데이터를 복구하기 위한 강력한 기능의 소프트웨어

### 2. 관계형 DB
- 정규화를 통해 이상현상 및 중복 데이터 제거
- 동시성 관리와 병행제어를 통한 데이터 동시 조작 가능

### 3. SQL
RDB에서 사용하는 언어. 데이터 조회 및 신규 데이터 입력/수정/삭제 기능 제공


- 종류
    1. **DML**(Data Manipulation Language, 데이터 조작어)
        - SELECT, INSERT, UPDATE, DELETE
    2. **DDL**(Data Definition Language, 데이터 정의어)
        - 데이터 구조 관련 명령어
        - CREATE, ALTER, DROP
    3. **DCL**(Data Control Language, 데이터 제어어)
        - 데이터베이스 접근 권한 부여 및 회수 명령어
        - GRANT, REVOKE
    4. **TCL**(Transaction Control Language, 트랜잭션 제어어)
        - DML로 조작한 결과를 논리적인 작업단위 별로 제어
        - COMMIT, ROLLBACK


## 2절 DDL(데이터 정의어)

### 1. 데이터 타입
- CHAR(L) : 고정 길이 문자열
- VARCHAR(L), VARCHAR2(L) : 가변 길이 문자열
- NUMBER(L, D) : 숫자형
    - SQL Server : NUMBERIC, DECIMAL, FLOAT, REAL, ....
- DATE, DATETIME : 날짜형, 데이터 크기 정의 X

### 2. CREATE TABLE
- SQL -> CREATE TABLE 테이블 명 (컬럼명 데이터 타입 제약조건, ...)
- 테이블 및 컬럼 명명 규칙
    - 알파벳, 숫자, '_', '$', '#' 사용
    - 대소문자 구분 X
    - 테이블 명은 단수형 권고
- 제약조건 : **데이터 무결성 유지가 목적.** 복제 테이블에는 기존 테이블 제약조건 중 NOT NULL만 적용
    - PRIMARY KEY : 테이블당 하나의 기본키만 정의 가능. 기본키 생성시 DBMS가 자동으로 인덱스 생성. `NOT NULL`
    - FOREIGN KEY : 다른 테이블의 기본키를 외래키로 지정. 참조 무결성 제약조건. **NULL 여러개 존재 가능**
    - UNIQUE KEY : 고유키 정의. **NULL 가능**
    - CHECK : 입력 값 **범위 제한**
    - NOT NULL


🍳 **DESC 테이블명 / DESCRIBE 테이블 명** : 테이블 정보 확인

```SQL
CREATE TABLE 테이블 명
(
    컬럼명 데이터타입 제약조건
    , ....
    , CONSTRAINT 제약조건명 제약조건(컬럼)
);
```

🍳 DELETE(/MODIFY) ACTION       
- CASCADE : Master 삭제 시 Child 같이 삭제 
- SET NULL : Master 삭제 시 Child 해당 필드 NULL
- SET DEFAULT : Master 삭제 시 Child 해당 필드 Default 값으로 설정
- RESTRICT : **Child 테이블에 PK값이 없는 경우만 Master 삭제 허용**
- NO ACTION : 참조 무결성을 위반하는 삭제/수정 액션을 취하지 않음.


🍳 INSERT ACTION        
- AUTOMATIC : Master 테이블에 PK가 없는 경우 Master PK를 생성후 Child 입력
- SET NULL : Master 테이블에 PK가 없는 경우 Child 외부키를 NULL값으로 처리
- SET DEFAULT : Master 테이블에 PK가 없는 경우 Child 외부키를 지정된 기본값으로 입력
- DEPENDENT : **Master 테이블에 PK가 존재할 때만 Child 입력 허용**
- NO ACTION : 참조무결성을 위반하는 입력 액션을 취하지 않음


- EXAMPLE)        

```SQL
CREATE TABLE T1
(
    COL1 INTEGER PRIMARY KEY
    ,COL2 INTEGER
);
CREATE TABLE T2
(
    COL1 INTEGER PRIMARY KEY
    ,COL2 INTEGER REFFERENCES T1(COL1) ON DELETE CASCADE
);

>> T1의 COL1이 삭제되면 T2의 COL1 데이터도 같이 삭제
```

### 3. ALTER TABLE
- 컬럼 추가 : ALTER TABLE 테이블명 `ADD` (컬러명 데이터타입);
- 컬럼 삭제 : ALTER TABLE 테이블명 `DROP COLUMN` 컬럼명;
- 컬럼 설정 변경 : ALTER TABLE 테이블명 `MODIFY` (컬러명 데이터타입 DEFAULT 제약조건);
    - 컬럼 크기 축소는 NULL만 있거나, 행이 없는 경우에만 가능
    - NULL만 있는 경우 데이터타입 변경 가능
- 컬럼병 변경 : ALTER TABLE 테이블명 `RENAME COLUMN` 원컬럼명 `TO` 뉴컬럼명;
- 제약조건 추가 : ALTER TABLE 테이블명 ADD `CONSTRANINT` 제약조건;
- 제약조건 제거 : ALTER TABLE 테이블명 DROP CONSTRAINT 제약조건;

### 4. RENAME TABLE
- `RENAME 변경전테이블명 TO 변경테이블명;` (ANSI 표준)
- ALTER TABLE 테이블명 RENAME TO 테이블명;

### 5. DROP TABLE
- DROP TABLE 테이블명 (CASCADE CONSTRAINT);
- 테이블의 데이터와 구조 삭제. 복구 불가
- **CASCADE CONSTRAINT** : 관련 테이블의 참조 제약조건도 삭제하여 참조 무결성 준수

### 6. TRUNCATE TABLE
- TRUNCATE TABLE 테이블명;
- 테이블의 데이터 전체 삭제
- 로그를 기록하지 않기때문에 ROLLBACK 불가


## 3절 DML (데이터 조작어)
1. INSERT INTO 테이블명 (C1, C2, ...) VALUES (D1, D2);
2. UPDATE 테이블명 SET (C1=D1, C2=D2) WHERE 조건;
3. DELETE FROM 테이블명 WHERE 조건;
4. SELECT
    - SELECT 컬럼명 FROM 테이블명 WHERE 조건;
    - SELECT DISTINCT 컬럼명 ... : 데이터 중복 없이 조회


    > 🍕 ALIAS : SELECT 컬럼명 AS '별칭'        
    > 와일드카드 : ' * ' (모두), '%'(0개 이상의 문자), '_ '(한 글자)


5. 문자열 합성 연산자
    - CONCAT()
    - _ORACLE_ : ' || ', _SQL SERVER_ : ' + '


## 4절 TCL (트랜잭션 제어어)
### 1. 트랜잭션
: DB의 논리적 연산 단위. 하나 이상의 SQL문을 포함       
- 트랜잭션의 특징 **'ACID'**
    - 원자성(**A**tomicity) : All OR Nothing
    - 일관성(**C**onsistency) : 트랜잭성으로 인한 데이터베이스 상태의 모순이 없음
    - 고립성(**I**solation) : 부분적인 실행결과에 다른 트랜잭션 접근 불가. LOCKING으로 고립성 보장
    - 영속성(**D**urability) : 트랜잭션의 결과는 영구적으로 저장됨.


> 🍕 트랜잭션에 대한 격리성이 낮은 경우 발생할 수 있는 문제점     
> 1. Dirty Read : 다른 트랜잭션에 의해 수성되었지만 **아직 커밋되지 않은 데이터**를 읽는 것
> 2. Non-Repeatable Read : 한 트랜잭션 내에서 같은 쿼리를 두번 수행했는데, 그 사이에 다른 트랜잭션이 값을 수정 또는 삭제하는 **두 쿼리의 결과가 다르게 나타나는 현상**
> 3. Phantom Read : 한 트랜잭션 내에서 같은 쿼리를 두번 수행했는데, 첫번째 쿼리에서 없던 **유령 레코드가 두번째 쿼리에서 나타나는 현상**

### 2. TCL
- 데이터 무결성 보장을 목적으로 함
- 영구 변경 전 확인과 연관 작업을 동시 처리 가능
- ORACLE
    - SQL 문장 실행하면 트랜잭션 시작, TCL을 실행하면 트랜잭션 종료.
    - DDL 실행 시 자동 커밋.
    - DB 정상 종료 시 자동 커밋. DB 접속 단절로 종료 시 자동 롤백

### 3. COMMIT
- 데이터를 DB에 영구적으로 반영하는 명령어
- 커밋 시 트랜잭션이 완료되어 LOCKING 해제
- SQL SERVER는 기본적으로 자동 커밋
- `COMMIT;`

### 4. ROLLBACK
- 트랜잭션 시작 이전의 상태로 되돌림
- `ROLLBACK TO SAVEPOINT1;`     (ORACLE)
- `ROLLBACK TRAN SAVEPOINT1;`   (SQL SERVER)

### 5. SAVEPOINT
- 트랜잭션 저장 지점
- 트랜잭션 일부만 롤백할 수 있도록 중간 상태를 저장하는 명령어
- `SAVEPOINT SVPT1;`    (ORACLE)
- `SAVE TRAN SVPT1;`    (SQL SERVER)


## 5절 WHERE

### 1. 연산자
- 종류
    1. 비교 연산자
        - -, =, >, >=, <, <=
    2. 부정 비교 연산자
        - NOT 컬럼명 비교연산자
        - !=. ^=, <>
    3. SQL 연산자
        - BETWEEN A AND B
        - IN (리스트)
        - LIKE '문자열'
        - IS NULL
        - NOT BETWEEN A AND B / NOT IN (리스트) / IS NOT NULL
    4. 논리연산자
        - AND, OR, NOT
- 우선순위
    - 부정 -> 비교 -> 논리
    - () -> NOT -> 비교/SQL -> AND -> OR

### 2. 부분 범위 처리
- ROWNUM
    - ORACLE SQL 처리 결과 집합의 각 행에 임시로 부여되는 번호
    - 조건절 내에서 행의 개수를 제한하는 목적으로 사용
    
    ```SQL
    SELECT *
    FROM ( SELECT ROWNUM AS RNUM
            FROM TBL01
            ORDER BY SEQ
        )
    WHERE RNUM BETWEEN 1 AND 10;    // SEQ 기준으로 정렬한 데이터를 첫번째~10개 출력.
    ```

## 6절 함수

### 1. 단일행 함수
<-> 다중행 함수(집계함수. 그룹함수. 윈도우함수)     


- 문자형 함수
    - LOWER, UPPER, LENGTH
    - CONCAT(A, B) : 문자열 결합 -> 'AB'
    - SUBSTR('문자열', '시작위치', '길이') : 문자열 부분 추출
    - LTRIM, RTRIM, TRIM : 공백제거
    - ASCII : 아스키코드값 출력
- 숫자형 함수
    - ABS(절대값), SIGN(부호)
    - MOD : 나머지, 연산 '%'
    - ROUND(반올림), CEIL(올림), FLOOR(버림) : 함수(E, N) 소수점 이후 N번째 자리까지 출력
    - TRUNC : 절사
        1. TRUNC(52.6254, 3) -> 52.625      
        2. TRUNC(52.6254) -> 52     
- 날짜형 함수
    - SYSDATE / GETDATE()
    - **EXTRACT** : 날짜형 부분 추출 (SQL Server : DATEPART)

    ```SQL
    SELECT EXTRACT(YEAR FROM SYSDATE) AS YEAR   // 2022
        , EXTRACT(MONTH FROM SYSDATE) AS MONTH  // 02
        , EXTRACT(DAY FROM SYSDATE) AS DAY      // 08
    FROM DUAL;
    ```

    - **NEXT_DAY(기준일, 'MON')** : 기준일에서 가장 가까운 다음 월요일(월요일/월/MONDAY/MON 모두 가능가능)
- 변화형 함수
    - TO_NUMBER, TO_CHAR, TO_DATE
    - SQL Server : CAST, CONVERT
- NULL 관련 함수
    - NVL(C, D) : C에 NULL값이 포함되어있으면 D로 치환
    - NVL2(C, D1, D2) : C에 NULL값이 포함되어 있으면 D1, 아니면 D2로 치환
    - COALESCE(D1, D2, ...) : NULL이 아닌 첫 값 출력
    - ISNULL(C, D) : NULL이면 D로 대치 아니면 C값 출력
    - IFNULL(C, D) : NULL인 경우 대체값 D, 아니면 C값 출력

    * NULL값이 포함된 연산의 결과값은 모두 NULL     
        - ex) 1000/NULL -> NULL, NULL+2 -> NULL     

### 2. 데이터 변환
- 명시적 형변환, 암시적 형변환(DBMS가 자동으로 데이터타입 변환)

### 3. 조건문
- CASE WHEN 조건절 THEN 출력값 ELSE 기본값 END      
    - 등호조건. CASE WHEN 컬럼 = 'A'THEN 1 ELSE 0       
                CASE 컬럼 WHEN 'A' THEN 1 ELSE 0 둘은 같은 결과값을 가진다.     
- DECODE(COL, 기준값1, 출력값1, ... , 기본값)


## 7절 GROUP BY, HAVING

### 1. 집계 함수
- ALL, DISTINCT
- SUM, AVG, NAX, MIN, VARIAN, STDDEV
- COUNT     // COUNT(*)은 NULL 포함


* 전부 NULL 값은 제외하고 연산한다.

### 2. GROUP BY
- 그룹 기준 설정. ALIAS 사용 불가

### 3. HAVING
- GROUP BY절에 의한 집계 데이터에 출력 조건을 준다.


## 8절 ORDER BY

### 1. ORDER BY
- 특정 컬럼을 기준으로 정렬
- DEFAULT : ASC (오름차순)
- 내림차순 : DESC


> 🍕 ORACLE에서는 **NULL을 가장 큰 값으로 취급.**       
> SQL SERVER는 **NULL을 가장 작은 값으로 취급**하여 정렬.       


### 2. SELECT문 실행 순서

```SQL
SELECT 컬럼명 AS "ALIAS"    // 5
FROM 테이블명               // 1
WHERE 조건식                // 2
GROUP BY 컬럼/표현식        // 3
HAVING 조건식               // 4
ORDER BY 컬럼/표현식        // 6
```

## 9절 JOIN

### 1. 조인
- 여러 테이블을 연결 또는 결합하여 데이터를 출력하는 것
- 일반적으로 PK나 FK의 연관성에 의해 성립

### 2. 등가 조인(EQUI JOIN)
- 두 테이블의 컬럼 값이 정확히 일치하는 경우, 대부분 PK와 FK 관계를 기반으로 한다.

```SQL
SELECT C1, C2, ...
FROM TBL1 A, TBL2 B
WHERE A.C1 = B.C1;
```

### 3. 비등가 조인(NON EQUI JOIN)
- 두 테이블의 값이 정확하게 일치하지 않는 경우, 부등호나 BETWEEN 연산자를 통해 조인

```SQL
SELECT E.EMPNO, E.ENAME, E.SAL, SG.GRADE
FROM EMP E, SALGRADE SG
WHERE E.SAL BETWEEN SG.LOSAL AND SG.HISAL
AND SAL > ALL(SELECT SAL FROM EMP WHERE JOB = 'SALESMAN')
ORDER BY EMPNO;
```