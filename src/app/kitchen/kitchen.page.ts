import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.page.html',
  styleUrls: ['./kitchen.page.scss'],
})
export class KitchenPage implements OnInit {

  lights: boolean = false
  temp: boolean = false
  fans: boolean = false
  blinds: boolean = false

  constructor() { }

  ngOnInit() {
  }

  clickLights() {
    this.lights = true
    this.temp = false
    this.fans = false
    this.blinds = false
  }

  clickTemp() {
    this.temp = true
    this.lights = false
    this.fans = false
    this.blinds = false
  }

  clickFans() {
    this.fans = true
    this.lights = false
    this.blinds = false
    this.temp = false
  }

  clickBlinds() {
    this.blinds = true
    this.fans = false
    this.lights = false
    this.temp = false
  }
}
