function send() {
  let nome = select("name").value;
  let email = select("email").value;
  let login = select("login").value;
  let senha = select("senha").value;
  let senhaConfirm = select("senhaConfirm").value;
  let ativo = select("chkAtivo").checked;

  if (!nome || !email || !login || !senha || !senhaConfirm) {
    return alert("Preencha todos os campos!");
  }

  if (senha !== senhaConfirm) {
    return alert("As senhas devem ser iguais!");
  }

  if (senha.length < 6) {
    return alert("A senha deve possuir no mínimo 6 caracteres");
  }

  if (!validaEmail(email)) {
    return alert("O email é inválido!");
  }

  let jsonUser = { nome, email, login, senha, ativo };

  const options = {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(jsonUser),
  };

  fetch("http://localhost:3000/register", options).then((res) => {
    res.text().then((msg) => {
      alert(msg);
    });
  });
}

function select(id) {
  let result = document.querySelector(`#${id}`);

  return result;
}

function validaEmail(valorEmail) {
  if (valorEmail.indexOf(" ") >= 0) {
    alert("O email não pode conter espaços!");

    return false;
  } else {
    let validacaoRegex = /\S+@\S+\.\S+/;
    let resultadoValidacao = validacaoRegex.test(valorEmail);

    return resultadoValidacao;
  }
}
