import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-editar-endereco',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './editar-endereco.component.html',
  styleUrl: './editar-endereco.component.css'
})
export class EditarEnderecoComponent {
  
  mensagem: string = '';
  id: string = '';

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;

    this.httpClient.get('http://localhost:8080/api/enderecos/' + this.id).subscribe({
      next: (dados) => {
        this.formulario.patchValue(dados);
      }
    })
  }

  formulario = new FormGroup({
    logradouro: new FormControl('', [Validators.required]),
    numero: new FormControl('', [Validators.required]),
    complemento: new FormControl('', [Validators.required]),
    bairro: new FormControl('', [Validators.required]),
    cidade: new FormControl('', [Validators.required]),
    uf: new FormControl('', [Validators.required]),
    cep: new FormControl('', [Validators.required])
  })

  atualizarEndereco() {
    this.httpClient.put('http://localhost:8080/api/enderecos/' + this.id, this.formulario.value, { responseType: 'text' }).subscribe({
      next: (resposta) => {
        this.mensagem = resposta;
      }
    })
  }
}
