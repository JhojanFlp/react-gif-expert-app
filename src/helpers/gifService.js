export const getGif = async (category = '') => {
  const ROOT = 'https://api.giphy.com/v1/gifs/search';
  const API_KEY = 'VUUMVfGSm20o9aQTlX5I4KxEDxiNCBkU';
  const params = {
    q: encodeURI(category),
    api_key: API_KEY,
    limit: 10,
  };
  const URL = ROOT + '?' + new URLSearchParams(params);
  const response = await fetch(URL);

  if (response.ok) {
    const { data } = await response.json();
    const gifs = data.map(({ id, title, images }) => ({
      id,
      title,
      url: images?.downsized_medium.url
    }))
    return gifs
  }
}