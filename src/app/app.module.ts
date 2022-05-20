import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovimentaoListComponent } from './components/movimentao-list/movimentao-list.component';
import { MovimentaoNewComponent } from './components/movimentao-new/movimentao-new.component';

@NgModule({
  declarations: [
    AppComponent,
    MovimentaoListComponent,
    MovimentaoNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
