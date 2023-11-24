import alphabets as alpha

letter = input("Enter a character: ")

if alpha.alphabet(letter):
    print(f"{letter} is an alphabet.")
else:
    print(f"{letter} is not an alphabet.")
