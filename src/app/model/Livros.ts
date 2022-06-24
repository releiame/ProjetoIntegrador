import { Funcionario } from "./Funcionario"
import { Pedido } from "./Pedido"
import { Tag } from "./Tag"

export class Livros{
    public id_livros: number
    public capa: string
    public titulo: string
    public descricao: string
    public autor: string
    public valorUnitario: number
    public isbn: number
    public qtdeEstoque: number
    public qtdePedidoLivro: number
    public pedido: Pedido[]
    public tag: Tag
    public funcionario: Funcionario
    }