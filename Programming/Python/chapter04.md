
# 자료형

## 데이터 타입
- Boolean

		# Bolean True(1) / False(0)
		v_bool = True

- Numbers

		# float 실수형
		v_float=10.3
		# 0.5
		f1 = .5
		# 10.0
		f2 = 10.

		# int 정수형
		v_int = 7

		# 자바에선 큰수를 선언할 때 자료형이 따로 있으나 파이썬은 따로 없이 int로 선언.
		big_int1 = 99999999999999999999999
		big_int2 = 777777777777777777777777

- String

		# String 문자형
		v_str1 = "Niceman"
		v_str2 = "Goodboy"
		
- Bytes

- Lists
`v_list = [3, 5, 7]`

- Tuples
`v_tuple = 3, 5, 7`

- Set 집합
`v_set = {7, 8, 9}`

  

- Dictionaries

		# Dictionary
		v_dict = {
			# key : value 형태로 구분은 ,로한다.
			"name" : "kim",
			"age" : 25
		}

  

# 숫자형 및 연산자

- `+` : 더하기
- `-` : 빼기
- `*` : 곱하기
- `/` : 나누기
- `//` : 나누기(몫)
- `%` : 나누기(나머지)
- `**` : 지수(제곱)

- 단항 연산자
`실수 + 정수 = 실수. 실수로 자동 형변환.`

  

# 문자형 및 연산자
## 문자형 관련 연산자

- 문자열 생성, 길이

		# 생성
		str1 = "I am boy."
		str2 = "Ready and get set go"
		str3 = ''

		# 공백
		str4 = str()

		# 문자열의 길이를 구하고 싶다.
		# 공백과 온점(.), 빈 문자열('')도 하나의 길이로 취급한다.
		print(len(str1), len(str2), len(str3), len(str4))

  

### Raw String
		# 있는 그대로 출력해준다. 경로 표시 할 때 많이 사용한다.
		raw_s1 = r'C:\Programs\Test\Bin'
		print(raw_s1)
		raw_s2 = r"\\a\\a"
		print(raw_s2)

  

- 이스케이프 문자

		escape_str1 = "Do you have a \"big collection\""
		escape_str2 = "Tab \t Tap\tTap"

		# 멀티라인
		# 변수 = eacape 기호 '\'를 써주면 이후의 내용이 이어진다는 뜻.
		multi = \
		"""
		문자열
		멀티라인
		테스트
		"""

- 문자열 연산
 
		str_o1 = '*'
		str_o2 = 'abc'
		str_o3 = 'def'

		# 한 번 선언된 변수의 값은 한 번 할당이 되면 수정이 불가능. 이뮤터블. 순회가 가능하다.
		str_o4 = "ping-pong"
		print(str_o1 * 100)
		print(str_o2 + str_o3)

		# 곱하기 연산자는 반복으로 인식하지만 더하기 연산자는 출력할 수 없다.
		# 문자열 + 숫자형이므로 자료형이 다르기 때문에.
		print(str_o1 * 3)

		# str_o4 문자열 안에 'a'가 포함되어 있나? - False
		print('a' in str_o4)

		# str_o4 문자열 안에 'p'가 포함되어 있나? - True
		print('p' in str_o4)
		print('z' not in str_o4)
		
- 문자열 형 변환
		
		# 문자열 형 변환
		# 77을 문자로 취급하게 str(77)로 선언 + a = 77a
		print(str(77) + 'a')

		# 문자열로 형변환 했기 때문에 10.4는 문자열이다.
		print(str(10.4))

- 문자열 함수

		# 문자열 함수
		# 파이썬엔 많은 문자열을 처리 할 수 있는 함수들이 있다. 그렇기 때문에 꽤나 직관적이고 강력하다. 데이터 분석이나 언어를 활용한 머신러닝, 챗봇, 형태소 분석 등 다양한 분야에서 사용되고 있다.
		# 참고 : http://www.w3schools.com/python/python_ref_string.asp

		a = 'new Hippie Generation'
		b = 'Thank you'

		# # a의 문자열이 전부 소문자로 이루어졌니?
		# print(a.islower())
		
		# # b 문자열의 끝 글자가 u로 끝나고 있니?
		# # 언어 처리 할 때, '~입니다','.(마침표)'로 끝나는지 체크 할 때 유용
		# print(b.endswith('u'))

		# # a 문자열의 첫 글자를 대문자로 바꿔준다.
		# print(a.capitalize())

		# # a 문자열에서 특정 문자열을 찾아 바꿔준다. '바꿀 문자', '새로운 문자'
		# print(a.replace('new', 'old'))

		# # b 문자열을 역순으로 출력. list에 담아서 출력 할 수 있도록 한다.
		# print(list(reversed(b)))

		# 문자를 한번 할당 하면 반환이 불가하다. 그렇기 때문에 주석처리 함.
		# 이유: 문자열의 인덱싱 때문에.

  

- 문자열 슬라이싱

		# 슬라이싱

		a = 'new Hippie Generation'
		b = 'Thank you'

		# a 문자열 0번지 부터 3번지까지 출력
		print(a[0:3])

		# b 문자열 0번지 부터 5번지까지 출력
		print(b[0:5])

		# a 문자열 0번지 부터 끝까지 출력
		print(a[0:len(a)])

		# b 문자열 0번지 부터 끝-1까지 출력. 끝 글자는 출력되지X
		print(b[0:len(b)-1])

		# 시작하는 인덱스 생략시 0번지부터 시작.
		print(b[:5])
		print(a[:len(a)])

		# 시작하는 인덱스와 끝나는 인덱스 생략시 문자열 전부 출력
		print(a[:])
		print(b[:])

		# a 문자열의 0번지에서 15번지까지 출력하는데 2씩 점핑(스킵해서 출력.
		# 0,2,4,6,8,10,12,14번지 문자까지만 출력된다.
		print(a[0:15:2])

		# b 문자열의 1번지 부터 끝에서 -2번지까지만 출력
		# 앞에서 시작할 땐 0번지, 끝에서 시작할 땐 -1 (-1은 끝글자는 제외하고 그 전 글자만 출력. 예)you -1 yo)
		print(b[1:-2])

		# b 문자열이 처음과 끝이 지정되어 있지 않고 스킵단위는 -1 역순으로.
		# list(reversed(b))와 같은 결과값을 얻을 수 있다. 대신 배열X 문자열로
		print(b[::-1])

		# 이렇게 문자열이 한번 할당하면 각각 문자열에 인덱스가 부여되기 때문에 한번 선언하면 바꿀 수 없다. immutable

 
# 자료구조(List, Tuple)

## 리스트 
리스트(순서O, 중복O, 수정O, 삭제O) - 딕셔너리와 같이 가장 많이 사용.

		# 선언
		# 대괄호로 선언

		a = []

		# 명시적으로 선언
		b = list()

		# int 정수의 모음
		c = [1, 2, 3, 4]

		# 자료형 타입이 달라도 리스트 선언 가능
		d = [10, 100, 'Pen', 'Banana', 'Orange']

		# 중첩 리스트로 선언
		e = [10, 100, ['Pen', 'Banana', 'Orange']]

  

### 인덱싱

		# 인덱스의 범위 지정 - 슬라이싱
		print(d[3])
		print(d[-2])
		print(d[0] + d[1])
		print(e[2][1])
		print(e[-1][-2])

  

### 슬라이싱

		# d 리스트의 0번지(10) 부터 3번지 이전까지(pen)
		print(d[0:3])

		# e 리스트의 2번지에서 1번지(pen)부터 3번지 이전까지(3번지는 없으므로 2번지(Orange)까지 출력.)
		print(e[2][1:3])

  

### 연산

		# c 리스트와 d 리스트를 하나의 리스트로 연결해서 출력.
		print(c + d)

		# c 리스트를 3번 반복하게. extention
		print(c * 3)

		# 자료형 다를 땐, 형변환 해서 연산
		print(str(c[0]) + 'hi')

  

### 리스트 수정

		# 리스트 c의 0번지를 77로 수정
		c[0] = 77
		print(c)

		# 리스트 c의 1번지부터 2번지 전까지를 [100, 1000, 10000]으로 수정 및 삽입
		# 슬라이싱 처리 할 땐 하나의 원소에 값이 들어간다.

		c[1:2] = [100, 1000, 10000]
		print(c)

		# 하나의 인덱스에 리스트 자체를 넣으면 중첩 리스트가 된다.
		c[1] = ['a', 'b', 'c',]
		print(c)

  

### 리스트 삭제

		del c[1]
		print(c)

-  맨 끝 글자 삭제

		del c[4]
		print(c)
		del c[-1]
		print(c)
		print()

### 리스트 함수

	y = [5, 3, 2, 4, 1]
	print(y)

	# append()라는 함수를 사용해서 마지막 위치에 요소 추가
	y.append(6)
	print(y)

	# sort(): 정렬 함수. 요소를 오름차순으로 정렬
	y.sort()
	print(y)

-  reverse(): 요소들을 역순으로 정렬

		y.reverse()
		print(y)

- insert(): 특정 인덱스, 추가할 요소

		y.insert(2,7)
		print(y)

- remove(): 원하는 값 삭제. del은 인덱스 찾아서 삭제

		y.remove(2)
		print(y)

- pop(): 맨 마지막 요소를 꺼낸다. LIFO
 계속 pop()을 사용할 경우 값이 없으면 예외가 발생한다.

		y.pop()
		print(y)

- extend(): 요소 추가. 현재 값에서 요소 추가해서 연장.

		ex = [88, 77]
		y.extend(ex)
		print(y)

-  append()를 사용할 경우 리스트로 추가된다.

		y.append(ex)
		print(y)

-  삭제 : del, remove, pop

  

## 튜플
튜플 (순서o, 중복o, 수정x, 삭제x)
수정과 삭제로 인해 프로그램 흐름에 크리티컬한 영향을 끼치는 것을 방지하기 위해 튜플에 데이터를 저장해서 사용하도록 한다.

		# 선언은 () 소괄호로 한다.
		a = ()
		b = (1,)
		c = (1, 2, 3, 4)

		
### 삭제할 경우, TypeError: 'tuple' object doesn't support item deletion

		del c[2]
		d = (10, 100, ('a', 'b', 'c'))

  

### 인덱스로 찾아서 출력

		print(c[2])
		print(c[3])

		# d 튜플의 2번지('a','b','c') 안에서 2번지('c') 찾기
		print(d[2][2])

  

### 슬라이싱

	# 마지막 글자에 ',' 콤마도 같이 출력. 규칙이다.
	print(d[2:])

	# d 튜플의 2번지 안에서 0번지부터 2번지 전까지만 출력
	print(d[2][0:2])

  

### 연산

	print(c + d)
	print(c * 3)
	print()

  

### 튜플 함수

	z = (5, 2, 1, 4, 3, 1)
	print(z)

	# z 안에 3이 있니 - True
	print(3 in z)

	# 찾고자 하는 값의 인덱스 반환하기
	# z에서 3이 있는 인덱스 반환

	print(z.index(3))

	# z에서 5가 있는 위치 인덱스 반환
	print(z.index(5))

	# 찾고자 하는 값의 갯수 반환
	# z에서 1이 몇개 있니

	print(z.count(1))

 
# 자료구조(Dictionary, Set)

## 딕셔너리
딕셔너리(Dictionary) : 순서X, 중복X, 수정O, 삭제O
Key, Value 형식. JSON 형식과 비숫 -> MongoDB
Key(키)를 가지고 Value(값)를 조회
키는 중복X, 값은 중복O

### 선언
	a = {'name':'lee', 'phone':'010-000-0000', 'birth':890909}

	# Key를 숫자로 잘 사용되진 않는다. Key는 보통 찾고자 하는 것 의미있는 단어로 주로 구성
	b = {0: 'Go Python!', 1: 'Hello Coding!'}

	# 모든 자료형이 값으로 사용할 수 있다. 이용이 유연하다.
	c = {'arr': [1, 2, 3, 4, 5]}

	# a의 타입이 무엇인지?
	print(type(a))

  
### 출력
직접 접근도 괜찮지만 `print(a['name'])`

	# get 함수를 이용해서 출력하도록 하자. 에러 최소화
	print(a.get('name'))
	print(a.get('address'))

### 리스트 슬라이싱 처리해서 출력
`print(c['arr'][1:3])`

### 딕셔너리 추가

	a['address'] = 'Seoul'
	print(a)
	a['rank'] = [1, 2, 3, 4]
	a['rank2'] = (1., 2, 3)
	print(a)

  

### key(키), values(값), items(키:값, 통 틀어서)

	# 형변환 실패
	# print(a.keys()[0])

	print(list(a.keys()))

	temp = list(a.keys())
	print(temp[1:3])

	print(a.values())
	print(list(a.values()))

	print(list(a.items()))
	print(2 in b)
	print('name2' not in a)


## 집합(Set) (순서x, 중복x)

	a = set()
	b = set([1, 2, 3, 4])
	c = set([1, 4, 5, 6, 6])

	print(type(a))
	print(c)
  
**set은 주로 형변환해서 사용한다.**
### 튜플로 형변환

	t = tuple(b)
	print(t)

### 리스트로 형변환

	l = list(b)
	print(l)

	s1 = set([1, 2, 3, 4, 5, 6])
	s2 = set([4, 5, 6, 7, 8, 9])

### intersection() 교집합 함수

	print(s1.intersection(s2))
	print(s1 & s2)

### union() 합집합 함수

	print(s1 | s2)
	print(s1.union(s2))

### difference() 차집합 함수

	print(s1.difference(s2))
	print(s1 - s2)

### 추가 & 제거

	s3 = set([7, 8, 10, 15])
	s3.add(18)

	# 7은 이미 있기 때문에 추가X 중복을 허용하지않기 때문.
	s3.add(7)
	print(s3)
	
	s3.remove(10)
	print(s3)

	print(type(s3))