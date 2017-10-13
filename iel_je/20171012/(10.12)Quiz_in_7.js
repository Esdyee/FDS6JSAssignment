// 6. 핸드폰번호 가리기
// 핸드폰 요금 고지서에 표시할 전화번호는 개인정보 보호를 위해 맨 뒷자리 4 자리를 제외한 나머지를 ''
// 으로 바꿔야 한다.전화번호를 나타내는 문자열 str을 입력받는 hideNumbers 함수를 완성하라
// 예를들어 s가 '01033334444' 면 '**4444' 를 리턴하고, '027778888' 인 경우는 '*****8888'을 리턴한다.

function hideNumbers(str) {
  var hide_length = str.length - 4;
  var hideNumber = '*'.repeat(hide_length) + str.substring(hide_length);

  return hideNumber
}
console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888')); // *****8888


// 7. 문자열을 숫자로 바꾸기
// strToInt 메소드는 문자열 str을 매개변수로 받는다.str을 숫자로 변환한 결과를 반환하도록 strToInt를 작성하라.예를들어 str이 '1234'
// 이면 1234 를 반환하고, '-1234'
// 이면 - 1234 를 반환한다.str은 부호(+, -) 와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없다.

function strToInt(str) {
  var number = Number.parseInt(str);

  return number;
}

console.log(strToInt('1234')); // 1234
console.log(strToInt('-1234')); // -1234


// #8. 수박수박수박수박수박수?
// waterMelon 함수는 정수 n을 매개변수로 입력받는다. 길이가 n이고, 수박수박수…와 같은 패턴을 유지하는 문자열을 리턴하도록 함수를 완성하라.
// 예를들어 n이 4이면 '수박수박'을 리턴하고 3이라면 '수박수'를 리턴한다.
function waterMelon(n) {
  var stringSB = '';
  stringSB += '수박'.repeat((n / 2));
  if (n % 2 === 1) stringSB += '수';

  return stringSB;
}
console.log('n이 3인 경우: ' + waterMelon(3));
console.log('n이 4인 경우: ' + waterMelon(4));


// # 9. 정수제곱근 판별하기
// nextSqaure함수는 정수 n을 매개변수로 받는다.n이 임의의 정수 x의 제곱이라면 x + 1 의 제곱을 리턴하고, 
// n이 임의의 정수 x의 제곱이 아니라면 'no'
// 을 리턴하는 함수를 작성하라.예를들어 n이 121 이라면 이는 정수 11 의 제곱이므로(11 + 1) 의 제곱인 144 를 리턴하고, 3 이라면 'no'
// 을 리턴한다.

function nextSqaure(n) {
  var sqrtNum = Math.sqrt(n);
  var result = sqrtNum === Math.floor(sqrtNum) ? Math.pow(sqrtNum + 1, 2) : "no";

  return result
}

console.log(nextSqaure()); // no
console.log(nextSqaure(0)); // 1
console.log(nextSqaure(1)); // 4
console.log(nextSqaure(2)); // no
console.log(nextSqaure(3)); // no
console.log(nextSqaure(121)); // 144
console.log(nextSqaure(165)); // no
console.log(nextSqaure(400)); // 441

// #10. Check Palindrom
// palindrome(팰린드롬/회문)은 왼쪽에서 오른쪽으로 읽은 다음, 오른쪽부터 왼쪽으로 다시 읽어도 똑같은 형태와 의미를 유지하는 문장이나 단어를 지칭한다. 인자로 전달한 문자열이 palindrome인지 검사하여 Boolean값을 반환하는 함수를 완성하라. 단, 반드시 1자 이상의 문자열을 인자로 전달한다.

function checkPalindrom(str) {
  var result = str === str.split('').reverse().join('') ? true : false;

  //글자열이 1개 일 때 처리
  if (str.length === 1) result = false;

  return result;
}

console.log(checkPalindrom('dad')); // true
console.log(checkPalindrom('mom')); // true
console.log(checkPalindrom('palindrom')); // false
console.log(checkPalindrom('s')); // false

#
// 11. 배열의 최대 / 최소값 구하기

// 배열의 요소 중 최대값 / 최소값을 반환하는 함수를 완성하라.

function getMaxValueFromArray(array) {

  var compare = function(a, b) { return a - b }

  var arrayASC = array.sort(compare);
  var popValue = arrayASC.pop();

  return popValue;

}
console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7



function getMinValueFromArray(array) {

  var compare = function(a, b) { return a - b }

  var arrayASC = array.sort(compare);
  var popValue = arrayASC.shift();

  return popValue;

}
console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5


// 12. 약수의 합
// 어떤 수를 입력받아 그 수의 약수를 모두 더한 수를 구하는 sumDivisor 함수를 완성하라.
// 예를 들어 12 가 입력된다면 12 의 약수는[1, 2, 3, 4, 6, 12] 가 되고, 총 합은 28 이 되므로 28 을 반환한다.
// 약수(約數, divisor) 는 어떤 수를 나누었을 때 나머지가 0 인 수를 말하며, 배수 관계와 서로 반대되는 개념이다

function sumDivisor(num) {
  var divisor = [];
  for (var i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisor.push(i);
    }
  }

  //sum 콜백함수
  var sumFunction = function(accu, curVal, curIdx, array) {
    return accu + curVal;
  }

  var sumValue = divisor.reduce(sumFunction);

  return sumValue;
}

console.log(sumDivisor(12)); // 28