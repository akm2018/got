import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';


import { RouterModule,Routes} from '@angular/router'
import { GotService } from './got.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import { DetailsViewComponent } from './details-view/details-view.component'
import { MatDialogModule,MatToolbarModule,MatCardModule,MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HousedetailComponent } from './housedetail/housedetail.component';
import { ChardetailComponent } from './chardetail/chardetail.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    DetailsViewComponent,
    HousedetailComponent,
    ChardetailComponent
    
    
    

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,

    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path:'books',component:BooksComponent},
      {path:'books/:bookId',component:DetailsViewComponent},
      {path:'houses/:houseId',component:DetailsViewComponent},
      {path:'characters/characterId',component:DetailsViewComponent}
    ])
  ],
  providers: [GotService],
  bootstrap: [AppComponent],
  entryComponents:[DetailsViewComponent,BooksComponent,ChardetailComponent,HousedetailComponent]
})
export class AppModule { }
