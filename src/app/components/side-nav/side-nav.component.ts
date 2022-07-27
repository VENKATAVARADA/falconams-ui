import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  sideMenuItems = sideMenu;
  isExpand = true;
  @Output() toggle = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  onToggle() {
    this.isExpand = !this.isExpand;
    this.toggle.emit(this.isExpand);
  }

  isActiveRoute(path: any) {
    return this.router.url.includes(path);
  }
}
const sideMenu = [
  { icon: 'dashboard_outline', name: 'Dashboard', path: '/dashboard', children: [] },
  {
    icon: 'monetization_on_outline',
    name: 'Cash',
    path: '/cash',
    children: [
      { icon: 'account_balance_wallet', name: 'Submissions', path: '/submit', children: [] },
      { icon: 'fact_check_outline', name: 'Ledgers', path: '/ledger', children: [] },
    ],
  },
  { icon: 'mail_outline', name: 'Checks', path: '/checks', children: [] },
  { icon: 'receipt_long', name: 'Invoices', path: '/invoice', children: [] },
  { icon: 'drive_file_rename_outline', name: 'Journal Entry', path: '/journal', children: [] },
  { icon: 'table', name: 'Accounting', path: '/account', children: [] },
  { icon: 'account_balance_wallet_outline', name: 'Test Balance', path: '/balance', children: [] },
  { icon: 'fact_check_outline', name: 'Pre Closing', path: '/preclose', children: [] },
  // { icon: "file_download", name: "Print Closing", path: "/print", children: [] }
];
