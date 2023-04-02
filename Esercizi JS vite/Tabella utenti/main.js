const title = document.createElement('h1');
const userTable = document.createElement('table');

const dbKeys = ['Nome', 'Username', 'Email', 'Phone'];
let dbData = []; 

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((users) => {for (const user of users) {
  let filter = [{Nome: '', Username: '', Email: '', Phone: ''}];
  filter[0].Nome = user.name;
  filter[0].Username = user.username;
  filter[0].Email = user.email;
  filter[0].Phone = user.phone;
  dbData.push(filter);
}});

title.textContent = "Lista Utenti:";
document.body.appendChild(title);
document.body.appendChild(userTable);

function createTableHead(dbKeys, table) {
  let tableHead = table.createTHead();
  let headContent = tableHead.insertRow();
  for (let key of dbKeys){
    const th = document.createElement('th');
    th.textContent = key;
    headContent.appendChild(th);
  }
}

function createTableBody(dbData, table) {
  let dbKeys = Object.keys(dbData[0])
  for (let user of dbKeys){
    let row = table.insertRow();
    for (data in user){
      let cell = row.insertCell();
      cell.textContent = data;
    }
  }
}

createTableHead(dbData, userTable);
createTableBody(dbData, userTable);

console.log(dbData);


