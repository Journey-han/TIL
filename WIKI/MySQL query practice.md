# 쿼리 연습

|First Image|Second Image|
|:-:|:-:|
|![First Image](https://t1.daumcdn.net/cafeattach/1Dzpp/774970b96f2f3f63f138154805bd43303cb832fa)|![Second Image](https://t1.daumcdn.net/cafeattach/1Dzpp/95ad9db5376f1fecd20dc4b8fdeb8b7558148bee)|


## INNER JOIN

- `IN()` : 조건의 범위 지정. 이 값 중에서 하나이상과 일치하면 조건에 맞는 것

### TEST 테이블

![Untitled](https://t1.daumcdn.net/cafeattach/1Dzpp/ff83046801af6755b0ed0292dd8995d7463d795e)

```sql
SELECT * FROM 
  TEST T
INNER JOIN
  TEST2 T2
ON  T.a_char = T2.a_char  
WHERE 
T.a_char IN (
  'B'
  ,'D'
)
```

## LEFT OUTER JOIN(LEFT JOIN)

### TEST2 테이블

![Untitled](https://t1.daumcdn.net/cafeattach/1Dzpp/f4c6b432ed6f44b9d24edf358a37c71805503844)

```sql
SELECT * FROM 
  TEST T
LEFT OUTER JOIN
  TEST2 T2
ON  T.a_char = T2.a_char  
WHERE 
T.a_char IN (
  'B'
  ,'D'
)
```

## CROSS JOIN

|First Image|Second Image|Third Image|
|:-:|:-:|:-:|
|![First Image](https://t1.daumcdn.net/cafeattach/1Dzpp/5fe3437f9e7c3ef93ac20a65e684a715f52de3a8)|![Second Image](https://t1.daumcdn.net/cafeattach/1Dzpp/071752e8945389af782d9633b222f345acd48a07)|![Third Image](https://t1.daumcdn.net/cafeattach/1Dzpp/89b6612d35a27955523fa2ba0eb7e0dbf5e3bb62)|

## 합계값으로 JOIN

- `SUM(컬럼)` : 집계함수. 컬럼의 합계
- `COUNT(컬럼)` : 집계함수. 컬럼의 레코드(행) 수를 출력하는 쿼리
- `AVG(컬럼)` : 집계함수. 컬럼의 평균값을 출력하는 쿼리

```sql
SELECT * 
FROM 
  TEST T
LEFT OUTER JOIN
  (SELECT a_char, SUM(a_num) AS a_num2 FROM TEST2 GROUP BY a_char) T2
ON  T.a_char = T2.a_char
```

## ROLLUP : 총계, 소계

- `IS NULL` : NULL 인 값을 검색
- `GROUP BY 컬럼` : 집계 함수의 결과를 특정 **컬럼을 기준으로 결과**를 출력해준다.
    - `HAVING 집계함수(컬럼) 부등호 data` : GROUP BY 쿼리의 결과를 다시 필터링하기 위한 쿼리. 마치 **SELECT의 결과에 조건을 걸 때 WHERE**을 사용하듯이.
- `컬럼 WITH ROLLUP` : **항목별 합계(소계)**에 **전체 합계(총계)**가 **같이** 나오게 하는 것. **그룹별 합계를 한 번에 구할 때** 사용.

```sql
SELECT 
  (CASE 
    WHEN t.a_char IS NULL
    THEN '총계'    
    WHEN t.type IS NULL
    THEN  '소계' 
    ELSE a_char
  END) a_char  
  ,sum(a_num) AS a_num_total
FROM TEST2 t
GROUP BY a_char,type WITH ROLLUP
```

## 컬럼을 ROW 단위로 변경

1. **a_char와 b_cahr를 row 단위로 만들고 a_num과 b_num의 합계 출력**
    - `CASE WHEN 조건1 THEN '조건1 반환값' WHEN 조건2 THEN '조건2 반환값' 
     ELSE '충족되는 조건이 없을 때 반환값' END`
    - `UNION` : 두 테이블에서 원하는 컬럼만 뽑아서 하나의 테이블로 나타내고 싶을 때 사용한다. 여러 테이블에 존재하는 같은 성격의 값을 한 번의 쿼리로 추출하기.
        - 유니온의 규칙
            1. 하나의 **ORDER BY만** 사용할 수 있다.
            2. 각 SELECT의 **열수, 표현식**이 같아야 한다.
            3. SELECT 문들 끼리 **순서는 상관없다**.
            4. 유니온을 한 결과가 **중복되면 하나만** 가져온다.(DEFAULT) → 중복 허용X
            5. 열의 **타입은 같**거나 **반환 가능한 형태**여야 한다. (대응되는 각 필드의 타입이 같아야 한다.)
            6. 대응하는 **필드의 이름이 같**아야 한다. 같지 않다면 **AS를 사용하여 같게** 만든다.
            7. **중복값**을 나타내고 싶다면 **UNION ALL**

```sql
SELECT 
  c.type
  ,SUM(CASE
    WHEN c.type = 'a_char'
    THEN t.a_num
    WHEN c.type = 'b_char'
    THEN t.b_num
    ELSE 0
  END) total
FROM TEST t
CROSS JOIN 
	(SELECT 'a_char' type UNION SELECT 'b_char' type) c
GROUP BY c.type
```

1. **a_char 값을 구분 컬럼으로 바꾸고 b_char 값을 1ROW로 출력**
    - 테이블에 존재하는 데이터에서 `최대값(MAX. 집계함수)`, `최소값(MIN)`을 가져오고 싶을 때
    - `IF(조건문, 참일때 값, 거짓일 때 값)`

```sql
/*
프로젝트에 활용 시  A,B,C,D를 SELECT하고 리스트값으로 mybatis에서 foreach를 걸어서 사용
<foreach item="value" index="index" collection="리스트변수">
	 MAX(IF(a_char =#{value},b_char,null)) AS #{value}
</foreach>
*/
SELECT 
 MAX(IF(a_char ='A',b_char,null)) AS A     # 결과값 10
 ,MAX(IF(a_char ='B',b_char,null)) AS B    # 결과값 11
 ,MAX(IF(a_char ='C',b_char,null)) AS C    # 결과값 12
 ,MAX(IF(a_char ='D',b_char,null)) AS D    # 결과값 13
FROM TEST
```

## 대소문자 변경

```sql
SELECT UPPER('abc'), LOWER('ABC')    # 결과값 ABC, abc
```

## 문자열 자르기

- `SUBSTR('원본문자열', '시작 위치값', '가져올 길이 값')`

```sql
# 'ABCDEF'를 2번째 문자열부터 3글자만 출력하기.
SELECT SUBSTR('ABCDEF',2,3)    # 결과값 BCD
```

## 문자열 길이 구하기

- 문자의 Byte길이를 가져오기 때문에 한글은 정확한 길이를 알 수 없다.
- 한글은 `CHAR_LENGTH()` 함수를 사용한다.

```sql
SELECT LENGTH('ABCDEF')      # 결과값 6
SELECT LENGTH('안녕')        # 결과값 6
SELECT CHAR_LENGTH('안녕')   # 결과값 2
```

## 문자열 채워넣기

- **LPAD** - 왼쪽에 특정문자를 원하는 자리수만큼 채워서 반환
- `LPAD('원본 문자열', '원하는 자리수', '채울 문자열')`
- **RPAD** - 오른쪽에 특정 문자를 원하는 자리수만큼 채워서 반환
- `RPAD('원본 문자열', '원하는 자리수', '채울 문자열')`

```sql
select LPAD('1',5,'0')    # 결과값 00001
select RPAD('1',5,'0')    # 결과값 10000
```

## 문자열 시작하는 자릿수 찾기

- 문자열 `str`에서 `substr`이 가리키는 위치를 반환, 일치하는 정보가 없으면 0 반환.
- `INSTR('str', 'substr')`

```sql
select INSTR('ABCDEF','BC')  # 결과값 2
```

## 문자열 수정

- 해당 컬럼의 특정 문자를 변경해 데이터를 뽑아 낼 때 사용한다.
- `REPLACE('문자열', '치환할 기존 문자열', '치환할 변경 문자열')`

```sql
select REPLACE('ABCD','CD','cd')   # 결과값 ABcd
```

## 올림반올림,내림

- `ROUND(숫자, 반올림할 자릿수)` - 숫자를 반올림할 자릿수 +1 자릿수에서 반올림.
- `CEIL(숫자)` - 부동 소수점을 올림해서 반환.
- `FLOOR(숫자)` -  소수점을 내림해서 반환.

```sql
select ROUND(1.2),ROUND(1.7)   # 결과값 1, 2
select CEIL(1.2),FLOOR(1.7)    # 결과값 2, 1
```

## 문자 → 숫자, 숫자 → 문자

- 모든 Integer타입들은 속성으로 `UNSIGNED`를 가지고 있다. 컬럼내에서 음수를 포함하지 않거나 혹은 수의 `RANGE`를 양수 쪽으로 더 넓게 가지고 싶을 때 사용.
- Int형 범위는 **-2147483648 ~ 2147483647** `UNSIGNED` 설정시 엔드포인트가 0부터 시작. **0 ~ 4294967295 로 변경**. 음수 만큼 양수로 늘어난다.

```sql
SELECT CAST('1' AS UNSIGNED)+1    # 문자를 숫자로 변환. 결과값 2
SELECT CONCAT(CAST(1 AS CHAR(1)),'1')    # 숫자를 문자로 변환. 결과값 11
```

## 문자 → 날짜, 날짜 → 문자

```sql
SELECT STR_TO_DATE('2021-01-11 03:00:00','%Y-%m-%d %H:%i:%s')
# 결과값 2021-01-11 03:00:00
SELECT DATE_FORMAT( now(), '%Y%m%d %H')
# 결과값 20211101 18
```

## 날짜 더하기 빼기(시간 등..)

- DATE_ADD : 기준 날짜에 입력된 기간만큼을 더하는 함수
- DATE_SUB : 기준 날짜에 입력된 기간만큼을 빼는 함수

```sql
						# 기준날짜, INTERVAL
SELECT DATE_ADD(NOW(),INTERVAL 1 HOUR)    # 현재 시간에 1시간 더하기
SELECT DATE_SUB(NOW(),INTERVAL 1 HOUR)    # 현재 시간에 1시간 빼기
SELECT DATE_ADD(NOW(),INTERVAL 1 DAY)     # 현재 시간에 1일 더하기
SELECT DATE_ADD(NOW(),INTERVAL -1 YEAR)   # 현재 시간에 1년 빼기
SELECT DATE_SUB(NOW(),INTERVAL -1 YEAR)   # 현재 시간에 1년 더하기
```

## 이전 행,다음 행 값 가져오기

- `LAG(컬럼)` : 현재 ROW 기준으로 이전(위) 행(ROW) 컬럼 값 가져오기
- `LEAD(컬럼)` : 현재 ROW 기준으로다음(아래) 행(ROW) 컬럼 값 가져오기
- `OVER(ORDER BY 컬럼)` : `GROUP BY`나 서브쿼리를 사용하지 않고 집계, 분석함수를 사용할 수 있다.
- `IFNULL(컬럼명, 'NULL일 경우 대체 값')` : 해당 컬럼의 값이 `NULL`을 반환 할 때, 다른 값으로 추력할 수 있도록 하는 함수이다.

```sql
# Previous Row
SELECT t2.a_char, IFNULL(**LAG**(t2.a_char) OVER (ORDER BY t2.idx), '') 
AS bf_a_char FROM TEST2 t2

# Next Row
SELECT t2.a_char, IFNULL(**LEAD**(t2.a_char) OVER (ORDER BY t2.idx), '') 
AS bf_a_char FROM TEST2 t2
```

## 재귀호출

- `IS NULL` : 컬럼의 값이 `NULL`인것을 검색
- `UNION ALL` : 중복을 제거하는 `UNION`과 달리 별도의 중복 제거 과정을 거치치 않고 그냥 결과를 도출한다.

### TEST3 테이블

![Untitled](https://t1.daumcdn.net/cafeattach/1Dzpp/0e739ed139e6f497a79b75c9ca85da6a68eec7a9)

**재귀** : 원래의 자리로 되돌아가거나 되돌아옴 → 같은 걸 반복한다고 생각하면 쉽다.

한 쿼리가 반복되어 실행된다. 이러한 반복 쿼리는 계층구조를 SELECT 할 때 유용.

```sql
WITH RECURSIVE TMP AS (    # TMP 이름을 가진 함수
# NON-RECURSIVE 문장. 첫 루프에서만 실행. 첫 루프에서 TEST3 테이블의 행 수 만큼 자체 반복
  SELECT 
    p.cd,p.parent_cd      # 코드정보, 부모 코드
    ,cast(p.nm as char(100)) as nm    # 정렬
    ,0 AS depth       # 뎁스. 인덱스 같은 것
  FROM TEST3 p
  WHERE p.parent_cd IS NULL    # parent_cd가 NULL인 것 부터 시작해서 자식들이 나온다.
  UNION ALL          # 집합. 중복 제거X 그냥 결과 도출 
  
	# RECURSIVE 문장. 읽어올 때 마다 행의 위치가 기억된다. 다음 번 읽어 올 때 다음행으로 이동한다.
  SELECT 
    c.cd,c.parent_cd
    ,concat(t.nm,' > ',c.nm)    # 문자열 결합
    ,t.depth+1 AS depth         # 재귀가 돌면서 depth가 +1씩 올라간다.
  FROM TEST3 c
  INNER JOIN
    TMP t       # TMP 함수를 JOIN 한다.
  ON c.parent_cd  = t.cd  
)

SELECT * FROM TMP
```

### WITH RECURSIVE

- 메모리 상에 가상의 테이블을 저장
- 반드시 **UNION** 사용
- 반드시 **비반복문**도 최소한 1개 요구됨
- 서브쿼리에서 바깥의 가상의 테이블을 참조하는 문장(**반복문**)이 반드시 필요함
- 반복되는 문장은 반드시 **정지조건**이 요구됨
- 가상의 테이블을 구성하면서 그 **자신(가상의 테이블)**을 참조하여 값을 결정할 때 유용함