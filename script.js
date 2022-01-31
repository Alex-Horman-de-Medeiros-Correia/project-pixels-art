const quadro = document.querySelector('#pixel-board');

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
