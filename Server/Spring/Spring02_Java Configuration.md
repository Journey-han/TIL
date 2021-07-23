# JAVA Configuration
자바 코드에 어노테이션으로 설정을 심어놓고,xml에서 코드 지우기.

## xml 지시서 작성방식 변경

    // Original xml file
    <?xml version="1.0" encoding="UTF-8">
    <bean xmls="http://www.springframework/org/schema/beans"...>
        <context:component-scan base-package="com.test01, com.test02" />
        <bean id="person" class="com.test01.Score">

    </beans>

    // Change to Java file
    // 설정을 위한 자파 파일이라고 명시
    @ComponentScan("com.test01", "com.test02")
    @Configuration
    public class DIConfig {
        
        // 스프링 호출
        @Bean
                    // 동사인 메소드(함수)가 아닌 위의 id=person에서 가져온 것. 컨테이너에 담겨졌을 때 이름으로 부여 된 것.
        public Person person() {
            // 생성된 객체 return
            return new Score();
        }

    }
    