import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class FirebaseFirestoreService {
  printBarCode: any = [];
  constructor(public afs: AngularFirestore) { }


  // Save Data In FireStore
  storedatainFirestore(data: any) {
    data.id = this.afs.createId();
    return this.afs.collection('Collection1').doc(data.id).set(data);
  }

  addPrintProducts(data) {
    this.printBarCode = data;
  }

  get getPrintData() {
    return this.printBarCode;
  }

  showCollectionFirestore() {
    return this.afs.collection('Collection1').valueChanges();
  }

  deleteCollectionItem(id : any){
   return this.afs.collection('Collection1').doc(id).delete();
  }

  updateDocument(id , data){
    return this.afs.collection('Collection1').doc(id).update(data);
  }
}
