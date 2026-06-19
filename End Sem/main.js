function checkPrime() {
    let n = document.getElementById("num").value;
    let isPrime = true;

    if (n <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        document.getElementById("result").innerText = "Prime Number";
    } else {
        document.getElementById("result").innerText = "Not a Prime Number";
    }
}