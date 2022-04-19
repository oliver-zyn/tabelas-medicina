function sendUser() {
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

  fetch("http://localhost:3000/user/register", options).then((res) => {
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

function sendConvenio() {
  let nomeConvenio = select('nomeConvenio').value

  if (!nomeConvenio) {
    return alert("Preencha todos os campos!");
  }

  let jsonConvenio = {
    nome_convenio: nomeConvenio
  }

  const options = {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(jsonConvenio),
  };

  fetch("http://localhost:3000/convenio/register", options).then((res) => {
    res.text().then((msg) => {
      alert(msg);
    });
  });
}

function sendMessage() {
  let mensagem = select('message').value
  let titulo = select('title').value

  if (!mensagem || !titulo) {
    return alert("Preencha todos os campos!");
  }

  let jsonMensagem = {
    mensagem,
    titulo
  }

  const options = {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(jsonMensagem),
  };

  fetch("http://localhost:3000/tipoMensagem/register", options).then((res) => {
    res.text().then((msg) => {
      alert(msg);
    });
  });
}

function sendBateriaExame() {
  let pedido_exame_id = select('pedidoExameId').value
  let descricao = select('descricao').value

  if (!pedido_exame_id || !descricao) {
    return alert("Preencha todos os campos!");
  }

  let jsonBateriaExame = {
    pedido_exame_id,
    descricao
  }

  const options = {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(jsonBateriaExame),
  };

  fetch("http://localhost:3000/bateriaExame/register", options).then((res) => {
    res.text().then((msg) => {
      alert(msg);
    });
  });
}
