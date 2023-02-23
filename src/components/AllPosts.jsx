import React, { useState, useEffect } from "react";
import { getFakePosts } from "../api-adapter";
import { Link } from "react-router-dom"


const AllPosts = () => {
    const [posts, setPosts] = useState([])

    const getPosts =  async () => {
        try{
            const result = await getFakePosts();
            setPosts(result)
            return result;
        } catch (error) {
            console.log(error);
        }
    }
        useEffect(() => {
            getPosts();
        }, [])

    return(
    <div id="all-posts">
            <h1>All posts</h1>
            <Link to="/new-post"><button>Post new article</button></Link>
            <Link to="/create-message"><button>Ask Seller</button></Link>
            {
                posts.length ? posts.map((post, idx) =>{
                   return (
                    <div key={idx}>
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <Link to="/create-message"><button>Ask Seller</button></Link>
                    </div>
                    )
                }) : null
            }
        </div>
    )

}
export default AllPosts