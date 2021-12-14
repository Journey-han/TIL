
# 파이썬 데이터 베이스 연동(SQLite)
 DB 사용 권장 이유(통합성. 데이터 중복 방지, 최신 데이터 유지)

## SQLite 기본 연동 및 테이블 생성

### 데이터베이스 설정

- SQLite 기본 사용법

```python
import sqlite3
import datetime
```

- 삽입 날짜 생성

```python
now = datetime.datetime.now()
print('now : ', now)

nowDatetime = now.strftime('%Y-%m-%d %H:%M:%S')
print('nowDatetime : ', nowDatetime)

``` 

- sqlite3

```python
print('sqlite3.version : ', sqlite3.version)
print('sqlite3.sqite_version : ', sqlite3.sqlite_version)
```
  

- DB 생성 & Auto Commit(Rollback)

```python
conn = sqlite3.connect('C:/Users/USER/Desktop/python_basic/resource/database.db', isolation_level=None)
```

- Cursor

```python
c = conn.cursor()
print('Cursor Type : ', type(c))
```

### 테이블 생성(Data Type : TEXT, NUMERIC INTEGER REAL BLOB)

```python
c.execute("CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, username text, email text, phone text, website text, regdate text)")
```

### 데이터 삽입

```python
c.execute("INSERT INTO users VALUES(1, 'Lee', 'pepper@tones.com', '123-456-7890', \
'lee.com', ?)", (nowDatetime,)) # 매개변수로 nowDatetime 값 넣기. 튜플 형태로 값 넣는다.
							
					          # 물음표의 갯수와 튜플의 원소의 갯수가 같아야 한다.
c.execute("INSERT INTO users(id, username, email, phone, website, regdate) VALUES (?,?,?,?,?,?)",
(2, 'Shin', 'sayo@tones.com', '098-765-4321', 'shin.com', nowDatetime))
```

 - Many 삽입(튜플, 리스트)

```python	
userList =(	
	(3, 'Yoo', 'yoo@tones.com', '010-000-0000', 'yoo.com', nowDatetime),
	(4, 'Han', 'han@tones.com', '010-111-1111', 'han.com', nowDatetime),
	(5, 'Ho', 'ho@tones.com', '010-222-2222', 'ho.com', nowDatetime)
)

c.executemany("INSERT INTO users(id, username, email, phone, website, regdate) VALUES(?,?,?,?,?,?)", userList)
```

### 테이블 데이터 삭제

```python
conn.execute("DELETE FROM users")
print("user db deleted : ", conn.execute("DELETE FROM users").rowcount)
```

### 커밋 : isolation_level = None 일 경우 자동 반영(오토 커밋)
- `conn.commit()`

### 롤백
- `conn.rollback()`

### 접속 해제
- `conn.close()`

## 테이블 조회, 조건 조회

### 다양한 테이블 조회

- SQLite 기본 사용법	
	- `import sqlite3`

-  DB파일 조회(없으면 새로 생성)
	- `conn = sqlite3.connect('C:/Users/USER/Desktop/python_basic/resource/database.db') # 본인 DB 경로`
		
-  커서 바인딩
	- `c = conn.cursor()`

### 데이터 조회(전체)
- `c.execute("SELECT * FROM users")`

1. 커서 위치가 변경
- 1개 row 선택
	- `print('One -> \n', c.fetchone())`
- 지정 row 선택
	- `print('Three -> \n', c.fetchmany(size=3))`
- 전체 row 선택
	- `print('All -> \n', c.fetchall())`
- 커서의 위치가 데이터 끝으로 옮겨졌기 때문에, 데이터 출력할 수 없다.
	- `print('Next -> \n', c.fetchall())`

## 순회

```python
rows = c.fetchall()
	
for row in rows:
	print('retrieve1 > ', row)

# 순회2
for row in c.fetchall():
	print('retrieve2 > ', row)

# 순회3
for row in c.execute('SELECT * FROM users ORDER BY id DESC'):
print('retrieve3 > ', row)
```

## Where
Tuple, Dictionary Mapping

1. WHERE Retrieve1
- 튜플로 바인딩

```python		
param1 = (3,)
c.execute('SELECT * FROM users WHERE id=?', param1)
print('param1', c.fetchone())
# 커서가 다음 데이터가 나올 위치를 기억하고 있지만, 다음 데이터가 없기 때문에 출력되지 않는다.
print('param1', c.fetchall()) # 빈값. 데이터 없음. id가 3번인 데이터는 하나밖에 없기 때문에
```

2. WHERE Retrieve2
- 함수로 바인딩

```python
param2 = 4
c.execute('SELECT * FROM users WHERE id="%s"' % param2) # %s, %f, %d
print('param2', c.fetchone())
# 커서가 다음 데이터가 나올 위치를 기억하고 있지만, 다음 데이터가 없기 때문에 출력되지 않는다.
print('param2', c.fetchall())
```
		
3. WHERE Retrieve3
- 딕셔너리로 바인딩

```python
c.execute('SELECT * FROM users WHERE id=:ID', {"ID": 5})
print('param3', c.fetchone())
# 커서가 다음 데이터가 나올 위치를 기억하고 있지만, 다음 데이터가 없기 때문에 출력되지 않는다.
print('param3', c.fetchall())
```

4. WHERE Retrieve4

```python
param4 = (3, 5)
c.execute("SELECT * FROM users WHERE id IN(?, ?)", param4)
print('param4', c.fetchall())
```

5. WHERE Retrieve5

```python
c.execute("SELECT * FROM users WHERE id IN('%d', '%d')" % (3, 4))
print('param5', c.fetchall())
```

6. WHERE Retrieve6

```python
c.execute("SELECT * FROM users WHERE id = :id1 OR id=:id2", {"id1": 2, "id2": 4})
print('param6', c.fetchall())
```

## Dump 출력

```python
with conn:
	with open('c:/Users/USER/Desktop/python_basic/resource/dump.sql', 'w') as f:
		for line in conn.iterdump():
			f.write('%s\n' % line)
		print('Dump Print Complete')

# f.close(), conn.close() 함수 호출까지 끝났다.
```

## 테이블 수정, 삭제

### UPDATE
- 수정이 된 데이터는 더이상 바뀌지 않도록 주석처리 해놓는것도 좋다.

1. 데이터 수정1
	- `c.execute("UPDATE users SET username = ? WHERE id = ?", ("Ping-pong", 5))`
2. 데이터 수정2 - Dictionary
	- `c.execute("UPDATE users SET username = :name WHERE id = :id", {"name" : 'ABC', "id" : 3})`
3. 데이터 수정3 - String format
	- `c.execute("UPDATE users SET username = '%s' WHERE id = '%s'" % ('Knock', 4))`
4. 중간 데이터 확인1
	- `for user in c.execute("SELECT * FROM users"):	print(user)`

### DELETE
1. Row Delete1
	- `c.execute("DELETE FROM users WHERE id = ?", (5,))`
2. Row Delete2
	- `c.execute("DELETE FROM users WHERE id = :id", {"id" : 4})`
3. Row Delete3
	- `c.execute("DELETE FROM users WHERE id = '%s'" % 3)`
4. 중간 데이터 확인2		
	- `for user in c.execute("SELECT * FROM users"):	print(user)`

## 테이블 전체 데이터 삭제
- `print("users db deleted : ", conn.execute("DELETE FROM users").rowcount, " rows")`

## Commit & Close
1. 커밋을 안쓰면 수정된 데이터가 반영이 안된다.
- `conn.commit()`

2. 접속 해제
- `conn.close()`