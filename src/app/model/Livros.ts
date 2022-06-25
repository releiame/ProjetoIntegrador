import { Funcionario } from "./Funcionario"
import { Pedido } from "./Pedido"
import { Etiqueta } from "./Etiqueta"

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
    public etiqueta: Etiqueta
    public funcionario: Funcionario
    }