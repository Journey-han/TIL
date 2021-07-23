# 함수

## print
- 가장 기본적인 Output(출력) 함수

    print('Hello Python!')
    print("Hello Python!")
    print("""Hello Python!""")
    print('''Hello Python!''')

- 기본 출력
- Separator, End 옵션 사용

**Separator 옵션 사용**
**sep 함수 안에 있는 값으로 문자열 연결.**

    # 공백 제거
    print('T', 'E', 'S', 'T')
    print('T', 'E', 'S', 'T', sep='')

    # 사이값에 '-'넣어서 출력
    print('2019', '04', '18')
    print('2019', '04', '18', sep='-')

    # xxx@xxx.xxx 이메일 형식으로 출력. 사이값에 '@'넣기
    print('jiyen', 'google.com')
    print('jiyen', 'google.com', sep='@')

**end 옵션 사용**
    
    # 기본적으로 print()함수는 줄바꿈이 가능하나, end 옵션을 사용하면 줄 바꿈이 적용이 안되고 한줄로 출력.
    # 문장 연결, end옵션 사이값에 공백을 줄 수 있음. end 옵션이 없는 마지막 줄에서 줄바꿈이 될 것이다.**

    print('Welcome To', end=' ')
    print('the black parade', end=' ')
    print('piano notes')

- Format 형식 출력

**format 사용[], {}, ()**

    # format() 함수를 사용해서 원하는 글자를 {중괄호} 안에 넣어서 출력 가능. 순서대로.
    print('{} and {}'.format('You', 'Me'))

    # 0번엔 You 1번엔 Me로 메핑해서 출력 가능. 출력 결과 - You and Me and You.
    print("{0} and {1} and {0}".format("You", "Me"))

    # 직관적으로 값 선언.
    print("{a} and {b}".format(a='You', b='Me'))

- Escape Code 사용법
**%s : 문자,   %d : 정수,   %f: 실수**

    # format() 함수 없이 정확하게 코딩할 수 있다.
    print("%s's favorite number is %d and %s." % ('Journey', 3, 5.55))

    # 자릿수 지정.
    # 정수로 5자리까지. 실수로 정수자리는 4자리 소수점 아래는 2자리까지. 6543.123은 소숫점 아래 2자리 까지만 출력 될 것이다.
    print("Test1: %5d, Price: %4.2f" % (776, 6543.123))
    print("Test1: {0: 5d}, Price: {1: 4.2f}".format(776, 6543.123))
    print("Test1: {a: 5d}, Price: {b: 4.2f}".format(a=776, b=6543.123))

### Escape 코드
Escape 코드
\n    : 개행
\t    : 탭
\\    : 문자
\'    : 문자
\"    : 문자
\r    : 캐리지 리턴
\f    : 폼 피드
\a    : 벨 소리
\b    : 백 스페이스
\000  : 널 문자 

## 구성요소
- 인코딩(입력, 출력)

    # import this
    import sys

    # 파이썬 기본 인코딩
    print(sys.stdin.encoding)
    print(sys.stdout.encoding)

    # 출력문
    print("Everything Is Ok!")

- 변수

    # 변수 선언
    # 값을 할당 할 때 선언한다.
    myName = 'Goodboy'

- 조건문

    # 조건문
    # 변수 myName에 담긴 값이 'Goodboy'와 같다면(==) 'ok' 출력해!
    if myName == 'Goodboy':
    print('ok') 
    # indent. 들여쓰기를 안하면 에러가 난다.

    # 반복문
    # 구구단 출력하기
    for i in range(1, 10):
    for j in range(1, 10):
        print('%d * %d = ' % (i,j), i*j)

    # 변수 선언 한글로도 가능하다.(권장X. 쓰지 말것)
    이름 = "캠퍼스커플"
    
    print(이름)

- 함수, 클래스, 인스턴스(객체)

    # 함수 선언 - 한글(권장X. 쓰지 말것)
    def 인사():
        print("안녕하세요. 반갑습니다.")

    인사()

    # 함수 선언
    def greeting():
        print('Hello!')

    greeting()

    # 클래스
    class Cookie:
        pass

# 객체 생성
    cookie = Cookie()

- 정보 출력

    # 정보 출력
    print(id(cookie))
    print(dir(cookie))