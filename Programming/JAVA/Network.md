# Network
1. 다른 장치로 데이터를 이동시킬 수 있는 컴퓨터들과 주변 장치들의 집합이다.
2. 네트워크의 연결된 모든 장치들을 노드라고 한다.
3. 다른 노드에게 하나 이상의 서비스를 해주는 노드를 호스트라 부른다
4. 하나의 컴퓨터에서 다른 컴퓨터로 데이터를 이동시킬 때 복잡한 계층을 통해 전송되는데, 이런 복잡한 레이어의 대표적인 모델이 OSI 계층 모델이다.
    - OSI 계층 모델은 모두 7계층으로 이루어져 있다. 
5. 데이터 통신을 이해하는데 OSI 계층 모델은 상당한 역할을 하지만, 인터넷 기반의 표준 모델로 사용하는 TCP/IP 계층 모델을 주로 사용하고 있다.
    - 자바에서 이야기하는 네트워크 프로그래밍은 TCP/IP모델을 사용하고 있습니다

### Client

```java
DatagramSocket ds = new DatagramSocket();
System.out.println("클라이언트 입니다.");
		
byte[] buff = "연습입니다.".getBytes();		
DatagramPacket sendP = new DatagramPacket(buff, buff.length, InetAddress.getByName("localhost"), 8888);
	
ds.send(sendP);
		
ds.close();
ds.disconnect();
```

### Server

```java
DatagramSocket ds = new DatagramSocket(8888);
System.out.println("서버입니다.");

byte[] buff = new byte[1024];
DatagramPacket receiveP = new DatagramPacket(buff, buff.length);

ds.receive(receiveP);

System.out.println(new String(receiveP.getData()));

ds.close();
ds.disconnect();
```

### Runnable
- Client

```java
public class MyClient implements Runnable{
	
	@Override
	public void run() {
		try {
			
			Socket clientSocket;
			PrintWriter out = null;
			BufferedReader in = null;
			BufferedReader stdin = null;
			
			System.out.println("server에 접속합니다....");
			clientSocket = new Socket("localhost", 9999);
			
			out = new PrintWriter(clientSocket.getOutputStream(), true);
			in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
			stdin = new BufferedReader(new InputStreamReader(System.in));
			
			String inputLine;
			while( (inputLine = stdin.readLine()) != null) {
				out.println(inputLine);
				System.out.println("server: " + in.readLine());
			}
			
			stdin.close();
			in.close();
			out.close();
			clientSocket.close();
		} catch(IOException e) {
		}	
	}
	
	public static void main(String[] args) {
		Thread client = new Thread(new MyClient());
		client.start();
	}
}
```
- Server

```java
public static void main(String[] args) {
		
	ServerSocket serverSocket = null;
	Socket serviceSocket;
	PrintWriter out = null;
	BufferedReader in = null;
	
	try {
		serverSocket = new ServerSocket(9999);
	} catch (IOException e) {
		e.printStackTrace();
	}
		
	while(true) {
		System.out.println("Client를 기다립니다....");
		
		try {
			serviceSocket = serverSocket.accept();
			System.out.println("client가 접속했습니다!");
			
			in = new BufferedReader(new InputStreamReader(serviceSocket.getInputStream()));
			
			out = new PrintWriter(serviceSocket.getOutputStream(), true);
			
			String inputLine;
			while( (inputLine = in.readLine()) != null) {
				System.out.println("client : " + inputLine);
				out.println(inputLine);
			}
				
			out.close();
			in.close();
			serviceSocket.close();
			serverSocket.close();
		
		} catch (IOException e) {
		}
	}
}
```