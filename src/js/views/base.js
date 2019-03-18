
export const elements = {

    inputForm: document.querySelector('.form__text'),
    addBtn: document.querySelector('.form__btn'),
    todoList: document.querySelector('.list__todo'),
    completedList: document.querySelector('.list__completed'),
    listContainer: document.querySelector('.list'),
    headerMonth: document.querySelector('.header__h3')

};


// Render Month and Year ( real time )

const months= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const now = new Date();
const month = now.getMonth();
const year = now.getFullYear();

elements.headerMonth.textContent = `On ${months[month]} ${year}`;

