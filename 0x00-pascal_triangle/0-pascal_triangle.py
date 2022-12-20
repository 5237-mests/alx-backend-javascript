def pascal_triangle(n):
    bigarray = []
    tmp = [1]
    if (n == 0):
        return bigarray
    if (n == 1):
        bigarray.append([1])
    while n - 1 > 0:
        ntmp = []
        ntmp.insert(0, 1)
        ntmp.insert(len(tmp), 1)
        for i in range(1, len(tmp)):
            ntmp.insert(i, tmp[i-1] + tmp[i])
        bigarray.append(ntmp)
        tmp = ntmp.copy()
        if (n - 1 == 1):
            bigarray.insert(0, [1])
        n -= 1
    return bigarray
