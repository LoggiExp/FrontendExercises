const title = document.createElement('h1');
const input = document.createElement('input');
const addButton = document.createElement('button');

title.textContent = "Lista della Spesa";
addButton.textContent = "Aggiungi"

document.body.appendChild(title);
document.body.appendChild(input);
document.body.appendChild(addButton);

const lista = document.createElement('ul');
document.body.appendChild(lista);

addButton.addEventListener('click', () => {
  const listElement = document.createElement('li');
  listElement.textContent = input.value;
  listElement.addEventListener('click', () => {
    listElement.setAttribute('style', 'text-decoration: line-through');
    listElement.addEventListener('dblclick', () => {
      listElement.remove();
    })
  })
  input.value = "";
  document.body.appendChild(listElement);
})
