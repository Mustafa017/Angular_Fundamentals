import { Component } from '@angular/core';

@Component({
  selector: 'app-events-list',
  template: `
  <h1>Angular Events</h1>
  <hr>
  <div class="well">
    <h2>{{event.name}}</h2>
    <div>Date : {{event.date}}</div>
    <div>Time : {{event.time}}</div>
    <div>Price : \$ {{event.price}}</div>
    <div>
      <span>Location : {{event.location.address}}</span>
      <span>&nbsp;</span>
      <span>{{event.location.city}}, {{event.location.country}}</span>
    </div>
  </div>
  `
})

export class EventListComponent {
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2020',
    time: '02:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };
}
