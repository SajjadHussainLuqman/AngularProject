import { Action } from "@ngrx/store";

// 1. Just Define Enum Values
export const Edit_TextEnum    = 'Edit';
export const UPVOTEEnum       = 'Upvote';
export const DOWNVOTEEnum     = 'Downvote';
export const RESETEnum        = 'Reset';

// 2. Define All Actions and Assign Enum Type

export class EditTextActionClass implements Action
{
    readonly type = Edit_TextEnum;
    constructor(public payload: string ){}
}

export class UpvoteActionClass implements Action 
{
    readonly type = UPVOTEEnum;
}

export class DownvoteActionClass implements Action 
{
    readonly type = DOWNVOTEEnum;
}

export class ResetActionClass implements Action 
{
    readonly type = RESETEnum;
}

// Export All Actions Classes as a Single Caller as a Abstraction in Reducer Class in Function input parameter
export type All =  EditTextActionClass | UpvoteActionClass | DownvoteActionClass | ResetActionClass ;