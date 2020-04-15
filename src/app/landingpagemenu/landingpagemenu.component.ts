import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpagemenu',
  templateUrl: './landingpagemenu.component.html',
  styleUrls: ['./landingpagemenu.component.scss']
})
export class LandingpagemenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const mainNav = document.getElementById('js-menu');
    const navBarToggle = document.getElementById('js-navbar-toggle');

    navBarToggle.addEventListener('click',  () => {
      mainNav.classList.toggle('active');
    });
  }


}
