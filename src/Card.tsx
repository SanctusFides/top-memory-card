// Cards have just an string for icon to store emoji and boolean to check if it's been selected by the player
export default class Card {
  icon: string
  consumed: boolean

  constructor(icon) {
    this.icon = icon;
    this.consumed = false;
  }

  setConsumed() {
    this.consumed = true;    
  }
}
