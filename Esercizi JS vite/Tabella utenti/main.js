const title = document.createElement('h1');
const userTable = document.createElement('table');
const form = document.createElement('form');

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
      for (let key of dbKeys) {
        const th = document.createElement('th');
        th.textContent = key;
        headContent.appendChild(th);
      }
    })
}

function createTableBody(table) {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((dbData) => {
      let filter = [];
      for (let user of dbData) {
        let filtereduser = [user.name, user.username, user.email, user.phone];
        filter.push(filtereduser);
      }
      return filter;
    })
    .then((filter) => {
      for (let userIndex in filter) {
        let row = table.insertRow();
        let user = filter[userIndex]
        for (let dataindex in user) {
          let cell = row.insertCell();
          cell.textContent = user[dataindex];
        }
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () => deleteUser(userIndex))
        row.appendChild(deleteButton);
      }
    })
}

function createForm(form) {
  let title = document.createElement('h1');
  title.textContent = 'Aggiungi utente:'
  form.appendChild(title);
  document.body.appendChild(form);
  let inputName = document.createElement('input');
  inputName.setAttribute('placeholder', 'Name');
  inputName.setAttribute('name', 'Name');
  form.appendChild(inputName);
  let inputUsername = document.createElement('input');
  inputUsername.setAttribute('placeholder', 'Username');
  inputUsername.setAttribute('name', 'Username');
  form.appendChild(inputUsername);
  let inputEmail = document.createElement('input');
  inputEmail.setAttribute('placeholder', 'Email');
  inputEmail.setAttribute('name', 'Email');
  form.appendChild(inputEmail);
  let inputPhone = document.createElement('input');
  inputPhone.setAttribute('placeholder', 'Phone');
  inputPhone.setAttribute('name', 'Phone');
  form.appendChild(inputPhone);
  let resetButton = document.createElement('button');
  resetButton.setAttribute('type', 'reset');
  resetButton.textContent = 'Reset';
  form.appendChild(resetButton);
  let submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';
  submitButton.addEventListener('click', () => submitForm(form, inputName, inputUsername, inputEmail, inputPhone));
  document.body.appendChild(submitButton);
}

function submitForm(form, inputName, inputUsername, inputEmail, inputPhone) {
  let newUser = [{ Name: inputName.value, Username: inputUsername.value, Email: inputEmail.value, Phone: inputPhone.value }]
  fetch('https://jsonplaceholder.typicode.com/users', { method: 'post', body: form })
    .then((response) => {
      if (response.ok) {
        refreshTable(newUser[0]);
        form.reset();
      }
    });
}

function refreshTable(newUser) {
  // let rows = userTable.rows.length;
  // for (let i = 1; i < rows; i++){
  //   userTable.deleteRow(1);
  // }
  // createTableBody(userTable);
  //visto che non viene aggiunto veramente nel db un uovo utente, lo agigungo manualmente e rimuovo il refresh in modo da poterne metter epiù di uno.
  let newUserRow = userTable.insertRow()
  console.log(newUser);

  let cell1 = newUserRow.insertCell();
  let cell2 = newUserRow.insertCell();
  let cell3 = newUserRow.insertCell();
  let cell4 = newUserRow.insertCell();
  cell1.textContent = newUser.Name;
  cell2.textContent = newUser.Username;
  cell3.textContent = newUser.Email;
  cell4.textContent = newUser.Phone;
}

// bug: si cancella la riga ma il numero massimo rimane 10, dopo la prima eliminazione cancella quello sbagliato
function deleteUser(id) {
  console.log(id);
  fetch('https://jsonplaceholder.typicode.com/users/' + id, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.ok) {
        userTable.deleteRow(sum([id, 1]))
      }
    })
}

function sum(input) {

  if (toString.call(input) !== "[object Array]")
    return false;

  var total = 0;
  for (var i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      continue;
    }
    total += Number(input[i]);
  }
  return total;
}

createTableHead(userTable);
createTableBody(userTable);
createForm(form);


