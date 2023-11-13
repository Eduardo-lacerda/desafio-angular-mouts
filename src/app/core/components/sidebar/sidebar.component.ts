import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { onSideNavChange, animateText } from 'app/shared/animations/animations';
import { SidenavService } from 'app/shared/services/sidenav.service';

interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [onSideNavChange, animateText]
})

export class SidebarComponent implements OnInit {
  public sideNavState: boolean = false;
  public linkText: boolean = false;

  public pages: Page[] = [
    {name: 'Register', link:'link', icon: 'lupa'},
    {name: 'Favorites', link:'link', icon: 'estrela'},
    {name: 'Support', link:'link', icon: 'chat'},
    {name: 'Search', link:'link', icon: 'filtros'},
    {name: 'Products', link:'link', icon: 'banco'},
  ]

  constructor(
    private _sidenavService: SidenavService
  ) { }

  ngOnInit() {

  }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }

}
