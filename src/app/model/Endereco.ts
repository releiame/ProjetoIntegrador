import { Cliente } from "./Cliente"

export class Endereco {
    public id_endereco: number
    public cep: string
    public numero: number
    public complemento: string
    public bairro: string
    public rua: string
    public cidade: string
    public nome_endereco: string
    public cliente: Cliente

}