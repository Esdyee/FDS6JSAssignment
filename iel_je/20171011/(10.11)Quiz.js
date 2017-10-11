// alphaString46 함수는 문자열 s를 매개변수로 입력받는다.s의 길이가 4~6 이고, 
// 숫자로만 구성되어 있는지 확인하는 함수를 완성하라.예를들어 s가 'a234'
// 이면 false를 리턴하고 '1234'
// 라면 true를 리턴한다

function alphaString46(s) {
  var regExp = /[0-9]{4,6}/g

  return regExp.test(s);
}

console.log(alphaString46('1234')); // true
console.log(alphaString46('9014')); // true
console.log(alphaString46('723')); // false
console.log(alphaString46('a234')); // false
console.log(alphaString46('')); // false
console.log(alphaString46()); // false



//5. 이상한 문자만들기

function toWeirdCase(s) {
  var arrWord = s.split(' ');
  var completeWord = '';

  for (var index in arrWord) {

    for (var i = 0; i < arrWord[index].length; i++) {
      if (i % 2 === 0) {
        completeWord += arrWord[index][i].toUpperCase()
      } else {
        completeWord += arrWord[index][i]
      }
    }
    completeWord += ' ';
  }

  //마지막 공백 삭제 구문
  completeWord = completeWord.trim();

  return completeWord;
}

console.log(toWeirdCase('hello world')); // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'




// 4. 문자열 내 p와 y의 개수

// numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받는다. 
// 대소문자를 구별하지 않으며 s에 'p'의 개수와 'y'의 갯수를 비교해 같으면 true, 다르면 false를 리턴하도록 함수를 완성하라. 
// 'p', 'y' 모두 하나도 없는 경우는 항상 true를 리턴한다.
// 예를들어 s가 'pPoooyY'면 true를 리턴하고 'Pyy'라면 false를 리턴한다.

function numPY(s) {

  //인자값 없을 때 처리
  if (arguments.length === 0) {
    return true;
  }

  var regExp_p = /p/ig
  var regExp_y = /y/ig

  var p_length = s.match(regExp_p) ? s.match(regExp_p).length : 0;
  var y_length = s.match(regExp_y) ? s.match(regExp_y).length : 0;

  //길이비교 후 다르면 false 출력
  if (p_length !== y_length) {
    return false;
  }
  return true;
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy')); // false
console.log(numPY('ab')); // true
console.log(numPY('')); // true
console.log(numPY()); // true