var inputText = document.getElementById('inputText');
var ulList = document.getElementById('inputList');

inputText.addEventListener('keydown', function(event) {
  //console.log(event.keyCode)
  if (event.keyCode == '13' && this.value != '') {
    //console.log(this.value);
    var newEl = document.createElement('LI');
    var newText = document.createTextNode(this.value);
    newEl.appendChild(newText);

    ulList.appendChild(newEl);
    inputText.value = "";
  }
});

ulList.addEventListener('click', function(event) {
  this.removeChild(event.target);
});

// if (ulList.childElementCount > 0) {
//   ulList.getElementsByTagName('LI').addEventListener('click', function(event) {
//     console.log(this);
//   })
// }


window.onload = function() {
  inputText.focus();
};