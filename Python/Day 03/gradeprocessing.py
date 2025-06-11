marks = []

# Input all 3 subject marks
for i in range(1, 4):
    mark = int(input(f"Enter the marks for subject {i}: "))
    marks.append(mark)

# Grade calculation
grade = []
for mark in marks:
    if mark >= 75:
        grade.append("A")
    elif mark >= 65:
        grade.append("B")
    elif mark >= 55:
        grade.append("C")
    elif mark >= 35:
        grade.append("S")
    elif mark < 0:
        grade.append("Invalid")
    else:
        grade.append("F")

# Print marks and grades
print("Student Marks and Grades")
for i in range(len(marks)):
    print(f"Subject {i + 1} - Marks: {marks[i]}, Grade: {grade[i]}")

# Total and average
total_marks = sum(marks)
average_marks = total_marks / len(marks)

print(f"\nTotal Marks: {total_marks}")
print(f"Average Marks: {average_marks:.2f}")
