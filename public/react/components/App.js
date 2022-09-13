import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { Add } from './Add';
import { Delete } from './Delete';
import { PageShow } from './PageShow';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);
	const [displayAdd, setDisplayAdd] = useState(null);
	const [displayDelete, setDisplayDelete] = useState(null);
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

	useEffect(() => {
		fetchPages();
	}, []);

	return (
		<main>
			{/* <h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>
			<PagesList pages={pages} /> */}
			{displayAdd ? (
				<Add />
			) : displayDelete ? (
				<Delete />
			) : displayPage ? (
				<PageShow />
			) : (
				<>
					<h1>WikiVerse</h1>
					<h2>An interesting 📚</h2>
					<PagesList pages={pages} displayPage={displayPage}/>
				</>
			)}
		</main>
	)
}