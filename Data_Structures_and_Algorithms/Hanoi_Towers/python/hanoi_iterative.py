def move(a, b):
    if len(stacks[b]) == 0 or (len(stacks[a]) > 0 and stacks[a][-1] < stacks[b][-1]):
        print(f"Move disk {stacks[a][-1]} from rod {rod[a]} to rod {rod[b]}")
        stacks[b].append(stacks[a].pop())
    else:
        move(b, a)


def hanoi(n):
    print(f"Tower of Hanoi for {n} disks:")
    src, aux, dest = 0, 1, 2
    for i in range(n, 0, -1):
        stacks[src].append(i)

    total_moves = (1 << n) - 1
    if n % 2 == 0:
        aux, dest = dest, aux

    for i in range(1, total_moves + 1):
        if i % 3 == 0:
            move(aux, dest)
        elif i % 3 == 1:
            move(src, dest)
        else:
            move(src, aux)

    print("\nNumber of steps:", total_moves)


if __name__ == "__main__":
    rod = ["S", "A", "D"]
    stacks = [[] for _ in range(3)]

    print("Enter number of disks: ")
    n = int(input())
    print()
    hanoi(n)
