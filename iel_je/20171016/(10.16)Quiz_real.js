// #13. 소수 찾기
// numberOfPrime 메소드는 정수 n을 매개변수로 입력받는다. 
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하도록 numberOfPrime 함수를 완성하라.
// 소수(素數, prime number)는 양의 약수가 1과 자기 자신 뿐인 1보다 큰 자연수로 정의된다. 
// 즉, 1과 자기 자신으로만 나누어지는 수를 의미한다.
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, …
// 예를 들어 10을 입력받았다면, 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환한다.

function numberOfPrime(n) {
  var count = 0;
  var prime = [];
  //1부터 n까지 범위
  for (var i = 1; i < n; i++) {
    //값 i가 소수인지 판별
    for (var j = 2; j <= i; j++) {
      //나누어 떨어지는 숫자가 없을 경우 count 1
      if (j === i) {
        prime.push(j);
      }
      //나누어 떨어지는 숫자가 있으면 지나침
      if (i % j === 0) {
        break;
      }
    }
  }
  return prime.length;
}

console.log(numberOfPrime(10)); // 4
// #14. 피보나치 수
// 피보나치 수는 0과 1로 시작하며, 다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 된다. 
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946…
// 2 이상의 n이 입력되었을 때, fibonacci 함수를 작성하여 n번째 피보나치 수를 반환하라. 
// 예를 들어 n = 3이라면 2를 반환한다.

function fibonacci(n) {
  if (n < 2) { return n; }

  var fib = [0, 1];

  for (var i = 2; i <= n; i++) {
    fib.push(fib[i - 2] + fib[i - 1])
  }
  var result = fib.pop();

  return result;
}

console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8

// #15. 하샤드 수

// 하샤드 수는 그 수의 각 자릿수 숫자의 합으로 그 수가 나누어지는 양의 정수를 말한다.
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 한다.
// 예를들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수이다.
// 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42, 45, 48, 50, 54, 60, 63, 70, 72, 80, 81, 84, 90, 100, 102, 108, 110, 111, 112, 114, 117, 120, 126, 132, 133, 135, 140, 144, 150, 152, 153, 156, 162, 171, 180, 190, 192, 195, 198, 200
// Harshad함수는 양의 정수 n을 매개변수로 입력받는다.
// 이 n이 하샤드수인지 아닌지 판단하는 함수를 완성하라.
// 예를들어 n이 10, 12, 18이면 True를 리턴 11, 13이면 False를 리턴한다.

function isHarshad(n) {
  var strtoNum = n.toString().split('');

  var sum = 0;
  for (var i = 0; i < strtoNum.length; i++) {
    sum += Number.parseInt(strtoNum[i]);
  }
  var result = n % sum === 0 ? true : false;
  return result;
}

console.log(isHarshad(10)); // true
console.log(isHarshad(12)); // true
console.log(isHarshad(18)); // true
console.log(isHarshad(11)); // false
console.log(isHarshad(13)); // false