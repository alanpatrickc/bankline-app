import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovimentaoListComponent } from './components/movimentao-list/movimentao-list.component';
import { MovimentacaoNewComponent } from './components/movimentao-new/movimentao-new.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import {LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { CorrentistaComponent } from './components/correntista/correntista.component';
registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    MovimentaoListComponent,
    MovimentacaoNewComponent,
    CorrentistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    CurrencyMaskModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
