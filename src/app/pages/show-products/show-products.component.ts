import { Component, OnInit } from '@angular/core';
import { FirebaseFirestoreService } from '../../Services/firebase-firestore.service'
import { ProductModel } from './../../Models/product-model.model';
// import { SearchPipe } from 'app/Pipes/search-pipe.pipe';


@Component({
  selector: 'ngx-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss']
})
export class ShowProductsComponent implements OnInit {
availableProducts = [];
change : any;
searchEnabled : boolean = true;
  

  constructor(private Firestore : FirebaseFirestoreService  ) { 
  }

  ngOnInit(): void {
    this.getAvailableProducts();
  }
  getAvailableProducts() {
    this.Firestore.showCollectionFirestore().subscribe((data) => {
      this.availableProducts = data;
      // this.Products = data;
    });
  }

  myFunction() {
    debugger;
    var input, filter, cards, cardContainer, title, i;
    input = document.getElementById("myFilter");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("myProducts");
    cards = cardContainer.getElementsByClassName("card");
    console.log(cards);
    for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".card-title");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
  }


}
