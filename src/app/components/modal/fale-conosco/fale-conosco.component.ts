import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.css']
})
export class FaleConoscoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  mensagemEnviada() {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Mensagem enviada com sucesso!',
      showConfirmButton: true
    })
  }
}
