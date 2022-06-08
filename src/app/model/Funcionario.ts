import { Livros } from "./Livros"

export class Funcionario{
    public id_funcionarios: number
    public codf: number
    public nome: string
    public senha: string
    public livros: Livros[]
}