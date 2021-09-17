import { ON_HABITS_CHANGE,  
  ON_BUDGET_CHANGE, 
  ON_LOCATION_CHANGE, 
  ON_HOBBIES_CHANGE,
  ON_SUBMIT
 } from "./types";
import axios from "../utils/axios";

export const onHabitsChange = (newHabits) =>{
  return {
    type:ON_HABITS_CHANGE,
    payload:newHabits
  };
};
export const onHobbiesChange = (newHobbies) =>{
  return {
    type:ON_HOBBIES_CHANGE,
    payload:newHobbies
  }
};

export const onLocationChange = (address) => {
  return {
    type: ON_LOCATION_CHANGE,
    payload: address
  };
};
export const onBudgetChange = (budgetObject) => {
  return {
    type: ON_BUDGET_CHANGE,
    payload: budgetObject
  };
};
export const onSubmit = payload => async dispatch=>{
  dispatch( {
    type:ON_SUBMIT,
    payload
  })
};