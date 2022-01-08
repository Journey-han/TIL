# Validator
- 클래스는 implements Validator를 상속받는다.

## supports(Class<?> clazz)
- 객체 검증할 때 이 객체의 클래스가 이 Validator가 검증 할 수 있는 클래스 인지 판단하는 메서드
- validator 사용 가능 여부를 확인한다.

## validate(Object target, Errors errors)
- 실제 검증 로직이 이루어지는 메서드
- 에러 정보 송출하는 로직.
	- fileNPE: 에러코드, "please select a file": 메세지.

```java
if (file.getMpfile().getSize() == 0) {
	// mpfile(field)에 대한 errorCode return. 해당 errorCode가 없으면 default message 전달.
	errors.rejectValue("mpfile", "fileNPE", "please select a file");
}
```