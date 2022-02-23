# 2과목 SQL 기본 및 활용

# 2장. SQL 활용

## 1절 표준조인

### 1. 일반 집합 연산자

| 일반 집합 연산자 | SQL | 설명 |
| :--- | :--- | :---|
| UNION | UNION | 합집합 |
| INTERSECTION | INTERSECT | 교집합 |
| DIFFERENCE | EXCEPT(MINUS) | 차집합 |
| PRODUCT | CROSS JOIN | 곱집합(생길 수 있는 모든 데이터 조합) | 

### 2. 순수 관계 연산자
- 관계형 DB를 새롭게 구현
1. **SELECT** 연산은 WHERE 절로 구현
2. **PRODUCT** 연산은 SELECT 절로 구현
3. (NATURAL) **JOIN** 연산은 다양한 JOIN 기능으로 구현
4. **DIVIDE** 연산은 현재 사용 XX

### 3. FROM절 JOIN 형태
1. INNER JOIN
2. NATURAL JOIN
3. USING 조건절
4. ON 조건절
5. CROSS JOIN
6. OUTER JOIN

### 4. NATURAL JOIN
- 같은 이름을 가진 컬럼 전체에 대한 `등가 조인`
- USING, ON **_사용 불가_**
- 같은 데이터 유형의 컬럼만 조인 가능
- ALIAS, 테이블명 사용 불가

```SQL
SELECT C1, C2, ...
FROM TBL1 NATURAL JOIN TBL2;
```

#### 5. INNER JOIN
- 행에 동일한 값이 있는 컬럼 조인
- JOIN의 DEFAULT 옵션
- USING, ON 조건절 필수
- CROSS JOIN, OUTER JOIN 동시 사용 불가
- 두 테이블에 동일 이름의 컬럼이 있을 경우 SELECT절에 ALIAS 필수

```SQL
SELECT C1, C2, ...
FROM TBL1 A, TBL2 B
WHERE A.C1 = B.C1

SELECT C1, C2, ...
FROM TBL1 A INNER JOIN TBL2 B
WHERE A.C1 = B.C1
```


> 🍕 USING 조건절       
> - 같은 이름을 가진 컬럼 중 등가 조인 대상 컬럼 선택       
> - SQL Server에서는 지원하지 않음      
> - 조건절에 ALIAS or 테이블명 불가     
>
>
> 🍕 ON 조건절      
> - 다른 이름을 가진 컬럼간 조인 가능(ALIAS, 테이블명 필수)     


### 6. CROSS JOIN
- 가능한 모든 조합으로 조인 (곱집합)
- M * N건의 데이터 조압 발생

```SQL
SELECT C1, C2, ...
FROM TBL1, TBL2;
```

### 7. OUTER JOIN
- 조인 조건에서 행에 동일한 값이 없는 컬럼 조인
- USING, ON 조건절 필수


1. LEFT OUTER JOIN
    - 좌측 테이블 데이터 조회 후 우측 테이블 조인 대상 데이터 조회

    ```SQL
    SELECT C1
    FROM T1 A, T2 B
    WHERE A.C1 = B.C1( + );

    SELECT C1
    FROM T1 A LEFT OUTER JOIN T2 B
    ON (A.C1 = B.C1);
    ```

2. RIGHT OUTER JOIN
    - <-> LEFT OUTER JOIN
3. FULL OUTER JOIN
    - 조인 시 좌측, 우측 테이블의 모든 데이터를 읽어 JOIN하여 결과 생성. 중복 데이터 삭제


## 2절 집합 연산자

### 1. 집합 연산자
- 조인 없이 여러 테이블의 관련 데이터를 조회하는 연산자

### 2. UNION(합집합)
- 컬럼 수와 데이터 타입이 모두 동일한 테이블 간 연산만 가능, 중복 제거, 정렬O
- **UNION ALL** : 중복된 행도 전부 출력. 정렬X

    ```SQL
    SELECT C1 FROM TBL1 WHERE 조건절
    UNION ALL
    SELECT C1 FROM TBL2 WHERE 조건절;
    ```

### 3. INTERSECT (교집합)

### 4. MINUS, EXCEPT (차집합)

## 3절 계층형 쿼리와 셀프 조인

### 1. 계층형 쿼리(Hierachical Query)
- 계층형 데이터 조회 시 사용. ORACLE에서 지원

### 2. 셀프 조인
- 한 테이블 내에서 두 컬럼이 연관관계가 있는 경우
- TABLE ALIAS 필수!


## 4절 서브쿼리

### 1. 종류
- 동작 방식에 따른 분류
    - 비연관 서브쿼리 : 서브쿼리가 메인쿼리의 컬럼을 가지고 있지 않는 경우. 대부분 메인쿼리에 값 제공 목적
    - 연관 서브쿼리 : 서브쿼리가 메인쿼리의 컬럼을 가지고 있는 형태. 일반적으로 비교목적으로 사용
- 반환 데이터 형태에 따른 분류
    - 단일 행 서브쿼리 : 실행 결과가 1건 이하
    - 다중 행 서브쿼리 : 실행 결과가 여러 건


    > 🍕 **다중 행 비교 연산자**        
    > - IN : 서브쿼리의 결과 중 하나의 값이라도 동일하다는 조건     
    > - ANY : 서브쿼리의 결과 중 하나의 값이라도 만족한다는 조건        
    > - ALL : 서브쿼리의 모든 결과값을 만족한다는 조건      
    > - EXISTS : 서브쿼리의 결과를 만족하는 값의 **존재 여부를 확인**하는 조건        


### 2. 스칼라 서브쿼리
- 값 하나를 반환하는 서브쿼리
- SELECT절에 사용

### 3. 뷰
- 가상의 테이블. FROM절에 사용하는 뷰는 인라인 뷰(Inline View)라고 한다.


- 장점
    - 독립성 : 테이블 구조 변경 자동 반영
    - 편리성 : 쿼리를 단순하게 작성할 수 있음. 자주 사용하는 SQL문의 형태를 뷰로 생성하여 사용가능
    - 보안성 : 뷰를 생성할 때 컬럼을 제외할 수 있음.

## 5절 그룹함수

### 1. ROLLUP
- GROUP BY로 묶인 컬럼의 소계 계산. 계층 구조로 GROUP BY의 **컬럼 순서가 바뀌면 결과 값 바뀜**
- GROUP BY ROLLUP(E1, E2) : E1과 E2별 소계 / E1별 소계 / 총 합계

```SQL
SELECT POSITION, SUM(BONUS) AS SUM
FROM TBL01
GROUP BY ROLLUP(POSITION)   // 마지막에 [POSITION]NULL [SUM]TOTAL 데이터 출력
```

### 2. CUBE
- 조합 가능한 모든 값에 대해 다차원 집계
- GROUP BY CUBE(E1, E2) : E1과 E2별 소계 / E1별 소계 / E2별 소계 / 총 합계

### 3. GROUPING SETS
- 특정 항목에 대한 소계 계산. GROUP BY의 **컬럼 순서와 무관**하게 개별적으로 처리
- GROUP BY GROUPING SETS (E1, E2) : E1별 소계 / E2별 소계

### GROUPING
- 그룹 함수에서 생성되는 합계를 구분해주는 함수
- 소계나 합계가 계산되면 1, 안되면 0 반환


## 6절 윈도우 함수

### 1. 윈도우 함수(Window Function)
: 여러 행 간의 관계를 정의하거나 행과 행간을 비교. 중첩불가         

- 순위 함수
    1. RANK : 중복 순위 포함
    2. DENSE_RANK : 중복 순위 무시(중간 순위를 비우지 않음)
    3. ROW_NUMBER : 단순히 행 번호 표시. 값에 무관하게 고유한 순위 부여
- 일반집계 함수
    - SUM, MAX, MIN, AVG, COUNT
- 행 순서 함수
    1. FIRST_VALUE / LAST_VALUE : 첫 값 / 끝 값
    2. LAG / LEAD : 이전 행 / 이후 행(ORACLE)


        > 🍕 `LEAD(E, A)` E에서 A번째 행의 값을 호출하는 형태로도 쓰임(A의 기본값은 1)


- 비율 관련 함수
    1. PERCENT_RANK() : 백분율 순서
    2. CUME_DIST() : 현재 행 이하 값을 포함한 누적 백분율
    3. NTILE(A) : 전체 데이터 A 등분
    4. RATIO_TO_PEPORT : 총 합계에 대한 값의 백분율


### 2. 문법

```SQL
SELECT WINDFN(A) 
OVER (PARTITION BY 컬럼 ORDER BY 컬럼 윈도잉절) 
FROM TBL;
```

1. PARTITION BY : 그룹핑 기준
2. ORDER BY : 순위 지정 기준
3. 윈도잉절 : 함수의 대상이 되는 행 범위지정
    - BETWEEN A AND B : 구간지정
    - N PRECEDING / N FOLLOWING : N번째 앞 행 / N번째 뒤 행
    - UNBOUNDED PRECEDING / UNBOUNDED FOLLOWING : 첫 행 / 끝 행
    - CURRENT ROW : 현재 행
    - ROWS / RANGE : 행 지정 / 값의 범위 지정


## 7절 DCL

### 1. DCL
: 유저 생성 및 권한 제어 명령어         
- GRANT : 권한 부여
    - GRANT 권한 ON 오브젝트 TO 유저명;
    - **GRANT** SELECT, INSERT **ON** ASDF **TO** HJKL
- REVOKE : 권한 제거
    - REVOKE 권한 ON 오브젝트 TO 유저명;
        - **REVOKE** DELETE **ON** ASDF **TO** HJKL CASCADE
            - HJKL이 DELETE 권한 부여해준 유저도 DELETE 권한 제거

### 2. 권한 (Privieges)
- DML 관련 권한 : SELECT, INSERT, UPDATE, DELETE, ALTER ALL
- REFERENCES : 지정된 테이블을 참조하는 제약조건을 생성하는 권한
- INDEX : 지정된 테이블에서 인덱스를 생성하는 권한

### 3. ORACLE USER
- SCOTT : 테스트용 샘플 유저
- SYS : DBA 권한이 부여된 최상위 유저
- SYSTEM : DB의 모든 시스템 권한이 부여된 DBA

### 4. ROLE
: 권한의 집합. 권한을 일일이 부여하지 않고 ROLE로 여러 권한 부여        
- CONNECT : CREATE SESSION
- RESOURCE : CREATE CLUSTER / TRIGGER / PROCEDURE / TYPE / TABLE / SEQUENCE / INDEXTYPE


## 8절 절차형 SQL

### 1. 절차형 SQL
- 일반적인 개발 언어처럼 **절차 지향**적인 프로그램을 작성할 수 있또록 제공하는 기능
- SQL문의 연속적인 실행 및 조건에 따른 분기처리를 이용하여 특정 기능을 수행하는 저장 모듈 생성 가능


    - PL/SQL
        - 블록구조 : 블록 내에 DML, 쿼리, IF, LOOP 등 사용 가능 
        - **Declare** : **선언부**. 블록에서 사용할 변수나 인수에 대한 정의
        - **Begin** : **실행부**. 처리할 SQL문 정의
        - **Exception** : **예외 처리부**. 블록에서 발생한 에러 처리 로직 정의. 선택 항목
    * PL/SQL에서 동적 SQL OR DDL 문장 실행 시. **_EXECUTE IMMEDIATE_**를 사용해아한다.              
    EX) EXECUTE IMMEDIATE ' TRUNCATE TABLE TBL1';               

### 2. 프로시저 (Procedure)

### 3. 사용자 정의 함수 (User Defined Function)
- 절차형 SQL을 로직과 함께 DB 내에 저장해 놓은 명령문 집합
- **RETURN을 통해 반드시 하나의 값을 반환** (* 프로시저와 다른 점)

### 4. 트리거(Trigger)
- DML문이 수행되었을 때 자동으로 동작하는 프로그램(* 프로시저는 EXECUTE로 실행)
- DCL과 TCL 실행 불가 (* 프로시저는 사용 가능)
- DB에 로그인하는 작업에도 정의 가능
