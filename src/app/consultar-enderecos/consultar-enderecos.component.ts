import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-consultar-enderecos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consultar-enderecos.component.html',
  styleUrl: './consultar-enderecos.component.css'
})
export class ConsultarEnderecosComponent {

  enderecos: any[] = [];

  constructor(
    private httpClient: HttpClient
  ) {}

  ngOnInit() {

    this.httpClient.get(
      'http://localhost:8080/api/enderecos'
    ).subscribe({
      next: (resposta) => {
        this.enderecos = resposta as any[];
      }
  })

  }
}
