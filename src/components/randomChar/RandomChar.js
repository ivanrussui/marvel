import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';

class RandomChar extends Component {
	constructor(props) {
		super(props);
		this.updateChar(); // вызываем метод обновления перс-а 
	}

	// стейт с данными
	state = {
		char: {}
	}
	
	// создание экземпляра класса
	marvelService = new MarvelService();

	// метод закгрузки перс-а; получает весь необходимый state из метода _transformCharacter()
	onCharLoad = (char) => {
		this.setState({char}); // по факту тут {char : char}
	}

	// метод обновления перс-а; обращается к серверу, получает данные и записывает данные в стейт
	updateChar = () => {
		// const id = 1009610; // id spider-man
		// id случайного персонажа
		const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
		this.marvelService
			.getCharacter(id) // вызываем метод получения персонажа
			.then(this.onCharLoad);
	}

	// descriptionNone = (char) => {
	// 	if (this.setState({char:description} === null) ) {
	// 		char.description.innerHTML =  'Нет описания';
	// 	}
	// }

	// console.log(this.setState({char}));
	


  render() {
		// деструктуризация
		const { char: {name, description, thumbnail, homepage, wiki} } = this.state;

		// const descriptionChar = description ? description.slice(0, 200) +  '...' : 'There is no description for this character';

    return (
      <div className="randomchar">
        <div className="randomchar__block">
          <img src={thumbnail} alt="Random character" className="randomchar__img" />
          <div className="randomchar__info">
            <p className="randomchar__name">{name}</p>
            <p className="randomchar__descr">{description}</p>
            {/* <p className="randomchar__descr">{descriptionChar}</p> */}
            <div className="randomchar__btns">
              <a href={homepage} className="button button__main">
                <div className="inner">homepage</div>
              </a>
              <a href={wiki} className="button button__secondary">
                <div className="inner">Wiki</div>
              </a>
            </div>
          </div>
        </div>
        <div className="randomchar__static">
          <p className="randomchar__title">
            Random character for today!
            <br />
            Do you want to get to know him better?
          </p>
          <p className="randomchar__title">Or choose another one</p>
          <button className="button button__main">
            <div className="inner">try it</div>
          </button>
          <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
        </div>
      </div>
    );
  }
}

export default RandomChar;
