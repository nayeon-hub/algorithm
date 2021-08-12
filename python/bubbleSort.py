def bubble_sort(li):
    unsorted_li_idx = len(li) - 1
    sorted = False

    while not sorted:
        sorted = True
        for i in range(unsorted_li_idx):
            print(i,i+1)
            if li[i] > li[i+1]:
                sorted = False
                li[i], li[i+1] = li[i+1], li[i]
        unsorted_li_idx = unsorted_li_idx -1

li = [65,55,45,35,25,15,10]
bubble_sort(li)
print(li)