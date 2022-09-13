import React from 'react';

export const Page = ({page, displayPage}) => {

  const handleClick = async ()=>{

  }
  return <>
    <h3>{page.title}</h3>
    <button onClick={()=>handleClick()}>Read Page</button>
  </>
} 
	