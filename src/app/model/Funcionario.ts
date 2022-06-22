import { Livros } from "./Livros"

export class Funcionario{
    public id_funcionarios: number
    public codf: string
    public nome: string
    public senha: string
    public livros: Livros[]
}