import React, { useEffect, useState } from 'react';
import data from '../data'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function TopPicks() {

  const [tasks, setTasks] = useState(data);


  useEffect(() => {
    // Load tasks from localStorage on component mount
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);
  const fav = tasks.filter((e)=>{
    return e.fav == true
  })
  return (
    <>
    <h1 className='toppicks'>My Favorites</h1>
    <div className='topPick-card lg'>
      <Splide options={{perPage:4}}>
     {
       fav.map((item) =>{
        return(
          <SplideSlide key={item.id}>
          <div className='d-main m-2' >
            <div className='d-sub'>
            </div>
            <img src={item.image}/>
          </div>  
          </SplideSlide>
        )
       })
     } 
     </Splide>
    </div>
    </>
  )
}

export default TopPicks;
