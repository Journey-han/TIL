# 업그레이드 타이핑 게임 제작
# 타이핑 게임 제작 및 최종 완성

import random
from sqlite3.dbapi2 import Cursor
import time

# 사운드 출력 필요 모듈
import winsound
import sqlite3
import datetime

# DB 생성 & Auto Commit
# 본인 DB 경로
conn = sqlite3.connect('c:/Users/USER/Desktop/python_basic/resource/records.db', isolation_level=None)

# Cursor 연결
cursor = conn.cursor()

cursor.execute("CREATE TABLE IF NOT EXISTS records(id INTEGER PRIMARY KEY AUTOINCREMENT, cor_cnt INTEGER, record text, regdate text)")


words = []       # 영어 단어 리스트(1000개 로드)

n = 1           # 게임 시도 횟수 
cor_cnt = 0     # 정답 개수

with open('./resource/word.txt', 'r') as f:
    for c in f:     # strip() : 양쪽 공백 제거
        words.append(c.strip())
# print(words)    # 단어 리스트 확인

# 사용자의 키보드 입력 대기 함수
input("Ready? Press Enter Key!")    # Enter Game Start!

start = time.time()

while n <= 5:
    random.shuffle(words)           # 랜덤 단어 섞기
    q = random.choice(words)        # 랜덤 단어 한개 고르기

    print()

    print("*Question #  {}".format(n))
    print(q)        # 문제 출력

    x = input()     # 타이핑 입력

    print()

    # 정답 체크
    # 문제의 단어와 타이핑한 단어 일치한지 확인
    if str(q).strip() == str(x).strip():    # 입력 확인(공백제거)
        print("Pass!")
        # 정답 소리 재생
        winsound.PlaySound('./sound/good.wav', winsound.SND_FILENAME)
        cor_cnt += 1        # 정답 count plus
    else:
        # 오답 소리 재생
        winsound.PlaySound('./sound/bad.wav', winsound.SND_FILENAME)
        print("Wrong!!")

    n += 1                  # 다음 문제 전환

end = time.time()           # End Time
et = end - start            # 총 게임 시간
et = format(et, ".3f")      # 소수 셋째 자리까지 출력(시간) 

if cor_cnt >= 3:
    print("합격~")
else:
    print("불합격~")

# 기록 DB 삽입
cursor.execute("INSERT INTO records('cor_cnt', 'record', 'regdate') VALUES(?, ?, ?)", (cor_cnt, et, datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')))

# 수행 시간
print("게임 시간 : ", et, "초", " / 정답 개수 : {}".format(cor_cnt))

# 시작 지점
if __name__ == '__main__':
    pass