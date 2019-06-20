export class Logista{

    id: string;
    nome: string;
    telefone: string;
    email: string;
    endereco: string;
    cnpj: string;

    constructor(){
    }

    // Dados do firebase
    setDados(obj : any){
        this.nome = obj.nome;
        this.telefone = obj.telefone;
        this.email = obj.email;
        this.endereco = obj.endereco;
        this.cnpj = obj.cep;
    }
}