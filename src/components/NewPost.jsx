import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createNewPost } from "../api-adapter";

function NewPost() {
  let [newTitle, setNewTitle] = useState("");
  let [newDescription, setNewDescription] = useState("");
  let [newPrice, setNewPrice] = useState("");

  async function sendNewPost(newTitle, newDescription, newPrice) {
    try {
      console.log(
        "you have posted a new post",
        newTitle,
        newDescription,
        newPrice
      );
      const result = await createNewPost(newTitle, newDescription, newPrice);
      setNewTitle("");
      setNewDescription("");
      setNewPrice("");
      return result
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="form">
      {(event) => {
        event.preventDefault();
        sendNewPost(newTitle, newDescription, newPrice);
      }}
      
      <label>
        Title:
        <input
          name="title"
          type="text"
          value={newTitle}
          onChange={(event) => {
            setNewTitle(event.target.value);
          }}
        />
      </label>
      <label>
        Description:
        <input
          name="description"
          type="text"
          value={newDescription}
          onChange={(event) => {
            setNewDescription(event.target.value);
          }}
        />
      </label>
      <label>
        Price:
        <input
          name="price"
          type="text"
          value={newPrice}
          onChange={(event) => {
            setNewPrice(event.target.value);
          }}
        />
      </label>
      <button type="submit">Submit</button>
      <Link to="/">Go back</Link>
    </form>
  );
}

export default NewPost;
