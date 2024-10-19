import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-cadastrar-endereco',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxMaskDirective],
  providers: [provideNgxMask()],
  templateUrl: './cadastrar-endereco.component.html',
  styleUrl: './cadastrar-endereco.component.css'
})
export class CadastrarEnderecoComponent {

  mensagem: string = '';

  constructor(
    private httpClient: HttpClient
  ) {}

  formulario = new FormGroup({
    logradouro: new FormControl('', [Validators.required]),
    numero: new FormControl('', [Validators.required]),
    complemento: new FormControl('', [Validators.required]),
    bairro: new FormControl('', [Validators.required]),
    cidade: new FormControl('', [Validators.required]),
    uf: new FormControl('', [Validators.required]),
    cep: new FormControl('', [Validators.required])
  })

  cadastrarEndereco(){

    this.httpClient.post(
      'http://localhost:8080/api/enderecos',
      this.formulario.value,
      {responseType: 'text'}
    ).subscribe({
      next: (resposta) => {
        this.mensagem = resposta;
        this.formulario.reset()
      }
    })
  }
}
