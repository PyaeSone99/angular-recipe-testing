import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../service/recipe.service';
import { Recipe } from '../model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit{

  constructor(private recipeService:RecipeService){

  }

  recipes:Recipe[]=[]

  ngOnInit(): void {
      this.recipeService.listAllRecipe().subscribe(
        data => this.recipes = data,
        error => console.log(error)

      )
  }
}
