import { Component, OnInit } from '@angular/core';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';

@Component({
  selector: 'app-movimentao-list',
  templateUrl: './movimentao-list.component.html',
  styleUrls: ['./movimentao-list.component.css']
})
export class MovimentaoListComponent implements OnInit {
  movimentacoes:any;
  constructor(private movimentacaoService: MovimentacaoService) { }

  ngOnInit(): void {
    this.listMovimentacoes();
  }
  listMovimentacoes(): void {

    this.movimentacaoService.list()
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