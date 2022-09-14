import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { Add } from './Add';
import { PageShow } from './PageShow';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);
	const [displayAdd, setDisplayAdd] = useState(false);
	const [displayPage, setDisplayPage] = useState(null);

	async function fetchPages() {
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}


	async function fetchSlug(page) {
		const response = await fetch(`${apiURL}/wiki/${page.slug}`);
		const data = await response.json();
		setDisplayPage(data)
	}

	useEffect(() => {
		fetchPages();
	}, []);

	return (
		<main>
			
			{displayAdd ? (
				<Add setDisplayAdd={setDisplayAdd} fetchPages={fetchPages} />
			) : displayPage ? (
				<PageShow displayPage={displayPage} setDisplayPage={setDisplayPage} fetchPages={fetchPages}/>
			) : (
				<>
					<h1>WikiVerse</h1>
					<h2>An interesting 📚</h2>
					<PagesList pages={pages} displayPage={displayPage} fetchSlug={fetchSlug}/>
					<button onClick={()=>setDisplayAdd(true)}>Add a new article</button>
				</>
			)}
		</main>
	)
}