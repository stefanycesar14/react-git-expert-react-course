export const getGif = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=oMatKHkoRy7CVkuqRDMvVT53tTZ3GnRY&q=${category}&limit=10`
    const req = await fetch( url )
    const {data} = await req.json();
    const gifs = data.map(img=>({
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url

    }))
    
    return gifs

}