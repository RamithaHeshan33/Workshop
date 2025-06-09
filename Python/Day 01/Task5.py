sub1 = input("Enter Subject 1 Marks: ")
sub2 = input("Enter Subject 2 Marks: ")
sub3 = input("Enter Subject 3 Marks: ")

tot = int(sub1) + int(sub2) + int(sub3)
avg = tot / 3

if avg > 90:
    grade = "A"
elif avg > 80 and avg <= 90:
    grade = "B"
elif avg > 60 and avg <= 80:
    grade = "C"
else:
    grade = "D"

print("Total Marks: " + str(tot))
print("Average Marks: " + str(avg))
print("Grade: " + grade)