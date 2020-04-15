import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const mainNav = document.getElementById('js-menu');
    const navBarToggle = document.getElementById('js-navbar-toggle');

    navBarToggle.addEventListener('click',  () => {
      mainNav.classList.toggle('active');
    });
  }

}
