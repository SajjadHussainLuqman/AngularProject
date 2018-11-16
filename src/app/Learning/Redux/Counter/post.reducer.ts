import { POST } from './post.model';
import * as PostActions from './post.actions';

export type AllActions = PostActions.All;

const DefaultState : POST = { text :'This is my Score Counter', likes:0 };

const NewState = (state ,newData) => {
    return Object.assign({},state,newData);
}

export function PostReducerFunction(state : POST = DefaultState , action: AllActions)
{
    console.log(action.type,state)

    switch (action.type) {
        
        case PostActions.Edit_TextEnum:
            return NewState(state, { text : action.payload });
        
        case PostActions.UPVOTEEnum:
            return NewState(state, { likes : state.likes + 1 });

        case PostActions.DOWNVOTEEnum:
            return NewState(state, { likes : state.likes - 1 });

        case PostActions.RESETEnum:
            return DefaultState;
    
        default:
            state;
    }


}