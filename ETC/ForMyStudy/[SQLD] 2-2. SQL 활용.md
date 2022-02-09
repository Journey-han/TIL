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
