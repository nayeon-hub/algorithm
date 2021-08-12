import math
n = int(input())
m = 2 * n
cnt = 0
for i in range(n,m+1):
    for j in range(2,int(math.sqrt(i))+1):
        