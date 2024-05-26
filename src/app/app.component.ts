import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'open-pay-test';
  items: MenuItem[]= [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
        { label: 'Characteres', icon: 'pi-list-check', command: () => {
          this.router.navigate(['/characteres']);
      }},
        { label: 'Services', icon: 'pi-list-check', route: '/call_services',  command: () => {
          this.router.navigate(['/call_services']);
      }}
    ]
  }
}
