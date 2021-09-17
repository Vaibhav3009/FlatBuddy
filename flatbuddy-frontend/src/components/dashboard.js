import React,{useEffect,useState} from 'react';
import LeftSideBar from './leftSideBar';
import HobbiesAndHabits from './hobbiesAndHabits';
import { useSelector , useDispatch} from 'react-redux';
import SignOutButton from './SignOut';
import { onSubmit } from '../actions/hobbiesAndHabitsAction';
import userAdd from '../actions/UserAction';
import { getResults } from '../actions/hobbiesAndHabitsAction';

const Dashboard = () =>{
  const state = useSelector(state => {console.log(state)
    return(state.hobbiesAndHabits)});
  
  const userState =useSelector(state => state.user)
   
  const results = useSelector(state=>state.results)
  console.log(state)
  const payload = {
    state,id:localStorage.getItem('userId')
  }
  const dispatch = useDispatch();

 

  const getResultPage = async() => {
    console.log("asdasdsadsad")
    
    await dispatch(onSubmit(payload))
    dispatch(getResults(payload))
    
    console.log("result",results)
  }


  return(
    <div>
      <LeftSideBar/>
      <HobbiesAndHabits/>
      <div>
        <button onClick = {()=>getResultPage()}
        >Submit</button>
      </div>
      <div>
<SignOutButton/>
      </div>
    </div>
  )
}

export default Dashboard;