import { Component, OnInit } from '@angular/core';
import { ProdutsService } from 'src/app/Service/produts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productsList: any[] = [];

  constructor(private productservice: ProdutsService) {}

  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.productservice.getAllProducts().subscribe((res: any) => {
      this.productsList = res.data;
    });
  }
}
