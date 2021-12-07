### <namespace>
mapper의 namespace 속성은 java의 package 처럼 여러개의 SQL문을 하나로 그룹화 하기 위한 용도로 활용
    
### 태그 속성    
`id` - 각 SQL문을 구분하는 용도, 고유한 값을 가져야한다.    
`resultType` - SELECT문 실행결과를 담는 객체 패키지 이름을 포함한 class or 객체 alias를 지정한다.  MyBatis는 SELECT 결과를 저장하기 위해 resultType에 지정된 Class의 인스턴스를 생성한다. → 그 후 각 Column에 대응하는 setter를 호출한다. → column에 대응하는 setter가 존재하지 않는 경우 해당 column의 값은 객체에 저장되지 않게 된다.    
`resultMap` - SELECT문 실행결과를 담는 객체를 resultMap으로 지정. `<resultMap>`을 별도로 선언해줘야 한다. resultType과 resultMap 중 하나를 결정해서 사용해야 한다.    
`parameterType` - 지정한 객체 property값이 SQL문의 입력 parameter로 지정한다.    
    
### resultMap & `<resultMap>`    
resultType을 사용하는 경우 → setter와 매칭이 되지 않는 경우 각 column마다 alias를 붙여줘야하는 번거로움이 존재    
resultMap 속성을 사용하면 해당 문제를 해결 가능    
`<resultMap>` tag를 사용함으로 각 column과 매칭되는 setter method를 지정할 수 있다.    
    
```java
<resultMap type="project" id="projectResultMap">
	<id column = "PNO", property = "no"/>
	<result column = "PNAME" property = "title" />
	<result column = "CONTENT" property = "content" />
	<result column = "STA_DATE" property = "startDate" javaType="java.sql.Date" />
	<result column = "STATE" property = "state" />
</resultMap>
```
    
### 요소와 속성의 의미    
`<resultMap>.type` - SELECT 결과를 Class 이름 또는 MyBatis 설정 파일에 설정된 alias    
`<resultMap>.id` - resultMap의 id    
`<id>` - 객체 식별자로 사용되는 property    
`<id>.column` - column 명    
`<id>.property` - 객체 property명(setter method 명에서 앞의 set을 빼고 그 다음문자를 소문자로 처리)    
`<result>` - column과 setter method에 대한 연결을 정의    
`<result>.column` - column 명    
`<result>.property` - 객체 property명(setter method 명에서  앞의 set을 빼고 그 다음문자를 소문자로 처리)    
`<result>.javaType` - column값을 특정 java 객체로 변환할 때 사용한다.    

+) 정의한 `<resultMap>`은 `<select>`의 resultMap 속성에 `<resultmap>`의 id를 지정해서 사용할 수 있다.    

### id요소와 MyBatis의 SELECT 결과 캐싱    
id 요소의 설정방법 result와 동일하지만 특별한 의미를 가진다.    
Mybatis는 id를 통해서 한번 생성된 객체를 버리지 않고 재사용한다.`<id>`에서 지정한 property사용.    
    
### parameterType 속성, SQL문의 입력 parameter 처리    
MyBatis에서는 입력 parameter를 `#{property}`의 형식으로 표현    
`#{property}`에 저장되는 값 -> `<select>`,`<insert>`,`<update>`,`<delete>`의 parameterType에 지정된 객체의 property 값    

**JDBC에서는 PreparedStatement 객체를 사용해서 SQL문을 실행할 때 `?`로 파라미터를 표시하고 관련 set 계열의 메서드를 호출하영 파라미터 값을 지정함**    

### 입력 parameter에 값을 할당하는 방법    
DAO에서 SqlSession의 method를 호출할 때 VO를 전달해서 입력 parameter에 값을 할당    
    
### 값을 공급하는 객체가 기본타입(primitive type)인 경우
기본타입을 전달하는 경우 auto-boxing으로 wrapper 객체를 생성해서 전달된다.    
wrapper type은 getter가 존재하지 않기 때문에 property 명도 따로 존재하지 않는다.      
SQL Mapper에서 어떤 이름을 사용하여도 무방.    
`where NO = #{no}`와 `where NO = #{value}`는 모두 문제가 되지 않는다.    
    
### SQL Mapper 파일을 MyBatis 설정파일에 등록    
작성한 SQL Mapper 파일을 정상적으로 사용하기 위해서는 이를 MyBatis가 인식할 수 있도록 SQL Mapper 파일이 위치한 MyBatis 설정파일에 등록해줘야 한다.    
    
```SQL
<!-- SQL Mapper 설정 -->
<mappers>
    <mapper resource="[.xml 경로]">
</mappers>
```

MyBatis 설정파일(Configration 파일)의 `<mappers>` 태그 하위에 `<mapper>` 태그를 사용해서 작성한다.    
