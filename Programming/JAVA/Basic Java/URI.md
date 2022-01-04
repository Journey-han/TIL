# URI
- URI = URL + URN
    - URL (Uniform Resource Locator)		: 주소 (위치)
    - URN (Uniform Resource Name)			: 대상 (이름)
    - URI (Uniform resource Identifier)	    : 식별자

- URISyntaxException

```java
public static void main(String[] args) throws URISyntaxException {
	URI u = new URI("http://localhost:8787/Java19_URI_Web/res.jsp?name=%ED%95%9C%EC%A7%80%EC%97%B0&addr=%EC%84%9C%EC%9A%B8");
		
	System.out.println(u.getScheme());
	System.out.println(u.getHost());
	System.out.println(u.getPort());
	System.out.println(u.getPath());
	System.out.println(u.getQuery());		
}
```

- IOException

```java
public static void main(String[] args) throws IOException {
		
	URL url = new URL("https://iei.or.kr/resources/images/main/20201210_popup_new.jpg");
		
	URLConnection urlConnection = url.openConnection();
	urlConnection.connect();
		
	byte[] b = new byte[1];
	DataInputStream di = new DataInputStream(urlConnection.getInputStream());
	FileOutputStream fo = new FileOutputStream("a.jpg");
		
	while(di.read(b, 0, 1) != -1) {
		fo.write(b, 0, 1);
	}
		
	fo.close();
	di.close();
}
```

- MalformedURLException

```java
public static void main(String[] args) throws MalformedURLException, IOException {
		
	URLConnection urlc = new URL("https://www.naver.com").openConnection();
	
	BufferedInputStream buff = new BufferedInputStream(urlc.getInputStream());
		
	int byteRead;
	while( (byteRead = buff.read()) != -1) {
		System.out.print((char)byteRead);
	}	

	buff.close();
}
```

- UnknownHostException

```java
public static void main(String[] args) throws UnknownHostException {
	InetAddress addr = InetAddress.getLocalHost();
				
	System.out.println(addr);
	System.out.println("localhost: " + addr.getHostAddress());
	System.out.println("hostname: " + addr.getHostName());
		
	InetAddress[] naver = InetAddress.getAllByName("www.naver.com");
	for (int i = 0; i < naver.length; i++) {
		System.out.println(naver[i].getHostAddress());
	}
```