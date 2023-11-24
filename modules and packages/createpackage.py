import operations as op
import alphabets as alpha

def mod():
    print("For character checking, enter 1\nFor mathematical operations, enter 2")
    choice = int(input("Enter your choice:"))
    
    if choice == 1:
        letter = input("Enter a character: ")
        if alpha.alphabet(letter):
            print(f"{letter} is an alphabet.")
        else:
            print(f"{letter} is not an alphabet.")
    elif choice == 2:
        a = float(input("Enter the first number: "))
        b = float(input("Enter the second number: "))
        result = op.operations(a, b)
        print(result)
    else:
        print("Invalid choice. Please enter 1 or 2 to choose between character checking and operations.")
    
    another_choice = input("Do you want to make another choice? (yes/no): ")
    if another_choice.lower() == "yes":
        mod()
    else:
        print("Goodbye!")


mod()

