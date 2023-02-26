import React, { useState, useEffect } from "react";
import { getFakePosts, deletePost } from "../api-adapter";
import { Link } from "react-router-dom"


const AllPosts = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [posts, setPosts] = useState([])
    const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
    const postsToDisplay = searchTerm.length ? filteredPosts : posts;
    const  token = localStorage.getItem("token")

    const getPosts =  async () => {
        try{
            const result = await getFakePosts();
            setPosts(result)
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    function setToken(){
        localStorage.setItem("token", undefined)
    }

        useEffect(() => {
            getPosts(),setToken() ;
        }, [])

        
        posts.length ? posts.map((post)=> { 
            return(
            postMatches(post, searchTerm)
            )
        }):null

        function showPostButton(){
            if(token.length <= 9){
                return null
            }else{
                return <Link to="/new-post"><button id ="postNewArticleButton">Post new article</button></Link>
            }
        }
         
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
                            {showPostButton()}
                            {
                                postsToDisplay.length ? postsToDisplay.map((post, idx)=> { 
                                    return(
                                    <div class="postInAllPosts" key ={`post: ${idx}`}>
                                        <h1>{post.title}</h1>
                                        <h2>{post.author.username}</h2> 
                                        <p>{post.description}</p>
                                        {
                                            token.length <= 9 ?  null : <Link to={`/create-message/${post._id}`}><button id="askSellerButton">Ask Seller</button></Link>
                                        } 
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


