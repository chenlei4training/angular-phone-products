import { Component, EventEmitter, OnInit } from "@angular/core";
import { Input, Output } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;

  @Output() click9 = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  hi() {
    // console.log("OnInit", OnInit);
    // console.log("OnInit", product);

    this.product.showMe();
  }
}
