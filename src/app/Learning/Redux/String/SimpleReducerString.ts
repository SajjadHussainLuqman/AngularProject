import { Action } from "@ngrx/store";

export function SimpleReducerString (Detail : string = "Hello This is First Message", action : Action)
{
    console.log(Detail,action.type);

    switch (action.type) {
        
        case "Mazhar":
            return Detail = "Mazhar is my Best Friend"

        case "Rizwan":
            return Detail = "Rizwan is my Bestest Friend, He is my neighber and logotiya Yar"
        
        case "Majid":
            return Detail = "Majo is my Logtiya Friend, He is my relative"

        default:
             Detail;
    }
}