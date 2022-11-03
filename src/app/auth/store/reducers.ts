import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { registerAction } from 'src/app/auth/store/actions/register.action';

import { Action, createReducer, on } from '@ngrx/store';


const initialState: AuthStateInterface = {
  isSubmitting: false
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true
    })
  )
);

export function reducer(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
