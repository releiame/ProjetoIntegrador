import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { Etiqueta } from 'src/app/model/Etiqueta';
import { Funcionario } from 'src/app/model/Funcionario';
import { Livros } from 'src/app/model/Livros';
import { Pedido } from 'src/app/model/Pedido';
import { AuthService } from 'src/app/service/auth.service';
import { EtiquetaService } from 'src/app/service/etiqueta.service';
import { LivrosService } from 'src/app/service/livros.service';
import { PedidoService } from 'src/app/service/pedido.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  idLivro: number
  listaLivros: Livros[]
  livro: Livros = new Livros()
  tituloLivro: string

  tentando: Livros[]

  listaPedidos: Pedido[]
  pedido: Pedido = new Pedido
  cliente: Cliente = new Cliente

  listaEtiquetas: Etiqueta[]
  nomeEtiqueta: string
  etiqueta: Etiqueta = new Etiqueta()
  idEtiqueta: number

  funcionario: Funcionario = new Funcionario()
  idFuncionario = environment.id_funcionario
  nomeFuncionario: string

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private livrosService: LivrosService,
    private etiquetaService: EtiquetaService,
    public authService: AuthService,
    private pedidosService: PedidoService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.codf == ''){
      this.router.navigate(['/home'])
    }

    let id = this.route.snapshot.params['id_funcionario']

    this.findByFuncionarioId(id)
    this.getAllLivros()
    this.getAllEtiquetas()
    this.getAllPedidos()

  }

  ngAfterContentChecked() {
    this.nomeFuncionario = environment.nome
  }

  getAllLivros(){
    this.livrosService.getAllLivros().subscribe((resp: Livros[]) =>{
      this.listaLivros = resp
    })
  }

  findByIdLivros(id_livros: number){
    this.livrosService.getLivrosById(this.idLivro).subscribe((resp: Livros) =>{
      this.livro = resp
    })
  }

  findByIdPedido(id_pedido: number){
    this.pedidosService.getPedidoById(id_pedido).subscribe((resp: Pedido) =>{
      this.pedido = resp
    })
  }

  findByIdCliente(id_cliente: number){
    this.authService.getClienteById(id_cliente).subscribe((resp: Cliente) =>{
      this.cliente = resp
    })
  }

  findByTituloLivro(){
    if(this.tituloLivro == ''){
      this.getAllLivros()
    }else{
      this.livrosService.getByTitulo(this.tituloLivro).subscribe((resp: Livros[]) =>{
        this.listaLivros = resp
      })
    }
  }

  getAllPedidos(){
    this.pedidosService.getAllPedidos().subscribe((resp: Pedido[]) =>{
      this.listaPedidos = resp
      this.getAllLivros()
    })
  }

  getAllEtiquetas(){
    this.etiquetaService.getAllEtiquetas().subscribe((resp: Etiqueta[]) =>{
      this.listaEtiquetas = resp
    })
  }

  findByIdEtiqueta(){
    this.etiquetaService.getByIdEtiqueta(this.idEtiqueta).subscribe((resp: Etiqueta) =>{
      this.etiqueta = resp
    })
  }

  findByNomeEtiqueta(){
    if(this.nomeEtiqueta == ''){
      this.getAllEtiquetas()
    }else{
      this.etiquetaService.getByNome(this.nomeEtiqueta).subscribe((resp: Etiqueta[]) =>{
        this.listaEtiquetas = resp
      })
    }
  }

  findByFuncionarioId(id: number){
    this.authService.getByIdFuncionario(id).subscribe((resp: Funcionario) =>{
      this.funcionario = resp
    })
  }

  cadastrarTag(){
    this.etiquetaService.cadastrar(this.etiqueta).subscribe((resp: Etiqueta) => {
      this.etiqueta = resp
      this.getAllEtiquetas()
      this.etiqueta = new Etiqueta()
      this.router.navigate(['/funcionario'])
      Swal.fire('Tag cadastrado com sucesso!')
    })
  }

  apagarTag(id_etiqueta: number){
    Swal.fire({
      title: 'Tem certeza?',
      text: "A tag será apagada",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.etiquetaService.deleteTag(id_etiqueta).subscribe(() =>{
          Swal.fire(
            'Apagado!',
            'A tag foi deletada.',
            'success'
          )
          this.getAllEtiquetas()
        }, erro =>{
          if(erro.status == 500){
              Swal.fire(
                'A tag não pode ser apagada pois tem livros cadastrados com ela',
                '',
                'error'
              )
          }
        })
      }
    })
  }

  editarTag(id_etiqueta: number){
    this.etiquetaService.getByIdEtiqueta(id_etiqueta).subscribe((resp: Etiqueta) =>{
      this.etiqueta = resp
    })
  }

  buscarTag(id_etiqueta: number){
    this.etiquetaService.getByIdEtiqueta(id_etiqueta).subscribe((resp: Etiqueta)=>{
      this.etiqueta = resp
      this.etiqueta.livros = this.tentando
    })
  }

  confirmaEdit(id_etiqueta: number){
    console.log(this.etiqueta.nome)
    console.log(this.etiqueta.id_etiqueta)
    console.log(this.etiqueta.livros)
    this.etiqueta.livros = this.tentando
    this.etiquetaService.putTag(this.etiqueta).subscribe((resp: Etiqueta) =>{
      this.etiqueta = resp
      Swal.fire('Etiqueta atualizada com sucesso')
      this.router.navigate(['/funcionario'])
      this.getAllEtiquetas()
    })
  }

  enviarMensagem(id_pedido: number, id_cliente: number){
    this.findByIdCliente(id_cliente)
    this.findByIdPedido(id_pedido)
  }

  envio(){
    Swal.fire({
      title: 'Mensagem enviada',
      icon: 'success'
    })
  }
}
