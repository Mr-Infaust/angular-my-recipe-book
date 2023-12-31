import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../recipe';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('./assets/recipes.json');
  }
}
