import React, { useState, useEffect } from "react";

const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40danielperkinsii"


export default function MediumContainer() {
    const [title, setTitle] = useState(null)
    const [link, setLink] = useState(null)
    const [posts, setPosts] = useState([null])


    useEffect(() => {
        fetch(mediumURL).then(res => res.json())
        .then(data => {
            // console.log(data)
            setTitle(data.feed.title) 
            setLink(data.feed.link)
            const res = data.items
            const posts = res.filter(item => item.categories.length > 0) // comments do not have categories and posts do
            setPosts(posts)
            console.log(posts)
        })
        .catch( err => console.log(err))

    }, [])
    

    return (
        <div>
            <h1>Coming Soon...</h1>
            <a className="text-blue-400" href={link}>{title}</a>
            
            {posts.map((index, post) => {
                return (<div key={index}>
                {post.title}
                </div>)
            })}
            
            
            {/* {posts.length > 0 ? 
            {posts}
            posts.map((post, index) => {
                <div key={index}>
                    {post.title}

                </div>
            })
            
            : 
            
            "Sorry, no blog content is available right now :/"} */}
        </div>
    )
}
