import { Component, OnInit } from '@angular/core';
import { ClienteLogin } from 'src/app/model/ClienteLogin';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  clienteLogin:ClienteLogin = new ClienteLogin
  constructor(
    private auth: AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)

  }
  entrar(){
    this.auth.entrar(this.clienteLogin).subscribe((resp:ClienteLogin)=>{
      this.clienteLogin = resp

      environment.token = this.clienteLogin.token
      environment.id_cliente = this.clienteLogin.id_cliente
      environment.nome = this.clienteLogin.nome
      

      //this.router.navigate(['/header-inicio-log', '/carousel', '/page1'])
    }, erro => {
      if(erro.status==500) {
        alert('Usuário ou senha incorretos.')
      }else{
        alert('Usuário logado com sucesso')
      }
    }
    )
  }
}
