from day01 import addNumbers, multiplyNumbers, subtractNumbers, divideNumbers

def main():
    a = 10
    b = 5

    print(f"Adding {a} and {b} gives: {addNumbers(a, b)}")
    print(f"Multiplying {a} and {b} gives: {multiplyNumbers(a, b)}")
    print(f"Subtracting {b} from {a} gives: {subtractNumbers(a, b)}")
    print(f"Dividing {a} by {b} gives: {divideNumbers(a, b)}")

if __name__ == "__main__":
    main()