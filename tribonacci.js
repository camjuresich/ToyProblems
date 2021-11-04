const tribonacciMaker = function() {
    const storage = [0, 1, 1];
    const tribonacci = function(n) {
        // recursive approach
        if (n < 0) return 0;
        if (storage[n]) {
            return storage[n];
        } 

        storage[n] = tribonacci(n-3) + tribonacci(n-2) + tribonacci(n-1);
        return storage[n];
    }
    return tribonacci;
}

const tribonacci = tribonacciMaker();
