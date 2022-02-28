import update from './update.js';
// status checkbox
const statusCheckBox = (e, ListContent) => {
  const taskDescription = e.target.nextElementSibling;
  taskDescription.classList.toggle('strike');
  const list = e.target.closest('li');
  const completed = !list.classList.contains('disabled');
  list.classList.toggle('disabled');
  const getLists = document.querySelector('#ulList').children;
  const index = Array.from(getLists).indexOf(list);
  ListContent[index].completed = completed;
  update(ListContent);
};
export default statusCheckBox;
