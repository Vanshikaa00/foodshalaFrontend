import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-menu',
  templateUrl: './customer-menu.component.html',
  styleUrls: ['./customer-menu.component.scss']
})
export class CustomerMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const mainNav = document.getElementById('js-menu');
    const navBarToggle = document.getElementById('js-navbar-toggle');

    navBarToggle.addEventListener('click',  () => {
      mainNav.classList.toggle('active');
    });
  }

}
