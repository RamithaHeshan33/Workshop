todo_list = []

while True:
    print("\n 1. Add a task")
    print(" 2. View tasks")
    print(" 3. Remove a task")
    print(" 4. Exit")

    choice = int(input("Enter your choice: "))

    if choice == 1:
        task = input("Enter the task: ")
        todo_list.append(task)

    elif choice == 2:
        if not todo_list:
            print("No tasks available.")

        else:
            i = 0
            print("Tasks: \n")
            while i < len(todo_list):
                print(f"{i + 1}. {todo_list[i]}")
                i += 1

    elif choice == 3:
        if not todo_list:
            print("No tasks available to remove.")
        else:
            task_number = int(input("Enter the Number that you want to delete: "))
            if 0 < task_number <= len(todo_list):
                removed_task = todo_list.pop(task_number - 1)
                print(f"Removed task: {removed_task}")
            else:
                print("Invalid task number.")

    elif choice == 4:
        print("Exiting the Todo List application.")
        break

    else:
        print("Invalid choice. Please try again.")

