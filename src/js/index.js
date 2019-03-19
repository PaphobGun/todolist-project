import { elements } from './views/base';
import * as inputView from './views/inputView';
import * as list from './models/list';
import * as listView from './views/listView';

import '../scss/main.scss';

// Render todo and completed list from localstorage
listView.renderTodoList();

// Handle Enter event on input form
elements.inputForm.addEventListener('keydown', e => {
  const value = inputView.getInput();
  // Enter key
  if (e.key === 13 || (e.which === 13 && value)) {
    e.preventDefault();
    // render that list
    listView.renderList(value);
    // clear the input form to be empty
    inputView.clearInput();
    // Add todo list to Database
    list.addItem(value);
  }
});

// Add click event to ul ( delegation for check/delete button)
elements.listContainer.addEventListener('click', e => {
  // If event target has a data-type = 'delete'
  if (e.target.dataset.type === 'delete') {
    // delete the selected item from Database
    list.deleteItem(e);
    // remove from the DOM
    listView.deleteList(e);
  }

  // If event target has a data-type = 'check'
  if (e.target.dataset.type === 'check') {
    // Move from todo to completed or completed to todo
    list.toggleCompleted(e);
    // Render completed list
    listView.renderCompleted(e);
  }
});
