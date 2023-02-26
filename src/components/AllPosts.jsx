import React, { useState, useEffect } from "react";
import { getFakePosts, deletePost } from "../api-adapter";
import { Link } from "react-router-dom"


const AllPosts = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [posts, setPosts] = useState([])
    const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
    const postsToDisplay = searchTerm.length ? filteredPosts : posts;

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

        posts.length ? posts.map((post)=> { 
            return(
            postMatches(post, searchTerm)
            )
        }):null
        
         
        function postMatches(post, searchTerm) {
            return post.title.toLowerCase().includes(searchTerm.toLowerCase())
        }
    
            return (
                <div>
                    <label>
                        Search:
                    <input
                        name="searchTerm"
                        type="text"
                        value={searchTerm}
                        onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }}/>
                    </label>
                        <div>
                            <Link to="/new-post"><button>Post new article</button></Link>
                            {
                                postsToDisplay.length ? postsToDisplay.map((post, idx)=> { 
                                    console.log(post)
                                    return(
                                    <div key ={`idx: ${idx}`}>
                                        <h1>{post.title}</h1>
                                        <h2>{post.author.username}</h2>
                                        <p>{post.description}</p>
                                        <Link to={`/create-message/${post._id}`}><button>Ask Seller</button></Link>
                                        {
                                            post.isAuthor === true?
                                            <button id = "DELETE_BUTTON" onClick={() => deletePost(post._id)}>DELETE</button>
                                            :null
                                        }
                                    </div>
                                    )
                                }):null
                            }       
                        </div>
                </div>
            )
}

export default AllPosts


