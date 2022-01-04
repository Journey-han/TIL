# I/O
- 파일 입출력

```java
// mac: /Users/계정/test_io
File fi = new File("C:/test_io");	// 만들어진 파일 객체
		
if (fi.exists()) {
	System.out.println("exists");
} else {
	System.out.println("make directory");
	fi.mkdirs();
}
		
// f1 안에(밑에) AA라는 folder(directory) 생성
File fiAA = new File(fi,"AA");
fiAA.mkdir();
	
File fiBB = new File("C:\\test_io", "BB");
fiBB.mkdir();
		
// AA 밑에 a.txt 파일 생성
File aTxt = new File(fiAA, "a.txt");
			
try {
	// checked exception. 컴파일시 반드시 예외처리
	aTxt.createNewFile();
} catch (IOException e) {
	e.printStackTrace();
}
```

- 파일과 디렉토리 구분해서 출력하기

```java
// file : swapfile.sys
// dir : Program Files
// ...
// 폴더의 갯수 : 0개
// 파일의 갯수 : 0개
int fileCount = 0;
int dirCount = 0;
	
for (File f : fi.listFiles()) {
	if (f.isDirectory()) {
		System.out.println("dir : " + f.getName());
		dirCount++;
	} else if (f.isFile()) {
		System.out.println("file : " + f.getName());
		fileCount++;
	}
}
System.out.println("file의 갯수 : " + fileCount);
System.out.println("dir 의 갯수 : " + dirCount);
```