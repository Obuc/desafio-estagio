let listElement = document.querySelector('#list');

let inputElement = document.querySelector('#txt-input');

let buttonElement = document.querySelector('#btn-input');

let formulario = document.querySelector('form')

let metas = [];

function mostrarMetas() {
    
    listElement.innerHTML = '';

    for (meta of metas) {
        console.log(meta);

        let metaElement = document.createElement('li');
        let metaText = document.createTextNode(meta);

        let trashBtn = document.createElement('button');
        trashBtn.innerHTML = '<img src="./img/trash-icon.png" class="trash-btn row">';
        
        let posicao = metas.indexOf(meta);
        trashBtn.setAttribute('onclick', 'removeMetas('+ posicao +')');

        metaElement.appendChild(metaText);
        metaElement.appendChild(trashBtn);
        listElement.appendChild(metaElement);
    }
}

mostrarMetas();

function addMetas() {
    if (inputElement.value == '') {
        alert("Digite alguma meta!");
        return false;
    } else {
        let metaText = inputElement.value;
        metas.push(metaText);
        inputElement.value = '';
        mostrarMetas();
    }
}

buttonElement.onclick = addMetas;

function removeMetas(posicao) {
    metas.splice(posicao, 1)/
    mostrarMetas();
}
