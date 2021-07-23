
# 함수

## 함수 정의 및 람다(lambda) 사용

### 함수 선언
하나의 기능을 수행하는 것을 하나의 함수 형태로 만들어 놓는게 좋다. 여러가지 함수를 만들어 놓고 직관적으로 보기 쉽게 구분할 수 있다.

- 함수 정의 방법
				
		# def 함수명(parameter):
			# code

		# 함수 호출
		# 함수명(parameter)
		
		# 함수 선언 위치 중요

		# 예제1
		def hello(world):
			print("Hello ", world)
		
		hello("Python!")
		hello("7777")


### 함수 다양한 사용
- 전체 혼합
	
		def example_mul(arg1, arg2, *args, **kwargs):
			print(arg1, arg2, args, kwargs)
		
			example_mul(10, 20)
			example_mul(10, 20, 'Park', 'kim', age1=24, age2=33)

- 중첩 함수(클로저)

		def nested_fuc(num):
			def func_in_func(num):
			print('>>', num)
		
		print("in func")
		func_in_func(num + 10000)
		nested_fuc(10000)


- 다양한 반환 값

		# 예제2
		def hello_return(world):
			val = "Hello " + str(world)
			return val
			
		str1 = hello_return("Python!!!!")
		print(str)

		# 예제3(다중리턴)
		def func_mul(x):
			y1 = x * 100
			y2 = x * 200
			y3 = x * 300
			return y1, y2, y3

		val1, val2, val3 = func_mul(100)
		print(type(val1), val1, val2, val3)

		# 예제4(데이터 타입 변환 - 리스트[], 튜플(), Set{})
		def func_mul2(x):
			y1 = x * 100
			y2 = x * 200
			y3 = x * 300
			return [y1, y2, y3]

		lt = func_mul2(100)
		print(type(lt), lt)

		# 예제6
		# x는 int형이어야 한다. 계산이 끝나고 자료형은 list로 반환된다. int로 받아서 list로 아웃

		def func_mul3(x : int) -> list:
			y1 = x * 100
			y2 = x * 200
			y3 = x * 300
			return [y1, y2, y3]

		print(func_mul3(5))

  

### *args, **kwargs
가변. 매개변수가 몇개가 넘어갈지 모를때, 넘어오는 매개변수의 갯수에 따라서 함수의 작동을 달리 할 때

	# 예제4
	def args_func(*args):
		print(type(args), args)
		for t in args:
			print(t)
			
		# enumerate(): index를 붙여주는 함수.
		for i,v in enumerate(args):
		print(i,v)

	args_func('kim')
	args_func('kim', 'Park')
	args_func('kim', 'Park', 'Lee')

- kwargs. 키워드 형태의 매개변수 keyword + args
**하나면 튜플로**, 두개면 딕셔너리로 받는다.

		def kwargs_func(**kwargs):
			# print(kwargs)
		for k, v in kwargs.items():
			print(k, v)

		kwargs_func(name1='kim')
		kwargs_func(name1='kim', name2='Park', name3='Lee')

  

## 람다 함수
람다식 : 메모리 절약, 가독성 향상, 코드 간결
함수는 객체 생성 -> 리소스(메모리) 할당
람다는 즉시 실행(Heap 초기화) -> 메모리 초기화

	  # 일반적 함수 -> 변수 할당
	def mul_10(num : int) -> int:
		return num * 10

	var_func = mul_10
	print(var_func)
	print(type(var_func))
	print(var_func(10))

  

- 람다식으로 코드 작성

							# (num:int): return num* 10. 코드가 간결해졌다
		lambda_mul_10 = lambda num: num * 10
		print('>>>',lambda_mul_10(10))
		
		def func_final(x, y, func):
			print(x * y * func(10))

		func_final(10, 10, lambda_mul_10)

		# 람다식으로 함수 만들어서 함수의 인자로 사용 할 수 있다.
		print(func_final(10, 10, lambda x : x * 1000))