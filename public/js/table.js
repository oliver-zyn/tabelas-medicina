document.addEventListener("DOMContentLoaded", loadUserRegisters());

function loadUserRegisters() {
  fetch(`${location.origin}/user/all`).then((res) => {
    res.json().then((registers) => {
      tableGenerate(registers);
    });
  });
}

function tableGenerate(registers) {
  let tableUser = document.querySelector("#tableUser");

  registers.forEach((item) => {
    tableUser.innerHTML += `
                  <tr>
                    <td>${item.id}</td>
                    <td>${item.nome}</td>
                    <td>${item.login}</td>
                    <td>${item.senha}</td>
                    <td>${item.email}</td>
                    <td>${item.ativo}</td>
                    <td><button class="btnEdit" onclick="updateOpen(this, 'modalUpdate')"><i class="fas fa-edit"></i></button></td>
                  </tr>
                `;
  });
}

function openModal(idModal) {
  let modal = select(idModal)
  modal.style.display = "block";
}

function closeModal(idModal) {
  let modal = select(idModal)
  modal.style.display = "none";
}

function select(id) {
  let result = document.querySelector(`#${id}`);

  return result;
}

//#region Forms

function validateFormUser(nome, email, login, password, passwordConfirm = null) {
  if (!nome || !email || !login || !password) {
    alert("Preencha todos os campos!");

    return false
  }

  if (passwordConfirm) {
    if (password !== passwordConfirm) {
      alert("As senhas devem ser iguais!");
      
      return false
    }
  }

  if (password.length < 6) {
    alert("A senha deve possuir no mínimo 6 caracteres");
    
    return false
  }

  if(!validateEmail(email)) {
    return false
  }

  return true
}

function validateEmail(emailValue) {
  if (emailValue.indexOf(" ") >= 0) {
    alert("O email não pode conter espaços!");

    return false;
  } else {
    let regexValidation = /\S+@\S+\.\S+/;
    let validation = regexValidation.test(emailValue);

    if (!validation) {
      alert('O email é inválido!')
    }

    return validation;
  }
}

//#endregion

//#endregion Include

async function includeUser() {

  let { nome, email, login, password, passwordConfirm, active } = formValuesInclude()

  if(!validateFormUser(nome, email, login, password, passwordConfirm)) {
    return
  }

  let jsonUser = { nome, email, login, senha: password, ativo: active };

  const options = {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(jsonUser),
  };

  await fetch("http://localhost:3000/user/register", options).then(res => {
    res.text().then(msg => {
      alert(msg)

      if (res.ok) {
        location.reload()
      }
    })
  })
}

function formValuesInclude() {
  let nome = select("nameInclude").value;
  let email = select("emailInclude").value;
  let login = select("loginInclude").value;
  let password = select("passwordInclude").value;
  let passwordConfirm = select("passwordConfirmInclude").value;
  let active = select("chkActiveInclude").checked;

  return { nome, email, login, password, passwordConfirm, active };
}

//#endregion

//#region Update

let idUser

function updateOpen(btnEvent, idModalUpdate) {

  openModal(idModalUpdate)

  let listTr = btnEvent.parentNode.parentNode;
  idUser = listTr.children[0].textContent;
  let isActive = listTr.children[5].textContent === "true";

  select("nameUpdate").value = listTr.children[1].textContent;
  select("emailUpdate").value = listTr.children[4].textContent;
  select("loginUpdate").value = listTr.children[2].textContent;
  select("passwordUpdate").value = listTr.children[3].textContent;
  select("chkActiveUpdate").checked = isActive;
}

async function updateUser() {

  let {nome, email, login, password, active } = formValuesUpdate()

  if(!validateFormUser(nome, email, login, password)) {
    return
  }
  
  let jsonUserUpdate = {id: idUser, nome, email, login, senha: password, ativo: active }

  const options = {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(jsonUserUpdate)
  };

  await fetch(`${location.origin}/user/update`, options).then((res) => {
    res.text().then(msg => {
      alert(msg)

      if (res.ok) {
        location.reload()
      }
    })
  });
}

function formValuesUpdate() {
  let nome = select("nameUpdate").value;
  let email = select("emailUpdate").value;
  let login = select("loginUpdate").value;
  let password = select("passwordUpdate").value;
  let active = select("chkActiveUpdate").checked;

  return { nome, email, login, password, active };
}

//#endregion
