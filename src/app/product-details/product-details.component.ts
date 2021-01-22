import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log("init!");
    this.route.paramMap.subscribe(params => {
      console.log(params);
      this.product = products[params.get("productId")];
    });
  }
  ngOnDestroy() {
    console.log("destoryed!");
  }
}
