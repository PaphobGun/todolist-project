import { elements } from './base';
import { data } from '../models/list';

// render to-do list on UI
export const renderList = value => {
  // markup for each todo-list
  const markup = `
    <li class="list__li">
      ${value}
      <i class="far fa-trash-alt list__del" data-type="delete"></i>
      <i class="far fa-check-circle list__check" data-type="check"></i>
    </li> 
    `;
  // Add the list on the top of lists
  elements.todoList.insertAdjacentHTML('afterbegin', markup);
};

// delete to-do list on UI
export const deleteList = e => {
  const currentTarget = e.target; //button
  const parent = currentTarget.parentNode; //li
  parent.parentNode.removeChild(parent); //move to ul and delete child of ul
};

// render completed list to UI
export const renderCompleted = e => {
  // when user click on icon
  // get the string from text in li (parent node of icon)
  const value = e.target.parentNode.innerText;
  // parent = li
  const parent = e.target.parentNode;
  // get ihe id of ul
  const id = e.target.parentNode.parentNode.id;

  const markup = `
    <li class="list__li">
      ${value}
      <i class="far fa-trash-alt list__del" data-type="delete"></i>
      <i class="far fa-check-circle list__check" data-type="check"></i>
    </li> 
    `;

  // if id of ul is 'todo' add the selected item to completed list
  // if id of ul is 'completed' add the slected item to todo list
  if (id === 'todo') {
    elements.completedList.insertAdjacentHTML('afterbegin', markup);
  } else {
    elements.todoList.insertAdjacentHTML('afterbegin', markup);
  }

  // delete the selected item from current ul
  parent.parentNode.removeChild(parent);
};

// Render completed list from localStorage
const renderCompFromLocal = value => {
  const markup = `
    <li class="list__li">
      ${value}
      <i class="far fa-trash-alt list__del" data-type="delete"></i>
      <i class="far fa-check-circle list__check" data-type="check"></i>
    </li> 
    `;

  elements.completedList.insertAdjacentHTML('afterbegin', markup);
};

// Render from local storage
export const renderTodoList = () => {
  // If Database is empty ( Nothing on localStorage ) just leave this function
  if (!data.todo.length && !data.completed.length) return;

  // Iterate over the todo [array] in Database
  data.todo.forEach(item => {
    // get the string ( todo item )
    let value = item;
    // render every todo item in the array
    renderList(value);
  });

  // Iterate over the completed [array] in Database
  data.completed.forEach(item => {
    // get the string ( completed item )
    let value = item;
    // render every completed item in the array
    renderCompFromLocal(value);
  });
};
