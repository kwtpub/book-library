import { AbstractView } from "../../common/view";
import onChange from 'on-change'
import { Header } from "../../components/header/header";
import { Search } from "../../components/search/search";
import { CardList } from "../../components/card-list/cars-list";
export class FavoritesView extends AbstractView {

  constructor(appState) {
    super();
    this.appState = appState;
    this.appState = onChange(this.appState, this.AppStateHook.bind(this))
    this.setTitle('Мои книги')
  }

  AppStateHook(path) {
    console.log(path)
    if(path === 'favorites') {
      this.render();
    }
  }

  destroy() {
    onChange.unsubscribe(this.appState)
  }
	async loadList(q, offset) {
		const res = await fetch(`https://openlibrary.org/search.json?q=${q}&offset=${offset}`);
		return res.json();
	}



  render() {
    const main = document.createElement('div')
    main.innerHTML = `
    <h1>Избранное</h1>
`
    main.append(new CardList(this.appState, {list: this.appState.favorites}).render());
    this.app.innerHTML = '';
    this.app.append(main)
    this.renderHeader();

  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }

}

