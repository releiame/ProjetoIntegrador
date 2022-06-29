import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteLogin } from 'src/app/model/ClienteLogin';
import { Etiqueta } from 'src/app/model/Etiqueta';
import { FuncionarioLogin } from 'src/app/model/FuncionarioLogin';
import { AuthService } from 'src/app/service/auth.service';
import { EtiquetaService } from 'src/app/service/etiqueta.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() isHeader: boolean
  cliente: Cliente = new Cliente
  clienteLogin: ClienteLogin = new ClienteLogin
  funcionarioLogin: FuncionarioLogin = new FuncionarioLogin
  tituloLivro: string
  nome: String
  idCliente = environment.id_cliente
  listaTags: Etiqueta[]
  funcionario: boolean
  nomeFuncionario: string
  id_funcionario: number
  codf: string

  constructor(
    private router: Router,
    public authService: AuthService,
    private etiquetaService: EtiquetaService
  ) { }

  ngOnInit() {
    this.funcionario = false
    window.scroll(0, 0)
    this.getAllEtiquetas()
  }

  getAllEtiquetas(){
    this.etiquetaService.getAllEtiquetas().subscribe((resp: Etiqueta[]) =>{
      this.listaTags = resp
    })
  }

  tipoUsuario(event: any){
    this.funcionario = true
  }

  sair() {
    this.router.navigate(['/home'])
    environment.token = ''
    environment.id_cliente = 0
    environment.codf = ''
    this.funcionario == false
    window.location.reload()
  }

  cadastrar() {
    this.authService.cadastrar(this.cliente).subscribe((resp: Cliente) => {
      this.cliente = resp
      this.router.navigate(['/login'])
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Cadastro realizado com sucesso!',
        showConfirmButton: true
      })
      this.cliente.senha = ''
      this.cliente.dataNascimento = new Date()
      this.cliente.email = ''
      this.cliente.nome = ''
      Swal.fire('Cadastro realizado com sucesso!')
    })
  }

  ngAfterContentChecked() {
    this.nome = environment.nome
    this.idCliente = environment.id_cliente
    this.nome = this.nome.split(" ")[0]
    this.id_funcionario = environment.id_funcionario
    this.codf = environment.codf
    this.nomeFuncionario = environment.nome
  }

  logar(){
    if(this.funcionario == true){
      this.authService.entrarfunc(this.funcionarioLogin).subscribe((resp:FuncionarioLogin) =>{
        this.funcionarioLogin = resp

        environment.codf = this.funcionarioLogin.codf
        environment.nome = this.funcionarioLogin.nome
        environment.token = this.funcionarioLogin.token
        environment.id_funcionario = this.funcionarioLogin.id_funcionario
        environment.senha = this.funcionarioLogin.senha
        
        this.router.navigate(['/home'])
      },erro => {
        if(erro.status == 500)
        {
          Swal.fire('CODF ou senha incorretos!')
        }else if(erro.status == 401){
          Swal.fire('CODF ou senha incorretos!')
        }else if(erro.status == 200){
          Swal.fire('OK')
        }
      }      
      )

    }else if(this.funcionario == false){
      this.authService.entrar(this.clienteLogin).subscribe((resp:ClienteLogin) =>{
        this.clienteLogin = resp

        environment.token = this.clienteLogin.token
        environment.nome = this.clienteLogin.nome
        environment.id_cliente = this.clienteLogin.id_cliente
        environment.email = this.clienteLogin.email
        environment.senha = this.clienteLogin.senha
        
        this.router.navigate(['/home'])
      }, erro => {
        if(erro.status==500)
        {
          Swal.fire('E-mail ou senha incorretos!')
        }else if(erro.status == 401){
          Swal.fire('E-mail ou senha incorretos!')
        }
      }
      )
    }
  }

}
