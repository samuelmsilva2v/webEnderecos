import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-consultar-enderecos',
  standalone: true,
  imports: [CommonModule, NgxMaskDirective, NgxMaskPipe, NgxPaginationModule],
  providers:[provideNgxMask()],
  templateUrl: './consultar-enderecos.component.html',
  styleUrl: './consultar-enderecos.component.css'
})
export class ConsultarEnderecosComponent {

  enderecos: any[] = [];
  paginador: number = 1;
  mensagem: string = '';

  constructor(
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.httpClient.get('http://localhost:8080/api/enderecos').subscribe({
      next: (resposta) => {
        this.enderecos = resposta as any[];
      }
    })
  }

  excluirEndereco(id: string) {
    if(confirm('Deseja realmente excluir o endereço selecionado?')) {
      this.httpClient.delete('http://localhost:8080/api/enderecos/' + id, { responseType: 'text' }).subscribe({
        next: (resposta) => {
          this.mensagem = resposta;
          this.ngOnInit();
        }
      })
    }
  }

  handlePageChange(event: any) {
    this.paginador = event;
  }
}
