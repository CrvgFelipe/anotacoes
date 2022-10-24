class AnotacoesController{

    constructor(){
        this.arr = [];
    };

    addAnotacao(){
        const titulo = $('#titulo').val();
        const nota = $('#descricaoTarefa').val();
        const novaAnotacao = new Anotacoes(titulo, nota);
        this.arr.push(novaAnotacao);
        console.log(this.arr);
    }
}

var btn = document.querySelector('#btn');
const controller = new AnotacoesController()

btn.addEventListener('click', (e) =>{
    e.preventDefault();

    controller.addAnotacao()

} )