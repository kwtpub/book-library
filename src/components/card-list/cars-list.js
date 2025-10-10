import { DivComponent } from "../../common/div-component";

export class CardList extends DivComponent {
  
  constructor(state) {
    super();
    this.state = state;
  }

  isLoading() {
    if(this.state.loading) {
      return   `<div class="loading">Loading...</div>`
    } else {
      return `<div>
      Найдено книг - ${this.state.list.length}
    </div>`
    }
  }
  
  render() {
    this.el.innerHTML = "";
    this.el.classList.add("list");
    this.el.innerHTML = this.isLoading();
    return this.el;  
  }
}
