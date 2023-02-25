import React, { useState,useEffect } from 'react';
import { getFakePosts, getSearchResults } from '../api-adapter';

function SearchBar() {
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

console.log(filteredPosts)

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
          }}
        />
      </label>
      <div>
        {
          postsToDisplay.length ? postsToDisplay.map((post, idx)=> { 
            return(
              <div key ={`idx: ${idx}`}>
                <h1>{post.title}</h1>
                <h2>{post.author.username}</h2>
                <p>{post.description}</p>
              </div>
            )
          }):null
        }
      </div>
    </div>
  )
}

export default SearchBar;
