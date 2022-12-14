import React, { useState } from 'react';
import apiURL from '../api';

export const Add = ({ setDisplayAdd, fetchPages }) => {

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
            tags: tags
        }
        event.preventDefault();
        console.log("form submitted")
        const response = await fetch(`${apiURL}/wiki`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                articleData // our data TO CREATE here
            )
        });
        const data = await response.json();
        setDisplayAdd(false);
        fetchPages(data);
    }


    return (
        <>
            <hi>Add Page</hi>
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

            <button onClick={() => setDisplayAdd(false)}>Cancel</button>
        </>
    )
}