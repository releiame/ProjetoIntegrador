import { Component, OnInit } from '@angular/core';
import { FuncionarioLogin } from 'src/app/model/FuncionarioLogin'
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-funcionariologin',
  templateUrl: './funcionariologin.component.html',
  styleUrls: ['./funcionariologin.component.css']
})
export class FuncionarioLoginComponent implements OnInit {

  funcionarioLogin: FuncionarioLogin = new FuncionarioLogin

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  entrarfunc() {
    this.auth.entrarfunc(this.funcionarioLogin).subscribe((resp: FuncionarioLogin) => {
      this.funcionarioLogin = resp

      environment.token = this.funcionarioLogin.token
      environment.id_funcionarios = this.funcionarioLogin.id_funcionarios

      this.router.navigate(['/header-inicio-log', '/carousel', '/page1'])
    }, erro => {
      if (erro.status == 500) {
        alert('Matrícula ou senha incorretos.')
      }
    }
    )
  }
}
