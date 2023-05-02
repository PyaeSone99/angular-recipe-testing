import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Recipe} from "../model/recipe";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {


  constructor(private http:HttpClient) {

  }

  public listAllRecipe():Observable<any>{
   return this.http.get<Recipe[]>("http://localhost:8080/recipe/list-recipes");
  }
}
