// status checkbox
const statusCheckBox = (e, ListContent) => {
  const taskDescription = e.target.nextElementSibling;
  taskDescription.classList.toggle('strike');
  const completed = !taskDescription.classList.contains('disabled');
  taskDescription.classList.toggle('disabled');
  const getLists = document.querySelector('#ulList').children;
  const index = Array.from(getLists).indexOf(taskDescription);
  ListContent[index].completed = completed;
  localStorage.setItem('tasks', JSON.stringify(ListContent));
};
export default statusCheckBox;
