import React, { useEffect, useState} from "react";
import { getFakePosts } from "../api-adapter";

const MyPosts = () => {
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
    
        const isAuthorArray = posts.length ? posts?.filter((post) => {
            return post.isAuthor === true
            }) : []
            
            const mapIsAuthorArray = isAuthorArray.map((post, idx)=>{
                return(
                    <div>
                        <div>hello</div>
                    </div>
                )
            })

            console.log(isAuthorArray)
            return(
                <div>
                    <h1>My Posts</h1>
                    <div>{mapIsAuthorArray}</div>
                    <button id = "DELETE_BUTTON" type="submit">DELETE</button>
                </div>
            )
    }
export default MyPosts