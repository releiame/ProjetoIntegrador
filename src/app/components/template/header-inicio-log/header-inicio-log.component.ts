import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-header-inicio-log',
  templateUrl: './header-inicio-log.component.html',
  styleUrls: ['./header-inicio-log.component.css']
})
export class HeaderInicioLogComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  sair() {
    this.router.navigate(['/header-inicio-deslog'])
    environment.token = ''
    environment.id_cliente = 0
  }
}
