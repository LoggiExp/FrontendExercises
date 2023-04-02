const title = document.createElement('h1');
const userTable = document.createElement('table');

const promiseHead = ['Nome', 'Username', 'Email', 'Phone'];
let promise = []; 

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((users) => {for (const user of users) {
  let filter = [];
  filter.push(user.name);
  filter.push(user.username);
  filter.push(user.email);
  filter.push(user.phone);
  promise.push(filter);
}});

title.textContent = "Lista Utenti:";
document.body.appendChild(title);
document.body.appendChild(userTable);

function createTableHead(promiseHead, table) {
  let tableHead = table.createTHead();
  let headContent = tableHead.insertRow();
  for (let key of promiseHead){
    const th = document.createElement('th');
    th.textContent = key;
    headContent.appendChild(th);
  }
}

createTableHead(promiseHead, userTable);
