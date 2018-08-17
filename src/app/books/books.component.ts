
import { GotService } from '../got.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {MatDialog} from '@angular/material/dialog';
import { DetailsViewComponent } from '../details-view/details-view.component';
import { Component, OnInit } from '@angular/core';
import { HousedetailComponent } from '../housedetail/housedetail.component';
import { ChardetailComponent } from '../chardetail/chardetail.component';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public itemValueProp:any;
  public bookdata:any = [];
  public characterdata:any;
  public housesdata:any;
  itemValue:any='';
  httpGetData:any;
  bookdata1:any;
  public category = ["--Select--","Books","Characters","Houses"]

 

  constructor( public gotserv:GotService, public spinner:NgxSpinnerService,public dialog:MatDialog) 
  {

   }
   
  ngOnInit()
  
  {

    
  }

  ShowAlertDetails(book:any)
  {
    //alert(book.name+ ", " +book.authors);
    this.dialog.open(DetailsViewComponent, 
      {data:{b1:book.name,b2:book.isbn,b3:book.authors,b4:book.mediaType,b5:book.country,
      b6:book.publisher,b7:book.released,b8:book.numberOfPages}});
  }


  ShowAlertDetails1(house:any)
  {
    //alert(book.name+ ", " +book.authors);
    this.dialog.open(HousedetailComponent, 
      {data:{h1:house.name,h2:house.coatOfArmsn,h3:house.seats,h4:house.region,
        h5:house.currentLord,h6:house.diedOut,h7:house.founded,h8:house.heir,
        h9:house.swornMembers,h10:house.titles,h11:house.words,h12:house.cadetBranches}});    
  }

  ShowAlertDetails2(character:any)
  {
    //alert(book.name+ ", " +book.authors);
    this.dialog.open(ChardetailComponent, 
      {data:{c1:character.aliases,c2:character.allegiances,c3:character.books,
        c4:character.born,c5:character.culture,c6:character.died,
        c7:character.father,c8:character.gender,c9:character.mother,
        c10:character.name,c11:character.titles,c12:character.spouse}});
  }
 
 
  
  



  

  DDLGetValue(itemValue:string)
  {
    if (itemValue == "--Select--")
    {
      alert("please select any items");
      //return false;
    }
    
else
{
  //console.log(this.itemValueProp);
  
  if(itemValue=="Books")
   {
  this.itemValueProp="Books";
  this.httpGetData = this.gotserv.rooturlgot(itemValue).subscribe(
    data=>{
      this.bookdata = data;
     
      console.log(data)
      });

      // spinner

      this.spinner.show();
setTimeout(() => {
  /** spinner ends after 5 seconds */
  this.spinner.hide();
}, 1000);
      
    
    }
   if(itemValue=="Houses")
   {
  this.itemValueProp="Houses";
  this.httpGetData = this.gotserv.rooturlgot(itemValue).subscribe(
    data=>{
      this.housesdata = data;
      console.log(data)
      });
// spinner
      this.spinner.show();
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 1000);

    }
   if(itemValue=="Characters")
   {
  this.itemValueProp="Characters";
  console.log(this.itemValueProp);
  this.httpGetData = this.gotserv.rooturlgot(itemValue).subscribe(
    data=>{
      this.characterdata = data;
      console.log(data)
      });

      //spinner
      this.spinner.show();
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 1000);

  }


}



   
  }


}