import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() toggle: any;
  menus: any[] = headerMenu;
  constructor() {}
}

const headerMenu = [
  { icon: 'mail', name: 'Messages', path: 'messages' },
  { icon: 'gpp_maybe', name: 'Claims', path: 'claims' },
  { icon: 'settings_suggest', name: 'Settings', path: 'settings' },
  { icon: 'insights', name: 'Reports', path: 'reports' },
  { icon: 'attach_money', name: 'Interest Rate', path: 'intrestrate' },
];
