import { Component } from '@angular/core';

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

interface BusinessEntity
{
  message : string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'AngularProject';

  stringResult : Observable<string>;

  constructor(private _Store:Store<BusinessEntity> )
  {
    this.stringResult = _Store.select("message");
  }

  CheckMazhar()
  {
    this._Store.dispatch({type:"Mazhar"});
  }

  CheckRizwan()
  {
    this._Store.dispatch({type:"Rizwan"});
  }

  CheckMajid()
  {
    this._Store.dispatch({type:"Majid"});
  }
}
