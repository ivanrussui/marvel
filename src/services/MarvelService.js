class MarvelService {
	// "скрытые" переменные
	_apiBase = 'https://gateway.marvel.com:443/v1/public/';
	_apiKey = 'apikey=c1cd63c58fe773236e19227a127dc9e7';

	// метод получения данных
  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };

	// метод получения всех персонажей
  getAllCharacters = async () => {
    const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=1241&${this._apiKey}`);
		return res.data.results.map(this._transformCharacter);
  };

	// метод получения персонажа по id динамически 
  getCharacter = async (id) => {
    const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
		return this._transformCharacter(res.data.results[0]);
  };

	// метод по трансормации персонажа
	_transformCharacter = (char) => {
		return {
			name: char.name,
			description: char.description ? `${char.description.slice(0, 200)}...` : 'There is no description for this character',
			thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
			homepage: char.urls[0].url,
			wiki: char.urls[1].url
		};
	};
}

export default MarvelService;
