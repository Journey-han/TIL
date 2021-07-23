
# 모듈, 패키지
## 패키지 예제

### 상대 경로
.. : 부모 디렉토리
. : 현재 디렉토리

  

### 패키지 설정
- 사용1(클래스)
	
		# pkg 폴더(패키지)의 fibonacci 파일(모듈)에서 Fibonacci 클래스 import
		from pkg.fibonacci import Fibonacci
		
		# Fibonacci 클래스에서 fib()함수 호출
		Fibonacci.fib(300)

		# Fibonacci클래스의 fib2()함수는 리스트로 리턴하고 있기 때문에 print문 써서 호출. 리스트로 반환
		print("ex1 : ", Fibonacci.fib2(400))

		# Fibonacci()로 인스턴스생성. 인스턴스 생성해야 __init__메서드 호출 되기 때문에.
		# 인스턴스 초기화 후 title 호출
		print("ex1 : ", Fibonacci().title)
		
- 사용2 (클래스. 메모리를 많이 차지하기 때문에 권장X)

		# fibonacci 파일에 있는 클래스 전부 가져오는것 *.
		# 하지만 사용하지 않는것들을 가져오면 불필요한 리소스 낭비가 되기 때문에 권장X
		# ','로 구분 되기 때문에 ','를 사용해서 import 하자

		from pkg.fibonacci import *

		Fibonacci.fib(500)

		print("ex2 : ", Fibonacci.fib2(600))
		print("ex2 : ", Fibonacci().title)

  
  
  
  
  

### 모듈 사용 및 Alias 설정

- 사용3 (클래스. Alias 사용)

		# 가독성을 높이기 위해 클래스 이름에 별칭을 주어 사용한다.
		from pkg.fibonacci import Fibonacci as fb
		
		fb.fib(1000)

		print("ex3 : ", fb.fib2(1600))
		print("ex3 : ", fb().title)

- 사용4(함수)

		# calculations 파일은 클래스가 아닌 전부 함수단위이기때문에, class가 아닌 함수 전부를 import 할 수 있도록 한다.
		import pkg.calculations as c
		
		print("ex4 : ", c.add(10, 100))
		print("ex4 : ", c.mul(10, 100))

- 사용5(함수)

		# 모든 함수를 다 사용하는 것이 아니면 필요한 함수만 가져올 수 있다. (사용할 만큼만 리소스에 올려서 사용)
		from pkg.calculations import div as d
		print("ex5 : ", int(d(100, 10)))

  
  
  

- 사용6

		import pkg.prints as p
		import builtins # 파이썬 기본적으로 제공하는 함수들. 기본적으로 내장 되어 있기 때문에 명시적으로 import를 안해도 호출할 수 있다.

		p.prt1()
		p.prt2()
		print(dir(builtins))

### 패키지 사용 장점
파일 하나하나의 단위를 모듈이라고 볼 수 있다.

파일들을 모두 갖고 있는 폴더를 패키지 형태로 볼 수 있다.

모듈들을 디렉토리 구조로, 구조적으로 관리하는 것을 패키지라고 한다.