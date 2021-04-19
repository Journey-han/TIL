# 스프링 프레임워크 코어 기능
종속 객체를 생성 조립해주는 도구

# DI
**Dependency Injection**  
조립형. 느슨한 결합. 의존 주입. 값 넣어주기.  
**객체간의 결합을 느슨하게 하는 스프링의 핵심 기술, 주입기능**  

### 의존 객체를 주입하는 방식
Construction Injection / Setter Injection / Field Injection  
  
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

## 컬렉션 생성과 목록 DI
### setArray(String[] arr) 호출
Array배열 태그 안에 자식 요소를 넣을 수 있다.  
An array can contain multiple inner bean, fef, collection or value elements.

    public void setArray(String[] arr) {
        for (String s : arr) {
            System.out.println(s);
        }
    }

    <property name="array">
        <array>
            <value>이둘리</value>
            <value>신짱구</value>
            <value>김또치</value>
        </array>
    </property>

### setList(List<String> list) 호출

    <property name="list">
        <list>
            <value>봄</value>
            <value>여름</value>
            <value>가을</value>
            <value>겨울</value>
        </list>
    </property>


### setSet(Set<String> set) 호출
Set은 중복을 허용하지 않고, 순서에 상관하지 않는다. 출력결과 1, 2, 3 만 출력된다.

    <property name="set">
        <set>
            <value>1</value>
            <value>1</value>
            <value>2</value>
            <value>2</value>
            <value>3</value>
        <set>
    </property>

### setMap(Map<Integer, String> map) 호출
<entry>속성 안에 <key>와 <value>를 따로 지정해줘야하는 번거로움(심지어 <key><value></value></key> 형태...)이 많기 때문에 key, value를 한 줄에 쓸 수 있는 코드로 쓰도록 한다.

    <property name="set">
        <map>
            <entry>
                <key>
                    <value>1</value>
                <key>
                <value>봄</value>
            </entry>
            <entry>
                <key>
                    <value>2</value>
                </key>
                <value>여름</value>
            </entry>
            <!-- 위의 코드가 너무 보기 싫다. -->

            <entry key="3" value="가을"></entry>
            <entry key="4" value="겨울"></entry>
        </map>
    </property>

### inner bean 만들기.

    <property name="score">
        <list>
            <bean class="com.test01.Score>
                <property name="name" value="신짱구" />
                <property name="kor" value="100" />
                <property name="eng" value="100" />
                <property name="math" value="100" />
            </bean>
            <!--  아래 이둘리의 객체 땡겨와서 호출 할 수 있다. -->
            <ref bean="lee">
        </list>
    </property>

    <bean id="lee" class="com.test01.Score">
        <constructor-arg value="이둘리" />
        <constructor-arg value="100" />
        <constructor-arg value="100" />
        <constructor-arg value="100" />
    </bean>

## 정리
0. 기본 생성자  
    <constructor-arg> 태그를 쓰지 않았을 때 기본 생성자를 호출한다.  
  
1. param 1개짜리 생성자  
객체를 값으로 쓰려면 ref로, value는 "문자열"이 값으로 바로 저장 될 것이다.  
    <constructor-arg name="myclass" ref="myclass" />  
name 태그 생략 가능. 인덱스 순서대로 처리 될 것이다.  
  
2. SetXxx 호출  
    <property name="xxx" ref="참조타입 객체">  
  
3. setDate 호출
    <bean id="today" class="java.util.Date"></bean>
    <!-- Date today = new Date(); -->

    <bean id="end" class="java.util.Date">
        <constructor-arg name="year" value="121" />
        <constructor-arg name="month" value="6" />
        <constructor-arg name="date" value="14" />
    </bean>

    <!-- 위의 id가 today인 객체 가지고 호출하기. -->
    <property name="date" ref="today" />
    <!-- end라는 객체 호출하기 -->
    <property name="today" ref="end" />  

4. setNumber 호출
    <property name="number">
        <!-- int로 묵시적 형변환 됐다. -->
        <value type="short">
        100
        </value>
    </property>
  
5. Collection
Array, List, Set, Map  
  
6. inner bean
  
<p>  

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

