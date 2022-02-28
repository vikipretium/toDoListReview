const update = (ListContent) => {
  localStorage.setItem('tasks', JSON.stringify(ListContent));
};
export default update;
