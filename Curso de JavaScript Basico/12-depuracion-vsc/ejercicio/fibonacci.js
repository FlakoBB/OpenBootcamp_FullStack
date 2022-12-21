const fibonacci = (num) => {
    let sec = 1;
    let secFibonacci = [];

    for(let i = 1; i <= num; i++) {
        secFibonacci = [...secFibonacci, sec]
        if(i === 1) {
            sec = sec;
        } else {
            sec = (secFibonacci[i-1]) + (secFibonacci[i-2])
        }
    }

    return secFibonacci
}

console.log(fibonacci(20))