import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GotService {
 itemType:any='';

  constructor( public htpc:HttpClient) 
  {

   }

rooturlgot(itemType)
{
  
 if(itemType=='books'){
return  this.htpc.get('https://www.anapioficeandfire.com/api/'+itemType)
 
}
else if(itemType=='houses'){
 return this.htpc.get('https://www.anapioficeandfire.com/api/'+itemType)

 }
 else
 {
 return this.htpc.get('https://www.anapioficeandfire.com/api/'+itemType)
   
 }
}


// bookofgot()
// {
//   return this.htpc.get('https://www.anapioficeandfire.com/api/books')
// }

// characterforgot()
// {
//   return this.htpc.get('https://www.anapioficeandfire.com/api/characters')
// }
// housesforgot()
// {
//   return this.htpc.get('https://www.anapioficeandfire.com/api/houses')
// }


}