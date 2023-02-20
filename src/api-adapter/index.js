const BASE_URL = "https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft"

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
        const response = await fetch(`${BASE_URL}/posts`)
        const result = await response.json();
        const posts = result.data
		return posts;
	} catch (error) {
		console.log(error);
	}
}
