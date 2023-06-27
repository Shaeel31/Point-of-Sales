import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {
  constructor(public router: Router) {
  }
  ngOnInit(): void {
    if (!localStorage.getItem('flag') || localStorage.getItem('flag') == 'false') {
      this.router.navigateByUrl('/');
    }
  }
  menu = MENU_ITEMS;
}
