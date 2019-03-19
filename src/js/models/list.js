// DATA BASE
// get the list from localStorage if it exist

export const data = localStorage.getItem('todoList')
  ? JSON.parse(localStorage.getItem('todoList'))
  : {
      // initial value ( if nothing from localstorage)
      todo: [],
      completed: []
    };

// Store data in localstorage (convert to string)
export const dataObjectUpdated = () => {
  localStorage.setItem('todoList', JSON.stringify(data));
};

// ADD TODO-ITEM TO DATA BASE
export const addItem = value => {
  data.todo.push(value);
  // Save it to localStorage
  dataObjectUpdated();
};

// DELETE ITEM FROM DATA BASE
export const deleteItem = e => {
  // destructuring
  const { todo, completed } = data;

  // get string from li
  const value = e.target.parentNode.innerText;
  // get id of ul
  const id = e.target.parentNode.parentNode.id;

  // If id of ul of selected li is 'todo' remove it from Database [todo]
  // If id of ul of selected li is 'completed' remove it from Database [completed]
  if (id === 'todo') {
    // find the index of the selected value and remove it from the array
    todo.splice(todo.indexOf(value), 1);
  } else {
    completed.splice(completed.indexOf(value), 1);
  }
  // save it to localStorage
  dataObjectUpdated();
};

// TOGGLE COMPLETED ITEM TO DATA
export const toggleCompleted = e => {
  // destructuring
  const { todo, completed } = data;

  // get string from li
  const value = e.target.parentNode.innerText;
  // get id of ul
  const id = e.target.parentNode.parentNode.id;

  // If id of ul of selected li is 'todo' remove it from Database [todo]
  // If id of ul of selected li is 'completed' remove it from Database [completed]
  if (id === 'todo') {
    // find the index of the selected value and remove it from the array
    todo.splice(todo.indexOf(value), 1);
    // move to completed list
    completed.push(value);
  } else {
    completed.splice(completed.indexOf(value), 1);
    // move to todo list
    todo.push(value);
  }

  // save it to localStorage
  dataObjectUpdated();
};
