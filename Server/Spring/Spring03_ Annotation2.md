# 객체 생성과 @Autowired

## xml로 객체 생성.

    public void setExam(Exam exam) {
        this.exam = exam;
    }

    // IoC 컨테이너. 객체를 생성하고 조립해주는 과정의 객체를 담는 것.
    // exam 객체 만들고
    <bean id="exam" class="com.test01.Student" />
    // console 객체 만들고
    <bean id="console" class="com.test01.Console">
        // console 객체가 exam 객체를 참조한다.
        <property name="exam" ref="exam">
    </bean>

## @Autowired

    @Autowired
    public void setExam(Exam exam) {
        this.exam = exam;
    }

    <context:annotation-config />
    <bean id="exam" class="com.test01.Student" />
    <bean id="console" class="com.test01.Console">

    </bean>

## @Autowired의 위치
필드
constructor
setter

## Required 옵션
