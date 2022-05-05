import { createReducer } from "@reduxjs/toolkit";


export const reducer = createReducer( {isAuthenticated:false}, {
  
  login: ( state ) =>
  {
    state.isAuthenticated = true;
  },
  logout: ( state ) =>
  {
    state.isAuthenticated = false;
  }
} );