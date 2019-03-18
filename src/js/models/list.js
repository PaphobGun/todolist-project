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
  // get string from li
  const value = e.target.parentNode.innerText;
  // get id of ul
  const id = e.target.parentNode.parentNode.id;

  // If id of ul of selected li is 'todo' remove it from Database [todo]
  // If id of ul of selected li is 'completed' remove it from Database [completed]
  if (id === 'todo') {
    data.todo = data.todo.filter(item => item !== value);
  } else {
    data.completed = data.completed.filter(item => item !== value);
  }
  // save it to localStorage
  dataObjectUpdated();
};

// TOGGLE COMPLETED ITEM TO DATA
export const toggleCompleted = e => {
  // get string from li
  const value = e.target.parentNode.innerText;
  // get id of ul
  const id = e.target.parentNode.parentNode.id;

  // If id of ul of selected li is 'todo' remove it from Database [todo]
  // If id of ul of selected li is 'completed' remove it from Database [completed]
  if (id === 'todo') {
    data.todo = data.todo.filter(item => item !== value);
    // move to completed list
    data.completed.push(value);
  } else {
    data.completed = data.completed.filter(item => item !== value);
    // move to todo list
    data.todo.push(value);
  }

  // save it to localStorage
  dataObjectUpdated();
};
