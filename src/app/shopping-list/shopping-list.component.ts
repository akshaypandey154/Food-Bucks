import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../model/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

	ingredients: Ingredient[] =[
			new Ingredient('Apples',20),
			new Ingredient('Banana',50),
			new Ingredient('Tomatoes',100)
	];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}
