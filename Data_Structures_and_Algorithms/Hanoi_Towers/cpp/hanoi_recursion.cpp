#pragma hdrstop
#pragma argsused
#include <conio.h>
#include <iostream>
using namespace std;

int n, s;

void hanoi(int n, char source, char auxiliary, char destination);

int main(int argc, char *argv[])
{
    cout << "Enter number of disks: ";
    cin >> n;
    cout << endl;
    s = 0;
    hanoi(n, 'S', 'A', 'D');
    cout << "\nNumber of steps: " << s;
    getch();
    return 0;
}

void hanoi(int n, char source, char auxiliary, char destination)
{
    if (n == 1)
    {
        cout << source << " --> " << destination << endl;
        ++s;
    }
    else
    {
        hanoi(n - 1, source, destination, auxiliary);
        cout << source << " --> " << destination << endl;
        ++s;
        hanoi(n - 1, auxiliary, source, destination);
    }
}
