import { Component } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tommato', 2),
    new Ingredient('Banana', 1)
  ];
  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }
}
