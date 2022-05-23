import { Component, OnInit } from '@angular/core';
import { CorrentistaService } from 'src/app/services/correntista.service';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';

@Component({
  selector: 'app-movimentao-list',
  templateUrl: './movimentao-list.component.html',
  styleUrls: ['./movimentao-list.component.css']
})
export class MovimentaoListComponent implements OnInit {
  movimentacoes:any;
  correntistas:any;
  correntista:any;
  constructor(private movimentacaoService: MovimentacaoService,
             private correntistaService: CorrentistaService
             ) { }

  ngOnInit(): void {
    //this.listMovimentacoes();
    this.exibirCorrentistas();
  }
  exibirCorrentistas(): void {
    this.correntistaService.list()
      .subscribe(
        data => {
          this.correntistas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
      }
  listMovimentacoes(): void {
   
    this.movimentacaoService.findByIdConta(this.correntista.id)
      .subscribe(
        data => {
         this.movimentacoes = data;
         console.log(data);
       },
       error=> {
         console.log(error);
       });

}
}