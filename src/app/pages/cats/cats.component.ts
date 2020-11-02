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
  displayedColumns: string[] = ['id','nom', 'age', 'race', 'vivant'];
  particularCat: Cat;
  catId;

  constructor(private catService: CatService) {
    this.catService.getAll().subscribe( data => {
      this.cats = data;
      console.log(this.cats);
    })
  }

  ngOnInit(): void {
  }

  findCat(value) {
    console.log(value);
    if (value = parseInt(value,10)) {
      this.catService.getById(value).subscribe( data => {
        console.log(data);
        this.particularCat = data;
      })
    } else {
      alert('entrez une ID valide');
    } 
  }

}
