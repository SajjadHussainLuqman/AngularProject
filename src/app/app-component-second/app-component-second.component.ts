import { Component } from '@angular/core';


import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { POST } from '../Learning/Redux/Counter/post.model';
import * as PostActions from '../Learning/Redux/Counter/post.actions';

interface AppState {
  post : POST;
}


@Component({
  selector: 'app-app-component-second',
  templateUrl: './app-component-second.component.html',
  styleUrls: ['./app-component-second.component.css']
})
export class AppComponentSecondComponent  {

  postData : Observable<POST>;

  text : string;
  
  constructor(private _store: Store<AppState>) {
    this.postData = _store.select("post");
   }

   editText()
   {
     this._store.dispatch(new PostActions.EditTextActionClass(this.text));
   }

   resetPost()
   {
     this._store.dispatch(new PostActions.ResetActionClass());
   }
 
   upPost()
   {
     this._store.dispatch(new PostActions.UpvoteActionClass());
   }

   downPost()
   {
     this._store.dispatch(new PostActions.DownvoteActionClass());
   }

}
