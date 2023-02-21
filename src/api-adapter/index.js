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
		return result;
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
