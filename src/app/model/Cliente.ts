import { Endereco } from "./Endereco"
import { Pedido } from "./Pedido"

export class Cliente{
    public id_cliente: number
    public email: string
    public senha: string
    public nome: string
    public dataNascimento: Date
    public pedido: Pedido[]
    public endereco: Endereco[]
}