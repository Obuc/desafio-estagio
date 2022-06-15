// elementos necessários

const inputBox = document.querySelector('.campoInput input');
const addBtn = document.querySelector('.campoInput button') ;
const listaMetas = document.querySelector('.listaMetas');
const apagarTudoBtn = document.querySelector('.footer button');

// onkeyup

inputBox.onkeyup = () =>{
    let valorInserido = inputBox.value; //obter o valor que foi inserido
    if(valorInserido.trim() !=0){ //se o valor inserido não for um espaço
        addBtn.classList.add("active"); // ativa o botao de adicionar
    } else{
        addBtn.classList.remove("active"); //desativa o botao adicionar
    }
}

// utilizar o enter como click

document.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        const btn = document.querySelector("#add");

        btn.click();
    }
})

mostrarMetas(); // chamando a funcao

addBtn.onclick = () =>{  // ao clicar no botão adicionar
    let valorInserido = inputBox.value; // obtem o valor do campo

    let getLocalStorageData = localStorage.getItem("Nova Meta"); // obtendo armazenamento no Local Storage

    if (getLocalStorageData == null){ // se o localStorage não possuir dados
        listArray = []; //cria uma array em branco
    } else{
        listArray = JSON.parse(getLocalStorageData); // faz a troca do string JSON em um objeto JavaScript
    }
    listArray.push(valorInserido); // adiciona um novo valor na array
    localStorage.setItem("Nova Meta", JSON.stringify(listArray)); // faz a troca do objeto JavaScript em um string JSON
    mostrarMetas(); // chama a funcao mostrarMetas
    addBtn.classList.remove("active"); // desativa o botao adicionar após a tarefa for adicionada
}

function mostrarMetas(){
    let getLocalStorageData = localStorage.getItem("Nova Meta");
    if (getLocalStorageData == null){
        listArray = [];
    } else{
        listArray = JSON.parse(getLocalStorageData);
    }
    const metaPendenteNumb = document.querySelector(".metaPendente");
    metaPendenteNumb.textContent = listArray.length;
    if (listArray.length > 0){ // se o comprimento da array for maior que 0
        apagarTudoBtn.classList.add("active"); // ative o botao limpar tudo
    } else {
        apagarTudoBtn.classList.remove("active"); // se nao desative o botao limpar tudo
    }
    let newLiTag = "";
    listArray.forEach((element, index) =>{
        newLiTag += `<li>
        <label>
        <input type="checkbox" class="check">
        </label>${element} <span class="icon" onclick="apagarMeta(${index})">X</li>`;
    });
    listaMetas.innerHTML = newLiTag; //adiciona a nova meta na lista
    inputBox.value = ""; // deixa o campo em branco após adicionar uma nova tarefa
}


function apagarMeta(index){
    let getLocalStorageData = localStorage.getItem("Nova Meta");
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index,1); // excluir uma meta
    localStorage.setItem("Nova Meta", JSON.stringify(listArray));
    mostrarMetas();
}

// funcao para excluir todas as metas

apagarTudoBtn.onclick = () => {
let getLocalStorageData = localStorage.getItem("Nova Meta");
    if (getLocalStorageData == null){
        listArray = [];
    } else{
        listArray = JSON.parse(getLocalStorageData); // faz a troca do string JSON em um objeto JavaScript
        listArray = [];
    }
    localStorage.setItem("Nova Meta", JSON.stringify(listArray));
    mostrarMetas();
}