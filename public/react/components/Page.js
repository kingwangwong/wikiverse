import React from 'react';

export const Page = ({ page, displayPage, fetchSlug }) => {

  const handleClick = async () => {

  }
  console.log(page)
  return <>
    <h3 onClick={() => fetchSlug(page)}>{page.title}</h3>

  </>
}
