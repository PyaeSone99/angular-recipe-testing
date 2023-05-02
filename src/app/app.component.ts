import { Component, OnInit } from '@angular/core';
import { RecipeService } from './service/recipe.service';
import { Observable } from 'rxjs';
import { Recipe } from './model/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  recipes$! : Observable<Recipe[]>

  constructor(private recipeService:RecipeService){

  }

  public listAllRecipes():void{
    this.recipes$ = this.recipeService.listAllRecipe();
  }

  ngOnInit(): void {
    // this.recipes$ = this.recipeService.listAllRecipe();
  }

}
