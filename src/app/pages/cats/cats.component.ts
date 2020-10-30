import { Component, OnInit } from '@angular/core';
import { CatService } from 'src/app/services/cat.service';
import { Cat } from 'src/app/models/Cat';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  
  cats: Cat[] = [];
  displayedColumns: string[] = ['nom', 'age', 'race', 'vivant'];

  constructor(private catService: CatService) {
    this.catService.getAll().subscribe( data => {
      this.cats = data;
      console.log(this.cats);
    })
   }

  ngOnInit(): void {
  }

}
