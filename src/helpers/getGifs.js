export const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=yIUKc9iagAzAT1IUeXLCE0H4aK7Jq8is&q=${category}&limit=20`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gif = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));

  return gif;
};
