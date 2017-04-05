

// __________________Find Fibonacci num with Recursion

// function fib(n) {
//     if (n == 1 || n == 2) return 1;
//     else return fib(n - 2) + fib(n - 1);
// }
// var userNum = +prompt('Enter the Fibonacci number');
// document.write(fib(userNum));

// function fib(n)
// {
// if (n <= 0) return 0;
// else if (n == 1) return 1;
// else return fib(n-1) + fib(n-2);
// }
// var userNum = +prompt('Enter the Fibonacci number');
// document.write(fib(userNum));

// __________________Find Fibonacci num with For Loop

var n = Number (+prompt('Enter the Fibonacci number'));
function fib(n) {
    var a = 1;
    var b = 1;
    var c = 0;
    for (var i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}
alert(fib(n));

