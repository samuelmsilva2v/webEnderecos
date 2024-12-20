import { Routes } from '@angular/router';
import { CadastrarEnderecoComponent } from './cadastrar-endereco/cadastrar-endereco.component';
import { ConsultarEnderecosComponent } from './consultar-enderecos/consultar-enderecos.component';
import { EditarEnderecoComponent } from './editar-endereco/editar-endereco.component';

export const routes: Routes = [
    {
        path: 'app/cadastrar-endereco',
        component: CadastrarEnderecoComponent
    },
    {
        path: 'app/consultar-enderecos',
        component: ConsultarEnderecosComponent
    },
    {
        path: 'app/editar-endereco/:id',
        component: EditarEnderecoComponent
    },
    {
        path: '', pathMatch: 'full',
        redirectTo: '/app/consultar-clientes'
    }
];
