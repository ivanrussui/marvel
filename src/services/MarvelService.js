class MarvelService {
  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = () => {
    return this.getResource(
      'https://gateway.marvel.com:443/v1/public/characters?apikey=c1cd63c58fe773236e19227a127dc9e7'
    );
  };
}

export default MarvelService;
