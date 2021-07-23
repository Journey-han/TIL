
# 파일 입출력
 읽기 모드 : r 
 쓰기 모드(기존 파일 삭제. 덮어쓰기) : w
 추가모드(파일 생성 또는 추가. 있으면 추가 없으면 생성) : a

 .. : 상대경로, . : 절대 경로
기타 : https://docs.python.org/3.9/library/functions.html#open

  

## 파일 Read, Write

### Open 함수
	# 예제1
	from os import linesep, write
	
	f = open('./resource/review.txt', 'r')
	# 파일을 읽어들여서 f에 담기. f를 content에 담아서 read()함수 사용해서 호출.
	content = f.read()
	print(content)
	# 변수 f안에 있는 모든 속성값 확인. 변수 안에 할당된 인스턴스 확인 가능
	print(dir(f))
	# 반드시 close 리소스 반환. 한번 사용한 자원(open)은 닫아줘야 한다.
	f.close()

	# close()로 닫았기 때문에 다시 open() 사용해서 연다.

### 파일 모드의 이해
- 파일 읽기 실습

		# 예제2
		# with문이 끝나면 자동으로 close 리소스 반환. 자동으로 close 해준다.
		with open('./resource/review.txt', 'r') as f:
			c = f.read()
			print(c)
			# 한글자 씩 리스트 변환
			print(list(c))
			# 이터레이터 변환
			print(iter(c))
  
		# 예제3
		with open('./resource/review.txt', 'r') as f:
			for c in f:
			# strip() : 양쪽 공백 제거. 줄바꿈도 없어짐.
			print(c.strip())
		
		# 예제4
		with open('./resource/review.txt', 'r') as f:
			content = f.read()
			print(">", content)
			# 두번째 읽은것은 출력하지 않는다.
			content = f.read() # 내용 없음
			print(">", content)
			# 한번 읽어 온 것은 끝. 커서가 문서의 끝으로 갔기 때문에 더이상 하위의 데이터가 없다.

		# 예제5
		with open('./resource/review.txt', 'r') as f:
			# 한 줄씩 읽어 온다,
			line = f.readline()
			# print(line)
			# 다음 줄 읽어올 준비를 하고 있다.

			# 반복문을 통해서 라인별로 읽어 올 수 있다.
			while line:
				print(line, end=' ### ')
				line = f.readline()
		
		# 예제6
		with open('./resource/review.txt', 'r') as f:
			# \n(줄바꿈) 기준으로 데이터를 리스트형태로 가지고 있다.
			#r readlines()는 리스트를 반환.
			contents = f.readlines()
			print(contents)

			for c in contents:
				print(c, end=' *** ')

		# 예제7
		score = []
		with open('./resource/score.txt', 'r') as f:
			for line in f:
				# 파일로 불러오는것은 문자열로 오기 때문에 데이터 그대로 숫자로 사용하고 싶을 땐 형변환해서 사용한다.
				score.append(int(line))
			print(score)

	  # 6자리고 소숫점은 3자리까지 출력
		print('Avarage : {:6.3}'.format(sum(score)/len(score)))

  

- 파일 쓰기 실습

		# 예제 1
		with open('./resource/text1.txt', 'w') as f:
			f.write('ping-pong\n')

		# 예제 2
		with open('./resource/text1.txt', 'a') as f:
			f.write('thank you!\n')
			
		# 예제3
		from random import randint

		with open('./resource/text2.txt', 'a') as f:
			# 6개 랜덤 숫자 생성하기
			for cnt in range(6):
				# 문자열(random int 랜덤 숫자 1부터 50 이하)
				f.write(str(randint(1, 50)))
				f.write('\n')
				
		# 예제4
		# writelines : 리스트 -> 파일로 저장
		with open('./resource/text3.txt', 'a') as f:
			list = ['Kim\n','Park\n', 'Cho\n']
			f.writelines(list)

		# 예제5
		with open('./resource/text4.txt', 'w') as f:
			# print()문으로 생성. 콘솔로 찍히지 않고 파일로 출력된다.
			print('Test Contests1!', file=f)
			print('Test Contests2!', file=f)