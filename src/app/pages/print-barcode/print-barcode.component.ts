import { Component, OnInit } from '@angular/core';
import { FirebaseFirestoreService } from './../../Services/firebase-firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-print-barcode',
  templateUrl: './print-barcode.component.html',
  styleUrls: ['./print-barcode.component.scss']
})
export class PrintBarcodeComponent implements OnInit {

  constructor(public Firestore: FirebaseFirestoreService, private router: Router) { }
  data = [];
  ngOnInit(): void {
    this.getPrintData();
  }

  countera(i: number) {
    var b = new Array(i);
    return b;
  }




  getPrintData() {
    this.data = this.Firestore.getPrintData;
    if (this.data.length == 0) {
      this.router.navigateByUrl('/pages/dashboard');
    }
    console.log(this.data);
  }

}

