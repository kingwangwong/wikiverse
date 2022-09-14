import React, { useState, useEffect } from 'react';
import apiURL from '../api';

export const Edit = ({ setDisplayEdit, displayPage, fetchPages,setDisplayPage }) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tags, setTags] = useState('');
    const handleSubmit = async (ev) => {
        const articleData = {
            title: title,
            content: content,
            name: name,
            email: email,
            tags: tags,
            slug: title
        }
        event.preventDefault();
        console.log("form submitted")
        const response = await fetch(`${apiURL}/wiki/${displayPage.slug}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                articleData // our data TO CREATE here
            )
        });
        const data = await response.json();
        setDisplayEdit(false);
        setDisplayPage(null);
        fetchPages(data);
    }

    return (
        <>
            <h1>Edit Page</h1>
            <form onSubmit={() => handleSubmit()}>
                <input type="text" placeholder="Title"
                    value={title} onChange={(ev) => setTitle(ev.target.value)} />
                <input type="text" placeholder="Content"
                    value={content} onChange={(ev) => setContent(ev.target.value)} />
                <input type="text" placeholder="Name"
                    value={name} onChange={(ev) => setName(ev.target.value)} />
                <input type="text" placeholder="email"
                    value={email} onChange={(ev) => setEmail(ev.target.value)} />
                <input type="text" placeholder="Tags"
                    value={tags} onChange={(ev) => setTags(ev.target.value)} />
                <button type="submit" >submit</button>
            </form>

            <button onClick={() => setDisplayEdit(false)}>Cancel</button>
        </>
    )
}