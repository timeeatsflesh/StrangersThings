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
        console.log(posts)

    return(
    <div id="all-posts">
            <h1>All posts</h1>
            {/* <Link to="new-article"><button>Post new article</button></Link> */}
            {
                posts.length ? posts.map((post, idx) =>{
                   return (
                    <div key={idx}>
                        <h3>{post.title}</h3>
                        {/* <Link to={`${post.id}`}><h3>{post.title}</h3></Link> */}
                    </div>
                    )
                }) : null
            }
        </div>
    )

}
export default AllPosts