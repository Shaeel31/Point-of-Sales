import { Component, OnInit, Inject } from '@angular/core';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { FirebaseFirestoreService } from './../../Services/firebase-firestore.service';
import { ProductModel } from './../../Models/product-model.model';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
// import firebase from 'firebase/app';
import {Observable} from 'rxjs';
import { finalize } from "rxjs/operators";
import { AngularFireStorage } from "@angular/fire/storage";
import { FirebaseApp } from "@angular/fire";
import * as firebase from 'firebase';
import { MessagingService } from 'app/Services/messaging.service';
@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public dialogService: NbDialogService, private toastrService: NbToastrService,
  private storage: AngularFireStorage,
  private messagingService : MessagingService,
  public Firestore: FirebaseFirestoreService, private router: Router, public auth: AngularFireAuth,
  @Inject(FirebaseApp) private _firebaseApp: firebase.default.app.App
  ) { }
  public configuration: Config;
  public columns: Columns[];

  BarCodevalue: number;
  EditProductBarCode: number;
  dialogRef: any;
  Product = {} as ProductModel;
  data = [];
  proddata = [];
  EditProduct = {} as ProductModel;
  itemToEdit: any;
  EditedItemArray = [];
  itemToDelete : any;
  selectedFile: File = null;
  downloadURL: Observable<string>;
  messaging : any
  message
  ngOnInit(): void {

    this.messagingService.requestPermission()
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
    // this.initializeFirebaseMessaging()
    this.configuration = { ...DefaultConfig };
    this.configuration.searchEnabled = true;
     this.ShowData();
    this.columns = [

      { key: 'Select', title: 'Select' },
      { key: 'BarCodeValue', title: 'SKU' },
      { key: 'ProductName', title: 'ProductName' },
      { key: 'Color', title: 'Color' },
      { key: 'SalePrice', title: 'Sale Price' },
      { key: 'CostPrice', title: 'Cost Price' },
      { key: 'Quantity', title: 'Quantity' },
    ];

  }

  initializeFirebaseMessaging(){
    this.messaging = firebase.default.messaging(this._firebaseApp) ;

    this.messaging.getToken({vapidKey: "BELdgrMH5URD1_jeo8geViTEaNGp2VpGDK1oZpBJrmFr8DyKclSQE9N0jZly8oUv7vmX8h_io_zuyJocYoZ-cak"}).then(data=>{
      console.log(data , "token data")
    }).catch(err=>{
      console.log(err , "err when calling")
    })
  }


  // DELETE AN EXISTING PRODUCT
  deleteProductDialog(row , DeleteDialog : any) {
    this.dialogRef = this.dialogService.open(DeleteDialog , {})
    this.itemToDelete =  row;
    }
  
    deleteListProduct(){
      if (this.itemToDelete){
        this.Firestore.deleteCollectionItem(this.itemToDelete.id).then(()=>{
          this.dialogRef.close();
          this.toastrService.success('Product Deleted' , 'Product Deleted From The List')
          
        }).catch((error)=>{
          console.log(error.message)
        })
      }
    }

    showProducts(){
      this.router.navigateByUrl('/ShowProducts');
    }

    // ADD AN IMAGE WITH THE PRODUCT
    uploadImageWithProduct(event) {
      var n = Date.now();
      const file = event.target.files[0];
      const filePath = `ProductsImages/${n}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
      // console.log(task , fileRef);
      console.log(fileRef.getDownloadURL());
      task.snapshotChanges().pipe(
          finalize(() => {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
              if (url) {
              this.Product.ImageURL =  url;
              }
              console.log(this.Product.ImageURL, 'Url associated with the Product');
            });
          })
        )
        .subscribe(url => {
          if (url) {
            console.log(url , 'URL CALL');
          }
        });
    }


  // EDIT AN EXISTING PRODUCT DETAILS

  editItem(EditDialogComponent: any, row) {
    let object = row;
    console.log(object);
    if (object) {
      this.EditProduct = object;
      this.EditProductBarCode = object.BarCodeValue;
      this.EditProduct.id = object.id;
    }
    this.dialogRef = this.dialogService.open(EditDialogComponent, {});
  }

  updateDatatoFirestore() {
    if (this.validateForm()) {
      this.EditProduct.BarCodeValue = this.EditProductBarCode;

      this.Firestore.updateDocument(this.EditProduct.id, this.EditProduct).then(() => {
        this.toastrService.success('Product Updated Successfully', 'PRODUCT Updated');
        this.EditProduct = {} as ProductModel;
        this.dialogRef.close();
      }).catch((error) => {
        console.log(error.message);
      })
    }

  }

  printProducts() {  
    this.Firestore.addPrintProducts(this.proddata);
    this.router.navigateByUrl('/print');
  }

  checkBoxChange(row: any, event: any) {
    row.status = event;
  }

  printValues(ProductPrintInfo: any) {
    var selectedValue = this.data.filter(x => x.status == true);
    console.log(selectedValue)
    if (selectedValue.length != 0) {
      this.proddata = selectedValue;
      console.log(this.proddata);
      this.dialogRef = this.dialogService.open(ProductPrintInfo, {})
    }
    else {
      this.toastrService.danger('Please Select Items First', 'NO ITEM SELECTED');
    }
  }


  closedialog() {
    this.dialogRef.close();
    this.proddata = [];
  }

  prodvalues(prodinfo: any) {
    this.dialogRef = this.dialogService.open(prodinfo, {})

  }

  // FORM VALIDATION
  validateForm() {
    var a = document.forms["Form"]["ProductName"].value.trim();
    var b = document.forms["Form"]["ProductColor"].value.trim();
    var c = document.forms["Form"]["Quantity"].value.trim();
    var d = document.forms["Form"]["SalePrice"].value.trim();
    var e = document.forms["Form"]["CostPrice"].value.trim();
    if (a == "" || b == "" || c == "" || d == "" || e == "") {
      this.toastrService.danger('Please Fill All The Required Fields', 'ADD PRODUCT')
      return false;
    }
    else {
      return true
    }
  }

  // Bar Code Generator Function
  BarCodeGenerator() {
    return Math.floor(Math.random() * 10000000000) + 10000000000;
  }


  // Show Data From FireBase Firestore 
  ShowData() {
    this.Firestore.showCollectionFirestore().subscribe((data: any) => {

      data.forEach(element  => {
        element.status = false;
      });
      this.data = data;
       console.log(this.data);
    });
  }


  // ADD DATA TO FIREBASE FIRESTORE

  AddDatatoFirestore() {
    if (this.validateForm()) {
      this.Product.BarCodeValue = this.BarCodevalue;
      this.dialogRef.close();
      this.Firestore.storedatainFirestore(this.Product).then(() => {
        this.toastrService.success('Product Added Successfully', 'PRODUCT ADDED');
        this.Product = {} as ProductModel;
      }).catch((error) => {
        console.log(error.message);
      })
    }

  }


  // Open Add Product Dialog Box
  Dialog1(MyDialogComponent: any) {
    this.BarCodevalue = this.BarCodeGenerator();
    this.dialogRef = this.dialogService.open(MyDialogComponent, {});

  }

}
