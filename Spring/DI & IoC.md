# 스프링 프레임워크 코어 기능
종속 객체를 생성 조립해주는 도구

# DI
**Dependency Injection. 약결합**  
조립형. 느슨한 결합. 의존 주입. 값 넣어주기. 
**객체간의 결합을 느슨하게 하는 스프링의 핵심 기술, 주입기능**

### 의존 객체를 주입하는 방식
1. Setter를 이용한 의존 주입

       B b = new B();	// Dependency
        A a = new A();
        
        a.setB(b);		// Injection

2.  생성자를 이용한 의존 주입.

		B b = new B();
		A a = new A(b);

### Spring DI 지시서 작성하기
**Spring Bean Configuration**

    <!-- Emp emp = new Emp(); -->
    <bean id = "객체화 할 변수명. emp" class="객체화 할 Class 위치. new Emp();위치.">
	    <!-- console.setEmp(emp); -->
	    <!-- setter는 property를 써서 객체 생성해준다. -->
	    <!-- 객체 이름의 타입이 value면 value에 reference 타입이면 ref에 넣어준다. -->
	    <property name="emp" value="설정하는 emp 객체의 이름." ref="참조타입. 설정하는 emp 객체의 이름." />
    </bean>


#### 생성자를 이용해 의존 주입해서 지시서 작성.

    // name, value로 객체 생성 방식
    <bean id="lee" class="class위치">
    	<constructor-arg name="name" value="이둘리"></constructor-arg>
    	<constructor-arg name="salary" value="3000000"></constructor-arg>
    </bean>
    
    // 인자의 index로 객체 생성 방식
    <bean id="shin" class="class위치">
    	<constructor-arg index="0" value="신짱구"></constructor-arg>
    	<constructor-arg index="1" value="2500000"></constructor-arg>
    </bean>
 
#### Setter를 이용해 의존 객체 주입해서 지시서 작성.

    <bean id="lee" class="class위치">
    	<property name="dept" value="기술" /> 
        // setter가 있을 경우, property를 이용해서 객체를 생성해준다 
    </bean>

## Dependency 객체 생성과 초기화

### 값 형식의 속성에 값 설정하기

    <!-- Emp emp = new Emp(); -->
    <bean id="lee" class="com.test03.Emp>
    <!-- emp.setName(이둘리); 
         emp.setSalary(300000);
    -->
        <property name="name" value="이둘리" />
        <property name="salary" value="3000000">
    </bean>

    // 또는 태그 중첩해서 사용하기.
    <bean id="lee" class="com.test03.Emp">
        <property name="name">
            <value>"이둘리"</value>
        </property>
    </bean>

### 생성자(constructor)를 이용한 속성 값 설정 

    <bean id="shin" class="com.test03.Emp">
        <constructor-arg name="name" value="신짱구">
        <constructor-arg index="1" value="2500000">
    </bean>

    <!-- name, index는 순서만 잘 맞춰져 있다면 생략도 가능하다. 
		<constructor-arg value="짱구"></constructor-arg> 
		<constructor-arg value="2500000"></constructor-arg> -->

### 설정 파일 처리기 추가
접두사 or 태그의 의미 :
    1. 태그가 특정한 처리기에 의해 실행 될 수 있도록한다. 처리 할 수 있는 것을 특정짓기 위해
    2. 태그의 이름을 식별하기 위해
    
    <beans ...
        xmlns:p="http://www.springframework.org/schema/p">

    // 속성 설정 방법
    <!-- p: property(속성명) -->
	<bean id="shin" class="com.test05.Emp" p:name="신짱구" p:salary="2500000" />
	<bean id="shin-zg" class="com.test05.Engineer" p:emp-ref="shin" p:dept="기술팀" />


# IoC Container
IoC 기능을 제공하는 컨테이너.
Bean을 구성하고 담고 있다. 

**Inversion of control** 
역순 제어. 제어 역전(반전) 역순으로 객체를 생성. 
프로그램의 제어 흐름 구조가 뒤바뀐다.

객체가 사용할 객체를 직접 선언하여 사용하는 것이 아니라, 컨테이너로 부터 주입받아 사용하는 것

스프링에서 객체를 생성하고 조립하는 컨테이너로, 컨테이너를 통해 생성된 객체를 빈이라고 부른다.

***생성(Spring IoC container : ApplicationContext.xml)과 사용의 분리***

### Spring IoC 컨테이너 이용하기
**ApplicationContext** DI 지시서 작성한 것을 읽어서 지시서 대로 객체를 만들고 활용. BeanFactory를 상속 받고 있다.

**BeanFactory** Bean의 생성과 설정, 관리를 한다.

**ClassPacthXml**ApplicationContext("xml 파일")
xml파일 지시서를 넘길 때 xml 위치를 application root로 넘길 때 사용. 
*(FileSystemXml: C드라이브 root, XmlWeb: 웹에 둔 url 통해서, AnnotationConfig: 파일로 둔것이 아닌 주석으로 두었다.)*

### 지시서로 만든 객체 가져오기

    public static void main(String[] args) {
    	ApplicationContext factory = new ClassPathXmlApplicationContext("com/test02/applicationContext.xml");	
    	// "lee"라는 이름으로 꺼내게 되면 어떤 타입인지 알수 없어서 형변환해서 꺼내야 한다. 기본 Object 형식으로 꺼내진다.  Casting 필요.	
    	Emp lee = (Emp) factory.getBean("lee");
    	
    	// 자료형으로 꺼내기. 자료형으로 꺼낼 땐 형변환 필요없다. (Emp)타입의 클래스를 써서 Emp에 맞는 타입을 달라는 것. 
    	Emp shin = factory.getBean("shin", Emp.class);
    	
    	System.out.println(lee);
    	System.out.println(shin);
    }