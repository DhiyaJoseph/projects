import math

def square(num):
    return math.pow(num,2)

def power(num,power):
    return math.pow(num,power)

number=int(input("Enter a number:"))
powe=int(input("Enter a power number:"))

print(f"The square of number is:{square(number)}")
print(f"The power of number is:{power(number,powe)}")
