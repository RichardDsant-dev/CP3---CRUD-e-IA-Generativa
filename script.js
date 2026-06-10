var filmes = ["Inception", "Interstellar", "The Dark Knight"];

function fazerLogin() {
  var usuario = document.getElementById("input-usuario").value;
  var senha = document.getElementById("input-senha").value;
  var erroEl = document.getElementById("erro-login");

  if (usuario.trim() === "" || senha.trim() === "") {
    mostrarErro(erroEl, "Preencha o usuário e a senha antes de continuar.");
    return;
  }

  if (usuario !== "aluno" || senha !== "fiap2025") {
    mostrarErro(erroEl, "Usuário ou senha incorretos. Tente novamente.");
    return;
  }

  document.getElementById("tela-login").style.display = "none";
  document.getElementById("tela-lista").style.display = "block";
  renderizarLista();
}

function fazerLogout() {
  document.getElementById("tela-lista").style.display = "none";
  document.getElementById("tela-login").style.display = "flex";
  document.getElementById("input-usuario").value = "";
  document.getElementById("input-senha").value = "";
  document.getElementById("erro-login").classList.remove("visivel");
}

function adicionarAoFinal() {
  var input = document.getElementById("input-filme");
  var valor = input.value.trim();
  var erroEl = document.getElementById("erro-lista");

  if (valor === "") {
    mostrarErro(erroEl, "O nome do filme não pode estar vazio.");
    return;
  }

  filmes.push(valor);
  input.value = "";
  esconderErro(erroEl);
  renderizarLista();
}

function adicionarAoInicio() {
  var input = document.getElementById("input-filme");
  var valor = input.value.trim();
  var erroEl = document.getElementById("erro-lista");

  if (valor === "") {
    mostrarErro(erroEl, "O nome do filme não pode estar vazio.");
    return;
  }

  filmes.unshift(valor);
  input.value = "";
  esconderErro(erroEl);
  renderizarLista();
}

function editarItem(index) {
  var valorAtual = filmes[index];
  var novoValor = prompt("Editar filme:", valorAtual);

  if (novoValor === null || novoValor.trim() === "") {
    return;
  }

  filmes[index] = novoValor.trim();
  renderizarLista();
}

function removerItem(index) {
  filmes.splice(index, 1);
  renderizarLista();
}

function renderizarLista() {
  var lista = document.getElementById("lista-filmes");
  var contador = document.getElementById("contador-filmes");

  contador.textContent = filmes.length === 1
    ? "1 filme na lista"
    : filmes.length + " filmes na lista";

  if (filmes.length === 0) {
    lista.innerHTML = '<li class="lista-vazia">Nenhum filme na lista ainda. Adicione o primeiro!</li>';
    return;
  }

  var html = "";
  for (var i = 0; i < filmes.length; i++) {
    html += '<li class="item-filme">';
    html += '<span class="item-numero">' + (i + 1) + '</span>';
    html += '<span class="item-nome">' + filmes[i] + '</span>';
    html += '<button class="btn-editar" onclick="editarItem(' + i + ')">Editar</button>';
    html += '<button class="btn-remover" onclick="removerItem(' + i + ')">Remover</button>';
    html += '</li>';
  }

  lista.innerHTML = html;
}

function mostrarErro(elemento, mensagem) {
  elemento.textContent = mensagem;
  elemento.classList.add("visivel");
}

function esconderErro(elemento) {
  elemento.textContent = "";
  elemento.classList.remove("visivel");
}

renderizarLista();
