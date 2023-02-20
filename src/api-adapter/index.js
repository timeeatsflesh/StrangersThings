const BASE_URL = "https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft/posts"

export const getFakePosts =  async () => {
    // try{
    //     const response = await fetch(BASE_URL)
    //     const result = await response.json()
    //     posts = result.posts
    //     console.log(posts)
	// 	return posts
	// } catch (error) {
	// 	console.log(error)
	// }
    
    try{
        const response = await fetch(BASE_URL, {
            method: "GET",
        });
        const result = await response.json();
		return result;
	} catch (error) {
		console.log(error);
	}
}
