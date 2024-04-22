def hanoi(n, source, auxiliary, destination):
    global s
    if n == 1:
        print(source, "-->", destination)
        s += 1
    else:
        hanoi(n - 1, source, destination, auxiliary)
        print(source, "-->", destination)
        s += 1
        hanoi(n - 1, auxiliary, source, destination)


if __name__ == "__main__":
    print("Enter number of disks: ")
    n = int(input())
    print()
    s = 0
    hanoi(n, "S", "A", "D")
    print("\nNumber of steps:", s)
