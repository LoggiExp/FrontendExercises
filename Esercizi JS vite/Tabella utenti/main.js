const title = document.createElement('h1');
const userTable = document.createElement('table');

title.textContent = "Lista Utenti:";
document.body.appendChild(title);
document.body.appendChild(userTable);

function createTableHead(table) {
  let tableHead = table.createTHead();
  let headContent = tableHead.insertRow();
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => Object.keys(json[0]))
  .then((dbKeys) => [dbKeys[1], dbKeys[2], dbKeys[3], dbKeys[5]])
  .then((dbKeys) => {
    for (let key of dbKeys){
      const th = document.createElement('th');
      th.textContent = key;
      headContent.appendChild(th);
    }})
  }

function createTableBody(table) {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((dbData) => {
    let filter = [];
    for (let user of dbData){
      let filtereduser = [user.name, user.username, user.email, user.phone];
      filter.push(filtereduser);  
    }
    return filter;
  })
  .then((filter) =>{
    for (let userIndex in filter) {
      let row = table.insertRow();
      let user = filter[userIndex]
      for(let dataindex in user) {
      let cell = row.insertCell();
      cell.textContent = user[dataindex];
    }
    }
  })
}

createTableHead(userTable);
createTableBody(userTable);


