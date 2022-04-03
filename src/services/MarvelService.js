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
  getAllCharacters = () => {
    return this.getResource(
			`${this._apiBase}characters?limit=9&offset=1241&${this._apiKey}`
    );
  };

	// метод получения персонажа по id статически 
  // getCharacter = () => {
  //   return this.getResource(
	// 		`${this._apiBase}characters/1009610?${this._apiKey}`
  //   );
  // };

	// метод получения персонажа по id динамически 
  getCharacter = (id) => {
    return this.getResource(
			`${this._apiBase}characters/${id}?${this._apiKey}`
    );
  };
}

export default MarvelService;
