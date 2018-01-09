var todo_list = [
  {
    title: "home_work",
    is_completed: false,
    user_id: 1,
    user_name: "danil",
    user_surname: "nazar",
    todo_quantity: 4
  },
  {
    title: "car",
    is_completed: true,
    user_id: 26,
    user_name: "rostik",
    user_surname: "yuriev",
    todo_quantity: 2
  },
  {
    title: "#cook",
    is_completed: false,
    user_id: 10,
    user_name: "artem",
    user_surname: "zhmak",
    todo_quantity: 5
  },
  {
    title: "#library",
    is_completed: true,
    user_id: 20,
    user_name: "misha",
    user_surname: "oleynik",
    todo_quantity: 10
  }
];

function completed(arr_objs){
  return arr_objs.filter(function(elem) {
    return elem.is_completed;
  });
}

function listWithLattice(arr_objs) {
  return arr_objs.filter(function(elem) {
    return elem.title.indexOf("#") != -1
  }) ;
}

function allSummQuantiti(arr_objs) {
  return arr_objs.reduce(function(sum, current) {
    return sum + current.todo_quantity;
  }, 0);
}

function userIdDivideTen(arr_objs) {
  return arr_objs.filter(function(elem) {
    return elem.user_id % 10 == 0;
  });
}

function addKeyNameAndSurname(arr_objs) {
  return arr_objs.map(function(arr_objs) {
    arr_objs.full_name = arr_objs.user_name + " " + arr_objs.user_surname;
    return arr_objs;
  });
}

function notCompleted(arr_objs) {
  return arr_objs.filter(function(elem) {
    return !elem.is_completed;
  });
}

function isAndNotCompleted(arr_objs){
  return (completed(arr_objs).concat(NotCompleted(arr_objs)));
}

console.log(isAndNotCompleted(todo_list));
