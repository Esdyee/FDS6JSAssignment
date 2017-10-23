var todos;

var inputText = document.getElementById('input-todo');
var todoList = document.getElementById('todo-list');

function render(event, id, texts, chk) {
  //database
  var data_id = id == undefined ? todos[0].id + 1 : id;

  if (texts == undefined) {

    //text 대입
    texts = inputText.value;

    //to-do-list 배열 추가
    console.log(data_id);
    todos = [{ id: data_id, content: texts, completed: false }].concat(todos);
  }

  if (chk == undefined) chk = false;
  //todos.unshift({ id: data_id, content: texts, completed: false });


  //태그 선언부
  var newLI = document.createElement('LI');
  newLI.setAttribute('class', 'list-group-item');

  var newDiv = document.createElement("DIV");
  newDiv.setAttribute('class', 'hover-anchor');

  var newAnc = document.createElement("A");
  newAnc.setAttribute('class', 'hover-action text-muted');

  var newSpan = document.createElement("SPAN");
  newSpan.setAttribute('class', 'glyphicon glyphicon-remove-circle pull-right');
  newSpan.setAttribute('data-id', data_id);

  var newLabel = document.createElement("LABEL");
  newLabel.setAttribute('class', 'i-checks');
  newLabel.setAttribute('for', data_id)

  var newInputText = document.createElement("INPUT");
  newInputText.setAttribute('type', 'checkbox');
  newInputText.setAttribute('id', data_id);

  if (chk == true) {
    newInputText.setAttribute('checked', 'checked');
  }

  var newIcon = document.createElement("I");

  var newLabelSpan = document.createElement("SPAN");
  var newLabelSpanText = document.createTextNode(texts);

  //태그 Append
  newLI.appendChild(newDiv);
  newDiv.appendChild(newAnc);
  newDiv.appendChild(newLabel);
  newAnc.appendChild(newSpan);
  newLabel.appendChild(newInputText);
  newLabel.appendChild(newIcon);
  newLabel.appendChild(newLabelSpan);
  newLabelSpan.appendChild(newLabelSpanText);

  // to-do-list 추가
  var newLI_string = "<li class='list-group-item'>" + newLI.innerHTML + "</li>";
  todoList.insertAdjacentHTML('afterbegin', newLI_string);

  //inputbox 초기화
  inputText.value = '';
}

inputText.addEventListener('keydown', function(event) {
  if (event.keyCode == '13' && this.value != '') {
    render(event);
  }
})


todoList.addEventListener('click', function(event) {
  if (event.target.nodeName == 'SPAN') {
    //console.log(event.target.getAttribute("data-id"));
    //console.log(event.target);
    var arr_idx_todos = todos.map(function(items) { return items.id });
    //console.log(arr_idx_todos);
    //console.log(parseInt(event.target.getAttribute("data-id")));
    //console.log(arr_idx_todos.indexOf(parseInt(event.target.getAttribute("data-id"))));
    var idx_todos = arr_idx_todos.indexOf(parseInt(event.target.getAttribute("data-id")))
    todos.splice(idx_todos, 1);
    this.removeChild(event.target.parentNode.parentNode.parentNode);
  }
});


window.onload = function() {

  todos = [
    { id: 1, content: "HTML", completed: true },
    { id: 2, content: "CSS", completed: true },
    { id: 3, content: "JavaScript", completed: false }
  ]

  todos.reverse().forEach(function(todo) {
    console.log(todo.id);
    render(null, todo.id, todo.content, todo.completed);
  })
};