  import axios from 'axios';

  var todos = [];
  const todosFunc = (function() {

    function getTodos(status) {
      axios.get('/todos')
        .then(res => {
          todos = res.data;
          console.log(todos);
          //탭메뉴가 선택된 상태(status)에서는 상태 적용해서 todostatus에서 redner
          if (status) {
            todoStatus(document.querySelectorAll('.nav .active')[0].id);
          } else {
            render(todos);
          }
          //console.log('[GET]\n', todos);
        })
    };

    getTodos();

    //중요 요소 정의
    let todoList = document.getElementById('todo-list');
    let inputTextBox = document.getElementById('input-todo');
    let nav = document.getElementsByClassName('nav');

    //render
    function render(selTodos) {
      //todoList 초기화
      todoList.innerHTML = '';
      selTodos.forEach((todo) => {
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
        todoList.insertAdjacentHTML('beforeend', newLi);
      });
      countTodos();
    }

    render(todos);

    //Input Event
    inputTextBox.addEventListener('keydown', (event) => {
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
        axios.post('/todos', add_todo)
          .then(res => { /*console.log(res)*/ })
          .catch(err => console.log(err));

        todos.unshift(add_todo);
        inputTextBox.value = '';
        nav[0].querySelector('a').click();
      }
    });

    //Remove Event
    todoList.addEventListener('click', () => {
      if (event.target.nodeName === "SPAN") {
        //삭제할 id span에서 검색
        const remove_id = event.target.getAttribute("data-id");
        //해당 id가 몇번째 인덱스에 있는가
        let remove_index = todos.find((todo) => todo.id == remove_id);

        //삭제할 인덱스의 요소 todos에서 삭제
        todos.splice(todos.indexOf(remove_index), 1);

        axios.delete(`/todos/${remove_id}`)
          .then(res => console.log(res))
          .catch(err => console.log(err));

        render(todos);

      }
    });

    //Toggle Event
    todoList.addEventListener('change', () => {
      if (event.target.nodeName === "INPUT") {

        let toggle_id, toggle_todo;

        todos.forEach((todo) => {
          //todo.completed = todo.id == event.target.id ? !todo.completed : todo.completed;
          if (todo.id == event.target.id) {
            toggle_id = event.target.id;
            todo.completed = !todo.completed;
            toggle_todo = todo;
          }
        })

        axios.patch(`/todos/${event.target.id}`, toggle_todo)
          .then(res => console.log(res))
          .catch(err => console.log(err));

        countTodos();
      }
    });

    //Tab Click Event
    nav[0].addEventListener('click', (event) => {
      if (event.target.nodeName == "A") {
        var nav_li_elmns = event.currentTarget.getElementsByTagName('li');
        for (let i = 0; i < nav_li_elmns.length; i++) {
          nav_li_elmns.item(i).removeAttribute('class');
        }
        event.target.parentNode.setAttribute('class', 'active');

        todoStatus(event.target.parentNode.id);
      }
    });

    //Tab Branch Status
    function todoStatus(status) {
      let filterTodos = todos.filter((todo) => {

        let condition;
        if (status == "active") {
          condition = !todo.completed;
        } else if (status == "completed") {
          condition = todo.completed;
        } else {
          condition = true;
        }
        return condition;
      });
      render(filterTodos);
    }

    //All Select Check
    const allCheckbox = document.getElementById('chk-allComplete');
    allCheckbox.addEventListener('change', (event) => {
      axios.patch(`/todos`, { completed: event.target.checked })
        .then(res => {
          getTodos(true);
        })
        .catch(err => console.log(err));
    });

    //Count Todos
    function countTodos() {
      const spanCompleteCount = document.getElementById('completedTodos');
      const strongLeftCount = document.getElementById('leftTodos');

      let cmplTodos = todos.filter((todo) => {
        return todo.completed;
      });
      spanCompleteCount.textContent = cmplTodos.length;
      strongLeftCount.textContent = todos.length - cmplTodos.length;
    }

    //Clear Todos
    const btnClearCmpl = document.getElementById('btn-removeCompletedTodos');
    btnClearCmpl.addEventListener('click', () => {
      axios.delete(`/todos/completed`)
        .then(res => {
          getTodos(true);
        })
        .catch(err => console.log(err));
    });
  }())