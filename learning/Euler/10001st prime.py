# 10001st prime
# By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
# What is the 10 001st prime number?
num = int(input("Enter a number: "))
for i in range(2,num):
    if (num % i==0):
        print("number is not prime")

else:
        print(num, "number is prime", )



