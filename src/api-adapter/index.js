const BASE_URL = "https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft/posts"

export const getFakePosts =  async () => {

    
    try{
        const response = await fetch(BASE_URL, {
            method: "GET",
        });
        const result = await response.json();
        const posts = result.data.posts
		return posts;
	} catch (error) {
		console.log(error);
	}
}
