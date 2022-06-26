import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteLogin } from 'src/app/model/ClienteLogin';
import { Etiqueta } from 'src/app/model/Etiqueta';
import { AuthService } from 'src/app/service/auth.service';
import { EtiquetaService } from 'src/app/service/etiqueta.service';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() isHeader: boolean
  cliente: Cliente = new Cliente
  clienteLogin: ClienteLogin = new ClienteLogin
  tituloLivro: string
  nome: String
  id_cliente: number
  listaTags: Etiqueta[] 

  constructor(
    private router: Router,
    public authService: AuthService,
    private etiquetaService: EtiquetaService
  ) { }

  ngOnInit() {
    this.getAllEtiquetas()
    window.scroll(0, 0)
  }

  getAllEtiquetas(){
    this.etiquetaService.getAllEtiquetas().subscribe((resp: Etiqueta[]) =>{
      this.listaTags = resp
    })
  }

  sair() {
    this.router.navigate(['/home'])
    environment.token = ''
    environment.id_cliente = 0
  }

  cadastrar() {
    this.authService.cadastrar(this.cliente).subscribe((resp: Cliente) => {
      this.cliente = resp
      this.router.navigate(['/login'])
      alert('Cliente cadastrado com sucesso!!!')
    })
  }
  ngAfterContentChecked() {
    this.nome = environment.nome
    this.id_cliente = environment.id_cliente
    this.nome = this.nome.split(" ")[0]
  }

  logar(){
    this.authService.entrar(this.clienteLogin).subscribe((resp:ClienteLogin) =>{
      this.clienteLogin = resp

    environment.token = this.clienteLogin.token
    environment.nome = this.clienteLogin.nome
    environment.id_cliente = this.clienteLogin.id_cliente
    environment.email = this.clienteLogin.email
    
    this.router.navigate(['/home'])
    }, erro => {
      if(erro.status==500)
      {
        alert('E-mail ou senha incorretos!')
      }
    }
    )
  }

}
