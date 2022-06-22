import { Funcionario } from "./Funcionario"
import { Pedido } from "./Pedido"
import { Tag } from "./Tag"

export class Livros{
    public id_livro: number
    public capa: string
    public titulo: string
    public descricao: string
    public autor: string
    public temEstoque: boolean
    public valorUnitario: number
    public valorTotal: number
    public isbn: number
    public qtdeEstoque: number
    public qtdePedido: number
    public pedido: Pedido[]
    public tag: Tag[]
    public funcionario: Funcionario
    }