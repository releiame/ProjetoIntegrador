import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/model/Funcionario';
import { FuncionarioLogin } from 'src/app/model/FuncionarioLogin';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrofuncionario',
  templateUrl: './cadastrofuncionario.component.html',
  styleUrls: ['./cadastrofuncionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  funcionario: Funcionario = new Funcionario
  funcionarioLogin: FuncionarioLogin = new FuncionarioLogin

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0)
  }
  cadastrarfuncionario() {
    this.authService.cadastrarfuncionario(this.funcionario).subscribe((resp: Funcionario) => {
      this.funcionario = resp
      this.router.navigate(['/funcionariologin'])
      alert('Colaborador cadastrado com sucesso!!!')
    })
  }
}
