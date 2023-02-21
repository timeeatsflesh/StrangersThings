const BASE_URL = "https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft"

export const getFakePosts =  async () => {

    
    try{
        const response = await fetch(`${BASE_URL}/posts`, {
            method: "GET",
        });
        const result = await response.json();
        const posts = result.data.posts
		return posts;
	} catch (error) {
		console.log(error);
	}
}

// fetch(`${BASE_URL}/users/register`, {
//   method: "POST",
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     user: {
//       username: 'victorlaurarober',
//       password: 'shoes15'
//     }
//   })
// }).then(response => response.json())
//   .then(result => {
//     console.log(result);
//   })
//   .catch(console.error);



fetch(`${BASE_URL}/users/login`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: 'victorlaurarober',
      password: 'shoes15'
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
  