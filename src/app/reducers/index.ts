import { ActionReducerMap } from '@ngrx/store';

import { HikingReducer, HikingState } from './app.reducers';

export interface AppState {
    hiking: HikingState
}

export const appReducers: ActionReducerMap<AppState> = {
    hiking: HikingReducer
};
