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
            
            {
                
                   
                    <div key={idx}>
                      <div>{post[0].title}</div>  
                    </div>
                    
                }  
            
        </div>
    )

        }
export default AllPosts