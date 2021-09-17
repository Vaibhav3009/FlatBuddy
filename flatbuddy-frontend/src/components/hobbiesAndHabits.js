import React,{useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { onHabitsChange, onHobbiesChange } from "../actions/hobbiesAndHabitsAction";

const HobbiesAndHabits = ()=>{
  const {hobbies, habits} = useSelector(state=>state.hobbiesAndHabits);
  const dispatch = useDispatch();
  const {
    movies,
    gaming,
    sports,
    reading,
    writing,
    photography,
    highVolumeMusic
  } = hobbies;
  const {
    superClean,
    nightOwl,
    earlyBird,
    smoking,
    drinking,
    vegetarian,
    student
  } = habits;
  return (
    <div>
      <div>
        <div onClick = {()=>dispatch(onHobbiesChange({...hobbies, movies:!movies}))}>
          Movies
        </div>
        <div onClick={() => dispatch(onHobbiesChange({ ...hobbies, gaming: !gaming }))}>
          Gaming
        </div>
        <div onClick={() => dispatch(onHobbiesChange({ ...hobbies, sports: !sports }))}>
          Sports
        </div>
        <div onClick={() => dispatch(onHobbiesChange({ ...hobbies, reading: !reading }))}>
          Reading
        </div>
        <div onClick={() => dispatch(onHobbiesChange({ ...hobbies, writing: !writing }))}>
          Writing
        </div>
        <div onClick={() => dispatch(onHobbiesChange({ ...hobbies, photography: !photography }))}>
          Photography
        </div>
        <div onClick={() => dispatch(onHobbiesChange({ ...hobbies, highVolumeMusic: !highVolumeMusic }))}>
          High Volume Music
        </div>
        <div onClick={() => dispatch(onHabitsChange({ ...habits, superClean: !superClean }))}>
          Super Clean
        </div>
        <div onClick={() => dispatch(onHabitsChange({ ...habits, nightOwl: !nightOwl }))}>
          Night Owl
        </div>
        <div onClick={() => dispatch(onHabitsChange({ ...habits, earlyBird: !earlyBird }))}>
          Early Bird
        </div>
        <div onClick={() => dispatch(onHabitsChange({ ...habits, smoking: !smoking }))}>
          Smoking
        </div>
        <div onClick={() => dispatch(onHabitsChange({ ...habits, drinking: !drinking }))}>
          Drinking
        </div>
        <div onClick={() => dispatch(onHabitsChange({ ...habits, vegetarian: !vegetarian }))}>
          Vegetarian
        </div>
        <div onClick={() => dispatch(onHabitsChange({ ...habits, student: !student }))}>
          Student
        </div>
      </div>
    </div>
  )
}

export default HobbiesAndHabits;