import { Component } from '@angular/core';
import { Resipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent {

  recipes: Resipe[] =[
    new Resipe('Test Name', 'Test Description', 'https://fodguru.com/wp-content/uploads/2023/09/Untitled-design.png')
  ];

  constructor(){}

}
