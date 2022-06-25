import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteLogin } from 'src/app/model/ClienteLogin';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cliente: Cliente = new Cliente
  clienteLogin: ClienteLogin = new ClienteLogin


  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  sair() {
    this.router.navigate(['/header'])
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

  entrar() {
    this.authService.entrar(this.clienteLogin).subscribe((resp: ClienteLogin) => {
      this.clienteLogin = resp

      environment.token = this.clienteLogin.token
      environment.id_cliente = this.clienteLogin.id_cliente
      environment.nome = this.clienteLogin.nome

      // this.router.navigate(['/header-inicio-log', '/carousel', '/page1'])
    }, erro => {
      if (erro.status == 500) {
        alert('Usuário ou senha incorretos.')
      } else {
        alert('Usuário logado com sucesso')
      }
    }
    )
  }

}
