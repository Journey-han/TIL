
# 흐름제어
## 조건문 IF

- 조건문 기본 형식

		print(type(True))
		print(type(False))

		# 예1
		if True:
			print("Yes")

		# 예2
		if False:
			print("No")

		# 예3
		if False:
			print("No")
		else:
			print("Yes2")
			
- 관계 연산자 (>, >=, <, <=, ==, !=)

		a = 10
		b = 0

		print(a == b)
		print(a != b)
		print(a > b)
		print(a >= b)
		print(a < b)
		print(a <= b)

- 참 거짓 종류(True, False)
참 : "내용", [내용], (내용), {내용}, 1, True
거짓 : "", [], (), {}, 0, False

		city = ""
		if city:
			print(">>>True<<<")
		else:
			print(">>>False<<<")

- 논리 연산자 (and, or, not)

		a = 100
		b = 60
		c = 15
		
		print('and : ', a > b and b > c)
		print('or : ', a > b or c > b)
		print('not : ', not a > b)
		print(not False)
		print(not True)

		# 산술, 관계, 논리 연산자
		#우선순위: 산술 > 관계 > 논리 순서로 적용
		print('ex1 : ', 5 + 10 > 0 and not 7 + 3 == 10)
		
		score1 = 90
		score2 = 'A'

		if score1 >= 90 and score2 == 'A':
			print("합격하겼습니다")
		else:
			print("죄송합니다. 불합격입니다.")

- 다중 조건문 (if elif, else)

		num = 76
	
		if num >= 90:
			print("num 등급 A", num)
		elif num >= 80:
			print("num 등급 B", num)
		elif num >= 70:
			print("num 등급 C", num)
		else:
			print("꽝")

- 중첩 조건문

		age = 100
		height = 220
		
		if age >= 90:
			if height >= 200:
				print("당첨")
				elif height >= 100:
					print("아쉽")
			else:
				print("꽝")
		else:
			print("다음에 오세요.")
			

## 반복문 For, while

### 파이썬 코딩의 핵심
코딩의 핵심 -> 조건 해결 중요

- 시퀀스 타입 반복

		v1 = 1
		
		while v1 < 11:
			print("v1 is : ", v1)
			v1 += 1
  
- 0부터 시작

		for v2 in range(10):
			print("v2 is : ", v2)

- 1부터 시작. 시작하고 싶은 수, 반복할 수

		for v3 in range(1,20):
			print("v3 is : ", v3)

- 1 ~ 100합

		sum1 = 0
		cnt1 = 0

		while cnt1 <= 100:
			sum1 += cnt1
			cnt1 += 1
		
		print('1 ~ 100 : ', sum1)


### range() : 반복에 사용할 수 있는 자료

	print('1 ~ 100 : ', sum(range(1, 101)))
	
	# 시작 할 수, 끝날 수, 증감.점핑(2씩 점프해서 짝수만 합)
	# 매개변수는 3개까지만 사용
	
	print('1 ~ 100 : ', sum(range(1, 101, 2)))


### 시퀀스 (순서가 있는)자료형 반복
문자열, 리스트, 튜플, 집합, 사전

-  iterable 리턴 함수 : range, reversed, enumerate, filter, map, zip
`names = ["Kim", "Park", "Cho", "Choi", "Yoo"]`

- for 반복자 in 반복할 수 있는 것:

		for v in names:
		print("U R : ", v)
	
		word = "dreams"

		for s in word:
			print("Word : ", s)

		my_info = {
			"name": "kim",
			"age": 33,
			"city": "Seoul"
		}

- 기본 값은 key

		for key in my_info:
			print('1.my_info : ', key)

- value

		for key in my_info.values():
			print('2.my_info : ', key)

- key

		for key in my_info.keys():
			print('3.my_info : ', key)

- key and value

		for k, v in my_info.items():
			 print('4.my_info : ', k, v)

		name2 = "THankU"

		for n in name2:
			if n.isupper():
			print(n.lower())
		else:
			print(n.upper())


### Continue, Break

-  continue

		lt = ["1", 2, 5, True, 4.3, complex(4)]
		# continue는 for문안에 있는 else문 실행 된다.

- break

		numbers = [14, 3, 4, 7, 10, 24, 17, 2, 33, 15, 34, 66, 38]
	
		for num in numbers:
			if num == 33:
			print("found : 33!")
			break
		else:
			print("not found : 33!!")

**break가 작동 했을 경우 for문에 있는 else문이 실행 하지 않는다.**
**break가 없을 경우 if문이 다 돌고 for문을 빠져나가기전 마지막에 실행 된다.**

- For - else 구문
for - else 구문 (반복문이 정상적으로 수행 된 경우 else 블럭 수행)

		for num in numbers:
			if num == 33:
			print("found : 33!")
		else:
			print("not found : 33!!")
		else:
			print("NOT FOUND 33....")


### 자료구조 변환

		# 실수 찾기
		for v in lt:
			if type(v) is float:
			continue
			print('타입 : ', type(v))

		name = "Pingpong"
		
		print(reversed(name))
		print(tuple(reversed(name)))
		print(list(reversed(name)))