import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import Search from './Search';
import { BudgetRange } from "../utils/constants";
import { onBudgetChange} from "../actions/hobbiesAndHabitsAction";

const LeftSideBar = () =>{
  const dispatch = useDispatch();
  return ( 
      <div>
        <Search />
        <div >
          <h4>Budget</h4>
         {
           BudgetRange.map((budgetObject, index)=>(
           <div key = {index} onClick={()=>dispatch(onBudgetChange(budgetObject)) }>
              {budgetObject.text}
           </div>
           ))
         }
        </div>
      </div>
  )
};


export default LeftSideBar;