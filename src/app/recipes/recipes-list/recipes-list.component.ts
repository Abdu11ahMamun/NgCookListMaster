import { Component, EventEmitter,Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent {
  @Output() recipeWasSelected= new EventEmitter<Recipe>();
  recipes: Recipe[] =[
    new Recipe('Test Name', 'Test Description', 'https://fodguru.com/wp-content/uploads/2023/09/Untitled-design.png')
  ];

  constructor(){}
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
