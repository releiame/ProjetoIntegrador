import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteLogin } from 'src/app/model/ClienteLogin';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cliente: Cliente = new Cliente

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }
  cadastrar() {
    this.authService.cadastrar(this.cliente).subscribe((resp: Cliente)=>{
      this.cliente = resp
      this.router.navigate(['/login'])
      alert('Cliente cadastrado com sucesso!!!')
    })
  }
}
