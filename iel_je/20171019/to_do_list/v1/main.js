  var todos = [
    { id: 1, content: "JavaScript", completed: true },
    { id: 2, content: "CSS", completed: true },
    { id: 3, content: "HTML", completed: false }
  ]

  var todoFunc = (function() {

    //Todo입력박스
    var inputText = document.getElementById('input-todo');
    //Todo리스트
    var todoList = document.getElementById('todo-list');

    //forEach문으로 HTML 추가하는 함수
    function render() {
      todoList.innerHTML = '';
      todos.forEach(function(todo) {

        //태그 선언부
        var newLI = document.createElement('LI');
        newLI.setAttribute('class', 'list-group-item');

        var newDiv = document.createElement("DIV");
        newDiv.setAttribute('class', 'hover-anchor');

        var newAnc = document.createElement("A");
        newAnc.setAttribute('class', 'hover-action text-muted');

        var newSpan = document.createElement("SPAN");
        newSpan.setAttribute('class', 'glyphicon glyphicon-remove-circle pull-right');
        newSpan.setAttribute('data-id', todo.id);

        var newLabel = document.createElement("LABEL");
        newLabel.setAttribute('class', 'i-checks');
        newLabel.setAttribute('for', todo.id)

        var newInputText = document.createElement("INPUT");
        newInputText.setAttribute('type', 'checkbox');
        newInputText.setAttribute('id', todo.id);

        if (todo.completed == true) {
          newInputText.setAttribute('checked', 'checked');
        }

        var newIcon = document.createElement("I");

        var newLabelSpan = document.createElement("SPAN");
        var newLabelSpanText = document.createTextNode(todo.content);

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
      })
    }


    //Enter Event
    inputText.addEventListener('keydown', function(event) {
      if (event.keyCode == '13' && this.value != '') {

        //id의 값만 있는 배열 생성 후, id 최대값을 가져옴
        var todos_id_arr = todos.map(function(items) { return items.id });
        var data_id = Math.max.apply(null, todos_id_arr) + 1;

        todos = todos.concat([{ id: data_id, content: inputText.value, completed: false }]);

        render();
      }
    })

    //Remove Event
    todoList.addEventListener('click', function(event) {
      if (event.target.nodeName == 'SPAN') {
        todos = todos.filter(function(item) { return item.id != event.target.getAttribute("data-id") })
        render();
      }
    });

    //최초 1회 실행
    render();
  }())