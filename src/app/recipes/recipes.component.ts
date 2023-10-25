import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})

export class RecipesComponent {
  @Input() recipes: Recipe[] = [];
  selectedRecipeHeadline = "";
  selectedRecipeText = "";

  getSelectedRecipe(selectedRecipe:Recipe) {
    this.selectedRecipeHeadline = selectedRecipe.headline;
    this.selectedRecipeText = selectedRecipe.longtext;

    return { text: this.selectedRecipeText, headline: this.selectedRecipeHeadline };
  }
}
