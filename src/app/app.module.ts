import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule  } from "@ngrx/store";
import { SimpleReducerString } from './Learning/Redux/String/SimpleReducerString';
import { PostReducerFunction } from './Learning/Redux/Counter/post.reducer';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppComponentSecondComponent } from './app-component-second/app-component-second.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponentSecondComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ message: SimpleReducerString, post : PostReducerFunction }),
  ],
  providers: [],
  bootstrap: [AppComponentSecondComponent]
})
export class AppModule { }
