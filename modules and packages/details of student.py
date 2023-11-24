
import student
import mark

name=input("enter the name:")
roll_no=int(input("enter the roll no:"))
age=int(input("enter the age:"))


marks = [85, 90, 75, 92, 88]
student.student_details(name, roll_no, age)


total, average = mark.total_average(marks)
print(f"Total Marks: {total}")
print(f"Average Marks: {average}")
