export class Marcas{

    id: string;
    nome: string;
    desc: string;

    constructor(){

    }
     // Dados do firebase
     setDados(obj : any){
        this.nome = obj.nome;
    }
}