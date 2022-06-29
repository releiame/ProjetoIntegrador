import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etiqueta } from 'src/app/model/Etiqueta';
import { Funcionario } from 'src/app/model/Funcionario';
import { AuthService } from 'src/app/service/auth.service';
import { EtiquetaService } from 'src/app/service/etiqueta.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() isHeader: boolean;
  listaTags: Etiqueta[]

  funcionario: Funcionario = new Funcionario
  
  constructor(
    private etiquetaService: EtiquetaService,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.getAllEtiquetas()
  }

  getAllEtiquetas(){
    this.etiquetaService.getAllEtiquetas().subscribe((resp: Etiqueta[]) =>{
      this.listaTags = resp
    })
  }

  cadastrarFuncionario() {
    console.log(this.funcionario.nome)
    console.log(this.funcionario.codf)
    console.log(this.funcionario.senha)
    this.authService.cadastrarfuncionario(this.funcionario).subscribe((resp: Funcionario) => {
      this.funcionario = resp
      this.router.navigate(['/home'])
      Swal.fire('Funcionario cadastrado com sucesso!')
    })
  }

}
