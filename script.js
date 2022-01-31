const quadro = document.querySelector('#pixel-board');
const input = document.querySelector('#board-size');

const horizontal = 5;
const vertical = 5;

for (let index = 0; index < horizontal; index += 1) {
  for (let index2 = 0; index2 < vertical; index2 += 1) {
    const caixa = document.createElement('div');
    caixa.classList.add('pixel');
    quadro.appendChild(caixa);
  }
}

const coresSecao = document.querySelector('#color-palette');

function selecaoCores(event) {
  const selecao = document.querySelector('.selected');
  selecao.classList.remove('selected');
  event.target.classList.add('selected');
}

coresSecao.addEventListener('click', selecaoCores);

function mudarCor(event) {
  const selecao = document.querySelector('.selected');
  if (selecao.classList.contains('black')) {
    event.target.style.backgroundColor = 'black';
  }
  if (selecao.classList.contains('red')) {
    event.target.style.backgroundColor = 'red';
  }
  if (selecao.classList.contains('green')) {
    event.target.style.backgroundColor = 'green';
  }
  if (selecao.classList.contains('blue')) {
    event.target.style.backgroundColor = 'blue';
  }
}

quadro.addEventListener('click', mudarCor);

const botao = document.querySelector('#clear-board');

function limparBranco() {
  const pixelado = quadro.children;
  for (let index = 0; index < pixelado.length; index += 1) {
    pixelado[index].style.backgroundColor = 'white';
  }
}

botao.addEventListener('click', limparBranco);

const botaoGerado = document.querySelector('#generate-board');

function remove() {
  while (quadro.firstChild) {
    quadro.firstChild.remove();
  }
}

function colocaQuadro(inputx) {
  for (let index = 0; index < inputx; index += 1) {
    for (let i = 0; i < inputx; i += 1) {
      const box = document.createElement('div');
      box.classList.add('pixel');
      quadro.appendChild(box);
    }
    const sequinte = document.createElement('br');
    quadro.appendChild(sequinte);
  }
}

function tamanhoQuadro() {
  if (!input.value) {
    alert('Board inválido!');
  } else {
    remove();
    let inputx = parseInt(input.value);
    if (inputx < 5) {
      inputx = 5;
      colocaQuadro(inputx);
    } else if (inputx > 50) {
      inputx = 50;
      colocaQuadro(inputx);
    } else {
      colocaQuadro(inputx);
    }
  }
}

botaoGerado.addEventListener('click', tamanhoQuadro);
