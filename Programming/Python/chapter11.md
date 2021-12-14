
# 파이썬 외부 파일 처리
 ## Excel, CSV 처리
### CSV 읽기
- CSV : MIME - text.csv
- csv 기본 구분자 ,(콤마) `import csv`

- 예제1

```python
with open('./resource/sample1.csv', 'r') as f:
	reader = csv.reader(f)
	# next(reader) Header 스킵. 1열 스킵

	# 확인
	print(reader)
	print(type(reader))
	print(dir(reader))
	# 출력 결과에 __iter__가 있으면 반복문에서 사용할 수 있다.

	for c in reader:
		print(c)
```

- 예제2

```python
with open('./resource/sample2.csv', 'r') as f:
	reader = csv.reader(f, delimiter='|')

	# 확인
	print(reader)
	print(type(reader))
	print(dir(reader))
	# 출력 결과에 __iter__가 있으면 반복문에서 사용할 수 있다.

	for c in reader:
		print(c)
```

- 예제3 (Dict 변환)

```python
with open('./resource/sample1.csv', 'r') as f:
	reader = csv.DictReader(f)

		for c in reader:
		for k, v in c.items():
			print(k, v)
```

### CSV 쓰기
- 예제4

```python
w = [[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15],[16,17,18]]

with open('./resource/sample3.csv', 'w', newline='') as f:
	wt = csv.writer(f)
			
	for v in w:
		wt.writerow(v)
		# 한줄한줄 검수해서 쓸 때는 writerow()
```

- 예제5

```python
with open('./resource/sample4.csv', 'w', newline='') as f:
	wt = csv.writer(f)
	wt.writerows(w)
	# 이미 검증이 끝나서 다 쓰면 된다 하면 writerows()
```
  

### XSL, XLSX 읽기


> pandas excel 
	openpyxl, xlsxwriter, xlrd, xlwt, xlutils
	pandas를 주로 사용(openpyxl, xlrd)
	pip install xlrd
	pip install openpyxl
	pip install pandas

```python
	import pandas as pd
		
	# sheetname = '시트명' 또는 숫자, header=숫자, skiprow=숫자
	xlsx = pd.read_excel('./resource/sample.xlsx')

	# 상위 데이터 확인
	print(xlsx.head())
	
	# 데이터 확인
	print(xlsx.tail())

	# 데이터 확인
	print(xlsx.shape) # 행, 열
```

### 다시 쓰기
- 엑셀 or csv 다시 쓰기
`xlsx.to_excel('./resource/result.xlsx', index=False)`
`xlsx.to_csv('./resource/result.xlsx', index=False)`

### 패키지 설치
`pip install 패키지명`