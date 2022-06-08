import { Funcionario } from "./Funcionario"
import { Pedido } from "./Pedido"

export class Livros{
    public id_livro: number
    public titulo: string
    public descicao: string
    public autor: string
    public valor: number
    public pedido: Pedido[]
    public funcionario: Funcionario
    }