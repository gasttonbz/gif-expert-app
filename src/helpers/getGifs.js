export const getGifs = async (categorie) => {
    const url = `https://api.giphy.com/v1/gifs/search?apikey=8Ry37PraRBCqWHMsb7Ql6b6Yn0kYKHsy&q=${categorie}&limit=5`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(gif => ({
        id: gif.id,
        url: gif.images.downsized_medium.url,
        title: gif.title
    }))
    return gifs;
}