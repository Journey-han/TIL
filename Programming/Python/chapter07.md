
# 클래스
## 클래스 선언 및 Self의 이해
파이썬 클래스 상세 이해
Self, 클래스, 인스턴스 변수

클래스(객체), 인스턴스 차이 중요 - 클래스 형태로 코딩 변수에 할당 인스턴스화 시킴 메모리에 올려서 사용.
네임스페이스 : 객체를 인스턴스화 할 때 각각의 저장된 독립적인 공간
클래스 변수 : 직접 사용 가능, 객체보다 먼저 생성. 전체 공유
인스턴스 변수 : 객체마다 별도로 존재, 인스턴스 생성 후 사용. 각각의 네임스페이스를 가지고 있다.

  

### 클래스 선언

	# class 클래스명:
		# 함수
		# 함수

### 클래스 네임스페이스Self
- 클래스 생성

		class UserInfo:
		# 속성, 메소드
		# 클래스 초기화 할 때 호출되는 함수.
		def __init__(self, name):
			self.name = name
		def user_infor_p(self):
			print("Name : ", self.name)

- 클래스를 사용해서 인스턴스화 시킴
인스턴스화된 변수들은 서로 독립적인 네임스페이스라는 창고를 이용해서 그 안에 속성(이름, 나이, 성별 등)들을 저장한다.
네임스페이스: 인스턴스가 갖고 있는 자기 자신의 저장 공간.

		user1 = UserInfo("HAN")
		print(user1.name)
		user1.user_infor_p()
		user2 = UserInfo("LEE")
		print(user2.name)
		user2.user_infor_p()

- id(): 메모리의 주소값 출력
		
		print(id(user1))
		print(id(user2))

- namespace 출력

		print(user1.__dict__)
		print(user2.__dict__)

- 예외처리. 에러가 안난다.
`# pass`

  

### 클래스, 인스턴스 변수

	# 예제3
	# 클래스 변수, 인스턴스 변수(무조건 self가 들어감)

	class WareHouse:
		# 클래스 변수
		stock_num = 0
		# 인스턴스 생성시 init 메서드 호출
		def __init__(self, name):
			self.name = name
			# 창고(WareHouse)가 하나 생길때 마다 +1. 이유 : 공통이므로
			WareHouse.stock_num += 1

		# 인스턴스가 종료될 때 호출되는 함수
		def __del__(self):
			WareHouse.stock_num -=1

	# 클래스 변수는 공통적으로 공유하기 때문에, 인스턴스 변수가 하나씩 생성 될때마다 클래스 변수가 호출이 되어서 3명이 창고를 사용하게 된다.
	# 클래스 변수.__dict__으로 출력을 해보면 stock_num이 3으로 나오는 이유가 이 때문이다.
	user1 = WareHouse('HAN')
	user2 = WareHouse('LEE')
	user3 = WareHouse('SHIN')

	# 인스턴스 변수들은 각각 자기의 네임스페이스안에 모여있다.
	print(user1.__dict__)
	print(user2.__dict__)
	print(user3.__dict__)
	
	# 클래스 네임스페이스, 클래스 변수를 공유한다.
	print(WareHouse.__dict__)
	
	print(user1.name)
	print(user2.name)
	print(user3.name)
	
	# stock_num은 클래스에 있는 것인데도 출력 가능하다.
	# 본인 네임스페이스에 없으면 클래스의 네임스페이스에서 변수를 찾는다. 만약 클래스에서도 못 찾았으면 에러 발생!
	print(user1.stock_num)
	print(user2.stock_num)
	print(user3.stock_num)

	# 지울때 호출되는 함수 del.
	del user1

	# user1을 지웠기 때문에 호출은 user2와 user3만
	print(user2.stock_num)
	print(user3.stock_num)

  

## Self
클래스에서 괄호의 유무는 중요치 않다.

	class SelfTest():
		# 클래스 메서드. 인자가 없기 때문에 인스턴스 메서드에서 호출할 수 없다.
		def function1():
			print('function1 called!')

	# 인스턴스 메서드
	# self 매개변수를 받음.
	def function2(self):
		print(id(self))
		print('function2 called!')

  

- 인스턴스 생성!
`self_test = SelfTest()`

- 클래스 직접 호출. 공통함수로 사용하는 함수. 클래스 이름으로 호출
`# self_test.function1()`
`SelfTest.function1()`

- 인스턴스 생성 후 호출.
`self_test.function2()`
`print(id(self_test))`

- 클래스에서 즉시 호출. 인자로 인스턴스 넣어서 호출.
`SelfTest.function2(self_test)`

인스턴스를 생성하는 메서드들은 self 인자가 자동으로 넘어간다.
self가 없는 것들은 클래스에서 직접 호출한다.

  

## 상속, 다중 상속

- 클래스 상속 기본

슈퍼클래스(부모) 및 서브클래스(자식) -> 부모의 재산 모두 물려 받았기 때문에, 자식클래스에선 부모클래스의 모든 속성, 메서드 사용 가능

상속의 필요성. 코드 재사용, 중복 코드 최소화. 코드의 생산성, 유지보수, 가독성에 아주 중요하다.
**예. 라면 : 자식클래스로 생성 - > 속성(종류, 회사, 맛, 면 종류, 이름) : 공통적인 부분들을 '부모클래스'로생성**

	class Car:
		"""Parent Class"""
		def __init__(self, tp, color):
			self.type = tp
			self.color = color
		
		def show(self):
			return 'Car Class "Show Method!"'
	
	class BmwCar(Car):
		"""Sub Class"""
		def __init__(self, car_name, tp, color):
			super().__init__(tp, color)
			self.car_name = car_name

		def show_model(self) -> None:
			return "Your Car Name : %s" % self.car_name

	class BenzCar(Car):
		"""Sub Class"""
		def __init__(self, car_name, tp, color):
			super().__init__(tp, color)
			self.car_name = car_name

		def show_model(self) -> None:
			return "Your Car Name : %s" % self.car_name

		def show(self):
		# 부모 클래스에 접근해서 부모의 show()메서드도 호출
		# return을 문자열로 했기 때문에 print()로 감싸기
		print(super().show())
		return ' Car Info: %s %s %s' % (self.car_name, self.type, self.color)

  
  

- 클래스 상속 예제 코드

		# 일반 사용
		model1 = BmwCar('520d', 'sedan', 'green')

		print(model1.color) # Super. color는 부모클래스에서 물려받은것
		print(model1.type) # Super
		print(model1.car_name) # Sub. 자식클래스의 각자 속성이다.
		print(model1.show()) # Super. 클래스에 구현되어 있는 메서드
		print(model1.show_model()) # Sub. 자식클래스에서 구현되어 있는 메서드
		print(model1.__dict__)

  

- Method Overriding(오버라이딩)
부모의 것을 모두 사용하는 것이 아니라, 자식 클래스에서 내가 원하는 것만 상속 받고 기능을 개선, 추가. 갱신(이름 같은데 내용 다르게 메서드 재구현)하는 것.
부모에 있던 메서드 올라타서 자식메서드 구현하고 자식메서드를 새롭게 실행. 이름만 같게 하고, 코드 재활용

		model2 = BenzCar("220d", 'suv', "black")
		print(model2.show())

		# Parent Method Call
		model3 = BenzCar("350s",'truck', 'silver')

		# 오버라이딩 된 show()메서드가 호출 된다.
		print(model3.show())

		# Inheritance Info. 상속 관계가 깊을 때
		# mro(). 상속관계를 리스트형태로 나타낸다. 모든 클래스들은 object를 상속받고 있다. object는 모든 클래스들의 부모 (왼쪽에서 오른쪽으로 상속 관계)
		print(BmwCar.mro())
		print(BenzCar.mro())

  

- 클래스 다중 상속
'class X:'로 해되 됨 모든 클래스는 object를 상속받고 있기 때문에 X(object)라고 명시적으로 써도 에러는 안난다.

		class X(object):
			# pass를 쓰면 에러가 안난다. 안쓰면 에러. 코드의 구현이 완벽하지 않기 때문에 파이썬 인터프리터가 에러가 난다.
			# 일단 통과해줘. 나중에 구현 할꺼야라는 뜻
			pass
			
		class Y():
			pass
			
		class Z():
			pass

		# 클래스 클래스 A는 X와 Y를 상속 받겠다.
		class A(X, Y):
			pass
		
		class B(Y, Z):
			pass
			
		class M(B, A, Z):
			pass
			
		print(M.mro())
		# 너무나 복잡한 다중 상속은 코드를 해석하기에 무리가 있을 수 있다.
		print(A.mro())