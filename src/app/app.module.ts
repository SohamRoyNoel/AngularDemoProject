import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './header/ShoppingList/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './header/ShoppingList/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './header/RecipeBook/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './header/RecipeBook/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './header/RecipeBook/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
