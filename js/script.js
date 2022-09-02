/*Arquivo com funções JavaScript*/


/*Função chamada ao carregar página (Faz as chamadas necessárias para esse evento*/
function loadEvent(){
    changeBg(getBg())
}

/*Esta função muda o background do body
*
*color -> cor em hexadecimal (ex: #FFF)
*/
function changeBg (color) {
    document.body.style.backgroundColor = color;
    localStorage.setItem('color', color)
}

/*Esta função pega a cor que está gravada no localStorage
*
*Retorna a cor em hexadecimal 
*/
function getBg(){
    return localStorage.getItem('color')
}

/*Esta função limpa todos os controles de um formulário (classe: form-control)*/
function limparForm(){
    var controles = document.getElementsByClassName('form-control')
    for( var i = 0; i< controles.length; i++){
        controles[i].value = '';
    }
}