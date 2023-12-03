

const inputDiv = document.querySelector('.inputDiv');
const input = document.getElementById('input');
const button = document.getElementById('button');
const contentDiv = document.querySelector('.contentDiv');


button.addEventListener('click', go);
function go (){
    if(input.value != ""){
    let paragraf = document.createElement('p');
    let deleteButton =document.createElement('div');
    deleteButton.classList.add('deleteButton');
    deleteButton.innerText = 'X';
    paragraf.innerText = input.value;
    contentDiv.appendChild(paragraf);
    paragraf.appendChild(deleteButton);
    input.value = "";

    deleteButton.addEventListener('click', function(){
      contentDiv.removeChild(paragraf);  
    })

}
}
