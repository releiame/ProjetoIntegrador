import { Cliente } from "./Cliente"
import { Livros } from "./Livros"

export class Pedido{
    public id_pedido: number
    public cliente: Cliente
    public livros:Livros[]
    public valorTotal: number
    public frete: number
    public data: Date
    public tipo: String
}