import React, { useState } from 'react';
import {Edit} from './Edit'
import apiURL from '../api';

export const PageShow = ({ displayPage, setDisplayPage, fetchPages }) => {

    const [displayEdit, setDisplayEdit] = useState(false)
    const kill = async () => {
        const response = await fetch(`${apiURL}/wiki/${displayPage.slug}`, {
            method: "DELETE"
        });
        const data = await response.json();
        setDisplayPage(null)
        fetchPages(data)
    }

    return (
        <>
            {displayEdit ? (
                <Edit setDisplayEdit={setDisplayEdit} displayPage={displayPage} fetchPages={fetchPages} setDisplayPage={setDisplayPage}/>
            ) : (<>
                <h1>{displayPage.title}</h1>
                <p>Author: {displayPage.author.name}</p>
                <p>Published: {displayPage.createdAt}</p>
                <p>{displayPage.content}</p>
                <button onClick={() => setDisplayPage(null)}>Back to List</button>
                <button onClick={()=>setDisplayEdit(true)}>Edit Page</button>
                <button onClick={() => kill()}>Delete Page</button>
            </>)}
        </>
    )
}