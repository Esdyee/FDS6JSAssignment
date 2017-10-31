  const todos = [
    { id: 1, content: "JavaScript", completed: true },
    { id: 2, content: "CSS", completed: true },
    { id: 3, content: "HTML", completed: false }
  ]

  const todosFunc = (function() {
    const todoList = document.getElementById('todo-list');
    const inputTextBox = document.getElementById('input-todo');

    //render
    function render() {
      //todoList 초기화
      todoList.innerHTML = '';
      todos.forEach(function(todo) {
        let checked = todo.completed ? "checked" : "";
        let newLi = `<li class="list-group-item">
                        <div class="hover-anchor">
                        <a class="hover-action text-muted">
                            <span class="glyphicon glyphicon-remove-circle pull-right" data-id="${todo.id}"></span>
                        </a>
                        <label class="i-checks" for="${todo.id}">
                            <input type="checkbox" id="${todo.id}" ${checked}><i></i>
                            <span>${todo.content}</span>
                        </label>
                        </div>
                    </li>
                    `
          //todoList.innerHTML = newLi;
        todoList.insertAdjacentHTML('afterbegin', newLi);
      });
    }

    render();

    //Input Event
    inputTextBox.addEventListener('keydown', function(event) {
      if (event.keyCode === 13 && event.target.value !== '') {
        //max_id 검색
        const max_id = todos.length !== 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1

        //객체 생성
        const add_todo = {
          id: max_id,
          content: event.target.value,
          completed: false
        }

        //추가
        todos.push(add_todo);

        render();
      }
    });

    //Remove Event
    todoList.addEventListener('click', function() {
      if (event.target.nodeName === "SPAN") {
        //삭제할 id span에서 검색
        const remove_id = event.target.getAttribute("data-id");
        //해당 id가 몇번째 인덱스에 있는가
        let remove_index = todos.find((todo) => todo.id == remove_id);
        //삭제할 인덱스의 요소 todos에서 삭제
        todos.splice(todos.indexOf(remove_index), 1);

        render();
      }
    });

    //Toggle Event
    todoList.addEventListener('change', function() {
      if (event.target.nodeName === "INPUT") {
        todos.forEach((todo) => {
          todo.completed = todo.id == event.target.id ? !todo.completed : todo.completed;
        })
      }
    });
  }())