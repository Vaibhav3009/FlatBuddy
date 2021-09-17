import React from 'react';
import LeftSideBar from './leftSideBar';
import HobbiesAndHabits from './hobbiesAndHabits';
import { useSelector , useDispatch} from 'react-redux';
import { onSubmit } from '../actions/hobbiesAndHabitsAction';
const Dashboard = () =>{
  const state = useSelector(state => state.hobbiesAndHabits);
  const dispatch = useDispatch();
  return(
    <div>
      <LeftSideBar/>
      <HobbiesAndHabits/>
      <div>
        <button onClick = {()=>{dispatch(onSubmit(state))}}
        >Submit</button>
      </div>
    </div>
  )
}

export default Dashboard;