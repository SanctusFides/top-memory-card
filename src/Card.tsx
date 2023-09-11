// Cards have just an string for icon to store emoji and boolean to check if it's been selected by the player
export default class Card {
  icon: string
  consumed: boolean
  id: number

  constructor(icon) {
    this.icon = icon;
    this.consumed = false;
    this.id = Math.random();
  }

  setConsumed() {
    console.log(this.id);
    // console.log(this.consumed);
    this.consumed = true;    
    // console.log(this.consumed);

  }
}
