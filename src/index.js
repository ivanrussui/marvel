import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import MarvelService from './services/MarvelService';
import './style/style.scss';

const marvelService = new MarvelService();

// получить всех персонажей
// marvelService.getAllCharacters().then(res => console.log(res));

// получить всех персонажей используя вложенность
// marvelService.getAllCharacters().then(res => console.log(res.data.results));

// получить всех персонажей, далее именно name у этих персонажей
marvelService.getAllCharacters().then(
	res => res.data.results.forEach(item => console.log(item.name)));

	
// получить по id статически
// marvelService.getCharacter().then(res => console.log(res));

// получить по id динамически
// marvelService.getCharacter(1009610).then(res => console.log(res));

ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);

