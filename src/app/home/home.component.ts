import { Component, inject } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  recipes: Recipe[] = [];
  recipeService: RecipeService = inject(RecipeService);

  constructor() { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
  }

}
