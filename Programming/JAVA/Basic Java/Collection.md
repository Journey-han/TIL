# Collection
- Java Collections Framework(JCF). 자바에서 Collection이라는 데이터의 집합. 그룹을 의미
- 데이터, 자료구조인 컬렉션과 이를 구현하는 클래슬 정의하는 인터페이스를 제공한다.
- Java Collection Framework 상속 구조
[jcf 상속구조](/resources/image/jcf%20상속구조.png)
- Collection 인터페이스는 List, Set, Queue로 크게 3가지 상위 인터페이스로 분류
    - Map의 경우 Collection 인터페이스를 상속받지 않지만 Collection으로 분류된다.

## Set 인터페이스
- 순서를 유지하지 않는 데이터의 집합. 데이터의 중복을 허용하지 않는다.

```java
public static void main(String[] args) {
	Set<String> set = new HashSet<String>();
		
	set.add("1");
	set.add("3");
	set.add("5");
	set.add("2");
	//set.add(null);		// 저장은 가능하나, 사용하면 NullPointerException 발생!!
	set.add("3");			// 중복된 값은 들어가지 않는다.중복 안됨.
		
	for (String s : set) {
		System.out.print(s + " ");
	}
	System.out.println();		// null값 저장은 가능
		
	findElement(set, "3");
	deleteElement(set, "3");
}
	
public static void deleteElement(Set<String>set, String delete) {
	for (String s : set) {
		if (s.equals(delete)) {			
			set.remove(s);		//원래는 if (s.remone(s)) { ... } 이다. // 지웠다면! // 굳이 이거까진 않음. 성공할 것을 전제로 두고
			System.out.println(delete + " 지웠다!!");
			// ConcurrentModificationException 중간에서 값이 사라져서 set이 바뀌었다. 그래서 for문에서 다음꺼 못한다고 예외 발생!
			break;
			// 그럼 일하지 말고 끝내. 예외 발생하기 전에 for문 끝났다.
				
		}
	}
	System.out.println(set);	
}
	
public static void findElement(Set<String> set, String find) {
	/*
	for (int i = 0; i < set.size(); i++) {
		set.get(i);
	}
	*/
	for (String s : set) {			// null값은 출력시 오류 발생.
		if (s.equals(find)) {
			System.out.println(find + " 찾았다!!");
		}
	}
}
```

### HashSet
- 가장빠른 임의 접근 속도
- 순서를 예측할 수 없음

```java
public static void main(String[] args) {
	// Score 객체 3개 만들자.
	// 이름은 이둘리, 김또치, 신짱구. 점수는 알아서
	Score s1 = new Score();
	s1.setName("이둘리");
	s1.setKor(100);
	s1.setEng(56);
	s1.setMath(70);
		
	Score s2 = new Score("김또치", 57, 81, 100);	// 생성자 이름은 같은데 파라미터만 다르다. 오버로딩.
    Score s3 = new Score("신짱구", 79, 100, 50);
		
		
	// Score 객체를 관리할 수 있는 Set 객체를 만들자.
	// Set type에 HashSet으로 만들자.
	Set<Score> set = new HashSet<Score>();
	set.add(s1);
	set.add(s2);
	set.add(s3);
	set.add(new Score("남코난", 100, 100, 100));
	
	// printCollection(set);
	transElement(set, "이둘리", 10);
}
	
public static void transElement(Set<Score> set, String target, int kor) {
	// set에서 "이둘리"을 찾아서, 국어점수를 10점으로 바꾸고, 전체 출력
	// 찾을 때 iterator를 사용하자!
		
	Iterator<Score> itr = set.iterator(); 
	while (itr.hasNext()) {
		/*
		if (itr.next().getName() == target) {
			itr.next().setKor(kor);
		}		// next() 커서 겹친다. NoSuchElementException 오류 발생
		*/ 
		Score temp = itr.next();
		if (temp.getName().equals(target)) {	// getName == target은 위험하다. 안될 때도 있다. 문자열비교는 가급적이면 equals로 비교하는걸로
			temp.setKor(kor);
		}
	}
	// 출력
	Iterator<Score> ir = set.iterator();
	while (ir.hasNext()) {		
		System.out.println(ir.next());
	}
}

public static void printCollection(Set<Score> set) {
	// 1.
	for (Score sc : set) {
		System.out.println(sc);
	}
		
	// 2.
	Object[] oArr =  set.toArray();		// object로 감싸서 리턴해줄꺼다.
	for (int i = 0; i < oArr.length; i++) {
		// System.out.println(oArr[i]);	
		// System.out.println(oArr[i].getName()); // oArr[i]는 object 타입니다. 부모타입. 부모타입에는 getName이 없다.
		System.out.println(((Score)oArr[i]).getName() +  " \t " + String.format("%.2f", ((Score)oArr[i]).getAvg())); // (Score)란 자식타입으로 형변환 해준 다음 리턴한다.
		//System.out.printf("%s \t %.2f\n", ((Score)oArr[i]).getName(),((Score)oArr[i]).getAvg());
	}
	
	// 3. Iterator : 컬렉션 framework안에 있는 저장 요소(값)를 읽어오는 표준화된 방법
	Iterator<Score> iterator = set.iterator(); // set이라는 객체에 Score를 넣어놨다. iterator 객체.
	while (iterator.hasNext()) {
		System.out.println(iterator.next());
	}	
}
```

### TreeSet
- 정렬방법을 지정할 수 있음



## List 인터페이스
- 순서가 있는 데이터의 집합. 데이터의 중복을 허용한다.

```java
List<String> list = new ArrayList<String>();
		
for (int i = 10; i > 0; i--) {
	list.add(i+"");	// 문자열(String)이기 때문에 사전식 정렬이 된다. 1, 10, 2
}
System.out.println(list);
// mysort가 기준이 되어 list를 정렬해준다.
Collections.sort(list, new MySort());
System.out.println(list);
```

```java
public static void main(String[] args) {
    List<String> list = new ArrayList<String>();

	list.add("고길동");
	list.add("이둘리");
	list.add("김또치");
	list.add("도우너");

	prn(list);
	transElement(list);
}

private static void transElement(List<String> list) {
	// 1. "고길동"의 인덱스를 찾아서 해당 인덱스의 값을 "김길동"으로 바꾸자
	list.set(list.indexOf("고길동"), "김길동");
	prn(list);

	// 2. "~너"으로 끝나는 객체를 찾아서, 만일 있으면 "~자"로 바꾸자.
	for (int i = 0; i < list.size(); i++) {
		if (list.get(i).endsWith("너")) {
			list.set(i, list.get(i).replace("너", "자"));
		}
	}
	prn(list);

    // 3. 끌 글자가 "치"인 이름을 찾아서 삭제하자.
	for (int i = 0; i <  list.size(); i++) {
		if (list.get(i).endsWith("치")) {
			list.remove(i);
		}
	}
	prn(list);
}

private static void prn(List<String> list) {
	for (String s : list) {
		System.out.print(s + " ");
	}
	System.out.println();
}
```

### LinkedList
- 양방향 포인터 구조로 데이터의 삽입, 삭제가 빈번할 경우 데이터의 위치정보만 수정하면 되기에 유용
- 스택, 큐, 양방향 큐 등을 만들기 위한 용도로 쓰임

### Vector
- 과거에 대용량 처리를 위해 사용했으며, 내부에서 자동으로 동기화처리가 일어나 비교적 성능이 좋지 않고 무거워 잘 쓰이지 않음
- 기본 식 : `vector(iCa, cpIn)`
	- iCa만큼 용량(capacity) 만든다. iCa를 넘어가면 cpIn만큼 용량이 증가한다.

```java
Vector<Integer> v = new Vector<Integer>(10, 5);
// 10칸 짜리 용량을 미리 만들어놓음. 사이즈는 현재 들어가 있는 크기.
System.out.println(v.size() + " : " + v.capacity());
		
for(int i = 0; i < 9; i++) {
	v.add(i);
	System.out.println(v + " -> " + v.size() + " : " + v.capacity());
	// 배열은 고정이기 때문에 바뀌지 않지만 크기 커질수록 메모리 내부적으로 2칸 3칸 다시 만든다.
}
		
v.add(9);
System.out.println(v + " -> " + v.size() + " : " + v.capacity());

v.add(10);
System.out.println(v + " -> " + v.size() + " : " + v.capacity());
```

```java
public static void main(String[] args) {

	Vector<String> v = new Vector<String>();

	v.add("고길동");
	v.add("이둘리");
	v.add("김또치");
	v.add("도우너");
		
	prn(v);
	transElement(v);
}

public static void prn(Vector<String> vector) {

	// 향상된 for문(foreach)
	for (String s: vector) {
    	System.out.print(s + " ");
	}
	System.out.println();
}

public static void transElement(Vector<String> vector) {
	// 1. "고길동"의 인덱스를 찾아서,
	System.out.println(vector.indexOf("고길동"));
	// 해당 인덱스의 값을 고길순으로 바꾸자.
	vector.set(vector.indexOf("고길동"), "고길순");
	prn(vector);

	// 2. "~너"으로 끝나는 객체를 찾아서, 만일 있으면 "너" -> "자"로 바꾸자.
	for (int i = 0; i < vector.size(); i++) {
		if(vector.get(i).endsWith("너")) {
			vector.set(i, vector.get(i).replace("너", "자"));
		}
	}
	prn(vector);

	// 3. 마지막 글짜가 "치"인 이름을 찾아서, 만일 있으면 삭제하자.
	// vector에 있는거 하나씩 꺼내온다.
	/*
	for (String s : vector) {
		if (s.endsWith("치")) {
    		vector.remove(s);
		}
	}
	*/
	for (int i= 0; i< vector.size(); i++) {
		if (vector.get(i).endsWith("치")) {
			vector.remove(vector.get(i));
		}
	}
	prn(vector);
	}
```

### ArrayList
- 단방향 포인터 구조로 각 데이터에 대한 인덱스를 가지고 있어 조회 기능에 성능이 뛰어남

## Map 인터페이스
- 키(Key), 값(Value)의 쌍으로 이루어진 데이터으 집합.
- 순서는 유지되지 않음. 키(Key)의 중복을 허용하지 않음. 값(Value)의 중복은 허용한다.

### Hashtable
- HashMap보다는 느리지만 동기화 지원
- null불가

### HashMap
- 중복과 순서가 허용되지 않으며 null값이 올 수 있다.

```java
public static void main(String[] args) {
	Map<Integer, String> map = new HashMap<Integer, String>();
	
	for (int i = 111; i < 116; i++) {
		// map.put(k. v)
		map.put(i, i+"abc");
	}
	System.out.println(map);
	System.out.println(map.get(111));	// key를 통해서 value에 접근. 111abc
	map.put(111,  "115abc");	// 중복 되려면 이 부분에 115abc의 값이 나와야 한다. 하지만 중복이 안된다. 
	System.out.println(map);	// key는 중복이 안된다. value는 중복이 가능한다.
	
	prn(map);
}
	
public static void prn(Map<Integer, String> map) {
	Collection<String> values = map.values();	// values만 가져오기
	System.out.println(values);
	
	Set<Integer> keys = map.keySet();			// keys만 가져오기.
	System.out.println(keys);
		
	// Entry : K와 V를 같이 관리	//Key와 Value에 들어갈 수 있는건 모든 참조타입.
	Set<Map.Entry<Integer, String>> entrySet = map.entrySet();
	// Entry<K, V>라는 객체들을 Set으로 관리하겠다.
	// Map은 k를 통해서 v를 가지고 올 수 있음.(map.get(k) -> value)
	// Entry는 k와 v를 각각 가지고 올 수 있음.(entry.getKey(), entry.getValue())
		
	for (Entry<Integer, String> entry : entrySet) {	// entry 객체엔 key따로 vlaue따로.
		System.out.printf("%d : %s\n", entry.getKey(), entry.getValue());
	}
}
```

```java
public static void main(String[] args) {
	Score sc01 = new Score("이둘리", 100, 89, 57);
	Score sc02 = new Score("신짱구", 89, 100, 65);
	Score sc03 = new Score("남코난", 66, 49, 100);
	
	Map<Integer, Score>map = new HashMap<Integer, Score>();
	map.put(1, sc01);
	map.put(3, sc03);
	map.put(2, sc02);
		
	// System.out.println(map);
		
	prn(map);

}
	
public static void prn(Map<Integer, Score> map) {
	// 이름이 "신짱구" 인 value를 찾아, 다음과 같이 출력하자.
	// 1: 신짱구 (82)
	Set<Entry<Integer, Score>> entrySet = map.entrySet();
	
	/*
	for (Entry<Integer, Score> entry : entrySet) {
		if (entry.getValue().getName().equals("신짱구")) {
			System.out.println(entry.getKey() + ": " + entry.getValue().getName() + " (" + entry.getValue().getAvg() + ")");
		}
	}
	*/
		
	Iterator<Entry<Integer, Score>> iterator = entrySet.iterator();
	
	while (iterator.hasNext()) {
		Entry<Integer, Score> temp = iterator.next();
			
		if(temp.getValue().getName().equals("신짱구")) {
			System.out.println(temp.getKey() + ": " + temp.getValue().getName() + " (" + temp.getValue().getAvg() + ")");
		}
	}
}
```

### TreeMap
- 정렬된 순서대로 키(Key)와 값(Value)을 저장하여 검색이 빠름

## Compare

```java
class MySort implements Comparator<String> {
	/*
	 * 1 이면 앞의 인자가 더 큰 값
	 * 0 이면 같은 값
	 * -1 이면 뒤의 인자가 더 큰값
	 */

	@Override
	public int compare(String o1, String o2) {
		
		// 값을 각각 따로 가져와야 한다.
		int tmp1 = Integer.parseInt(o1);
		int tmp2 = Integer.parseInt(o2);
		
		if (tmp1 > tmp2) {
			return 1;
		} else if (tmp1 < tmp2) {
			return -1;
		}
		return 0;
	}
}
```

## Generic
- 개발자가 의도한 타입만 저장할 수 있도록 한다. 타입 강제
- `Emp<T>` < >꺽새 사이에 T를 넣었기 때문에 T가 타입이다.

```java
public class Emp<T> {
	
	private T empno;
	private String ename;
	
    // 기본 생성자
	public Emp() { }

    // 파라미터 2개 가진 생성자
	public Emp(T empno, String ename) {
		this.empno = empno;
		this.ename = ename;
	}
	
    // getter & setter
	public T getEmpno() {
		return empno;
	}
	public void setEmpno(T empno) {
		this.empno = empno;
	}
    ...
}
```