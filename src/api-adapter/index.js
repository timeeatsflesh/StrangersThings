const BASE_URL = "https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft"

export const getFakePosts =  async () => {
    try{
        const response = await fetch(`${BASE_URL}/posts`, {
            method: "GET",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${localStorage.getItem("token")}`
			  },
        });
        const result = await response.json();
        const posts = result.data.posts
		return posts;
	} catch (error) {
		console.log(error);
	}
}

export const sendUser = async (username, password) => {
	try {
		const response = await fetch(`${BASE_URL}/users/login`, {
			method: "POST",
			body: JSON.stringify({
        user: {
				username: username,
				password: password,
        }
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		});

		const result = await response.json();
    console.log(result)
		return result.data.token;
	} catch (error) {
		console.log(error);
	}
};

export const newUser = async (newUsername, newPassword) => {
	try {
		const response = await fetch(`${BASE_URL}/users/register`, {
			method: "POST",
			body: JSON.stringify({
        user: {
				username: newUsername,
				password: newPassword,
        }
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		});

		const result = await response.json();
    console.log(result)
		return result;
	} catch (error) {
		console.log(error);
	}
};

export const createNewPost = async (title, description, price) => {
fetch(`${BASE_URL}/posts`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  },
  body: JSON.stringify({
    post: {
      title: title,
      description: description,
      price: price,
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}

export const getMessages = async () => {
	try {
	let response = await fetch(`${BASE_URL}/users/me`, {
		  headers: {
		    'Content-Type': 'application/json',
		    'Authorization': `Bearer ${localStorage.getItem("token")}`
		  },
		})
		const result = await response.json();
		return result;
	} catch (error) {
		console.log(error);
	}
}
export const sendMessage = async (POST_ID, content) => {
 try {
	let response = await fetch(`${BASE_URL}/posts/${POST_ID}/messages`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  },
  body: JSON.stringify({
    message: {
      content: content
    }
  })
})	
const result = await response.json();
return result;
} catch (error) {
console.log(error);
}
}

export const deletePost = async (POST_ID) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/${POST_ID}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

  // export const getSearchResults = async (search) => {
  //   try {
  //     const response = await fetch(`${BASE_URL}/posts?q=${search}`, {
  //       method: "GET",
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${localStorage.getItem("token")}`
  //       },
  //     });
  //     const result = await response.json();
  //     const posts = result.data.posts
  //     return posts;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }