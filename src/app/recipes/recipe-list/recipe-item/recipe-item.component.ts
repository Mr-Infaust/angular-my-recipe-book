import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../../recipe';
import { RecipeService } from '../../../services/recipe.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;

  constructor(private receipeService:RecipeService) {
    this.recipe = { id: 0, text: '', headline: '', longtext: '' };
  }
}
