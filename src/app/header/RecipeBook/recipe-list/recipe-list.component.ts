import { Component, OnInit } from "@angular/core";
import { Recipe } from "../Recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "CandyFry",
      "Candy is tasty enough",
      "https://reterdeen.com/wp-content/uploads/2019/05/candytopia-ft-blog1117.jpg"
    ),
    new Recipe(
      "CandyFry",
      "Candy is tasty enough",
      "https://reterdeen.com/wp-content/uploads/2019/05/candytopia-ft-blog1117.jpg"
    )
  ];

  constructor() {}

  ngOnInit(): void {}
}
