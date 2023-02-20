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


export const Register  = async (username, password) => {
	try {
		const response = await fetch(`${BASE_URL}/users/register`, {
			method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
			body: JSON.stringify({
				username: "vvazquez307",
				password: "2301abc",
			}),
		});

		const result = await response.json();
		return result;
	} catch (error) {
		console.log(error);
	}
};
