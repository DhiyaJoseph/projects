import addition, subtraction, multiplication, division


num1 = int(input("enter the first number:"))
num2 = int(input("enter the second number:"))

result_add = addition.add(num1, num2)
result_sub = subtraction.subtract(num1, num2)
result_mul = multiplication.multiply(num1, num2)
result_div = division.divide(num1, num2)

print(f"Addition: {result_add}")
print(f"Subtraction: {result_sub}")
print(f"Multiplication: {result_mul}")
print(f"Division: {result_div}")
