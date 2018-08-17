import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-chardetail',
  templateUrl: './chardetail.component.html',
  styleUrls: ['./chardetail.component.css']
})
export class ChardetailComponent implements OnInit {

  constructor(private matRef:MatDialogRef<ChardetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

}
