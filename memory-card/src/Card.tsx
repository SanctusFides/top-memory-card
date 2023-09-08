// import React from 'react'

export default class Card {
  id: number
  icon: string
  consumed: boolean
  constructor(icon) {
    this.id = Math.random();
    this.icon = icon;
    this.consumed = false;
  }

  setConsumed() {
    this.consumed = true;
    console.log(`this cards status is ${this.consumed}`);
    
  }
}
