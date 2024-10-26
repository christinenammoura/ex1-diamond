def diamond(rows):  

    for i in range(rows): # O (rows) => O (n)
        # i = n-1 => big O 
        spaces = ' ' * (rows - i - 1) # O(n-1) 
        stars = '*' * (2 * i + 1) # O (2(n-1)+1)
        # ==> O(2(n-1)) ==> O(n)
        print(spaces + stars) 
        #==> O(n^2)




    i = rows - 2 # O  (1)

    while i >= 0: # O (i) => O (n)
        spaces = ' ' * (rows - i - 1)  
        stars = '*' * (2 * i + 1) 
        print(spaces + stars) 
        i -= 1  

        #==> O(n^2)


rows = int(input("Enter the number of rows: "))  # O (1)

diamond(rows) 

# ===> O (n^2) + O (n^2) + O(1) = O(n^2)
