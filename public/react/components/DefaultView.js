import {React, useState, useEffect} from 'react';
import { PagesList } from './PagesList';
export const DefaultView = ({pages}) =>{


    return (
        <>
        <h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>
			<PagesList pages={pages}/>
        </>
    )
}