
# 예외 처리
### 파이썬 예외 종류
문법적으로 에러가 없지만, 코드 실행(런타입)프로세스에서 발생하는 예외 처리도 중요

 linter : 코드 스타일, 문법 체크
SyntaxEror : 잘못된 분법

	print('Test)
	if True
		pass
	x => y

  

### 문법적 에러 발생 실습

- NameError : 참조 변수 없음
		
		a = 10
		b = 15
		print(c)

- ZeroDivisionError : 0 나누기 에러
	
		print(10 / 0)

- IndexError : 인덱스 범위 오버

		x = [10, 20, 30]
		print(x[0])
		print(x[3]) # 3번지는 없기 때문에 예외 발생

- keyError

		dic = {'name': 'Kim', 'Age' : 33, 'City':'Seoul'}
		
		print(dic['hobby']) hobby라는 Key가 없어서 KeyError 발생
		print(dic.get('hobby')) # 해당 Key가 없어도 None으로 출력된다. 예a외X

- AttributeError : 모듈, 클래스에 있는 잘못된 속성 사용시에 예외

		import time
		print(time.time())
		# print(time.month())
		
- ValueError : 참조 값이 없을 때 발생

		x = [1, 5, 9]
		# x.remove(10)
		# x.index(10)

- FileNotFoundError. 주로 외부 파일을 처리할 때 발생

		  # f = open('test.txt', 'r') # 해당 경로에 test.txt 파일이 없어서 예외발생

- TypeError

		x = [1,2]
		y = (1,2)
		z = 'test'
		
		print(x + y) # 예외
		print(x + z) # 예외
		print(x + list(z)) # 형변환해서 연산처리.

  

### 런타임 에러 발생 실습
항상 예외가 발생하지 않을 것으로 가정하고 먼저 코딩한다.
그 후 런타임 예외 발생 시 예외 처리 코딩 권장(EAFP 코딩 스타일)

  

### Try-except-else-finally
**예외 처리 기본**
try : 에러가 발생할 가능성이 있는 코드 실행
except : 에러명1
except : 에러명2
else : 에러가 발생하지 않았을 경우 실행
finally : 항상 실행

- 예제1
	
		name = ['Han', 'Lee', 'Shin']
	
		try:
			z = 'Shin' # ex) 'Cho'라면 예외 발생
			x = name.index(z)
			print('{} Found it! in name'.format(z, x+1))
		except ValueError:
			print('Not found it! - Occurred ValueError!')
		else:
			print('OK! else!')

- 예제 2

		try:
			z = 'Jin'
			x = name.index(z)
			print('{} Found it! in name'.format(z, x+1))
		except: # 어떤 예외가 발생지 모를 땐 안써도 된다. 모든 에러가 필터링 된다.
			print('Not found it! - Occurred Error!')
		else:
			print('OK! else!')

- 예제3

		try:
			z = 'Shin'
			x = name.index(z)
			print('{} Found it! in name'.format(z, x+1))
		except: # 어떤 예외가 발생지 모를 땐 안써도 된다.
			print('Not found it! - Occurred Error!')
		else:
			print('OK! else!')
		finally: # 무조건 적인 수행을 할 땐 써줘야한다.
			print('finally OK!')

- 예제4
예외 처리는 하지 않지만, 무조건 수행되는 코딩 패턴

		try:
			print('Try')
		finally:
			print('Ok Finally!!!')

- 예제5

		try:
			z = 'Shin'
			x = name.index(z)
			print('{} Found it! in name'.format(z, x+1))
			# 에러를 계층적으로 잡는다. 순서가 중요하다. Exception은 모든 에러를 잡기 때문에 맨 위에 있으면 하위 예외처리 안본다.
			# 예측 가능한 에러를 알고 있다면 순서대로 작성하도록 한다. 마지막은 default exception구문으로 작성.
		except ValueError:
			print('Not found it! - ValueError Error!')
		except IndexError:
			print('Not found it! - IndexError Error!')
		except Exception:
			print('Not found it! - Occurred Error!')
		else:
			print('OK! else!')
		finally: # 무조건 적인 수행을 할 땐 써줘야한다.
			print('finally OK!')

- 예제6
예외 발생 : raise
raise 키워드로 예외 직접 발생

		try:
			a = 'Kim'
			if a == 'Lee':
				print('ok 허가!')
			else:
				raise ValueError
		except ValueError:
			print('문제 발생')
		except Exception as e:   # alias로 별칭 줘서 사용 가능
			print(e)
		else:
			print('ok!')