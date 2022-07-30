const getGif = async (category) => {
    const api = {
        url: "api.giphy.com/v1/gifs/search",
        apiKey: "0TLqffm7TLy3wBFGrazUyjXbGq1DLIAJ",
        limit: 10,
    };
    const urlGif = `https://${api.url}?api_key=${api.apiKey}&q=${category}&limit=${api.limit}`;
    const res = await fetch(urlGif);
    const { data } = await res.json();
    const gifs = data.map(({ id, title, images }) => ({
        id,
        title,
        image: images.downsized_medium.url,
    }));
    return gifs;
};

export default getGif;
