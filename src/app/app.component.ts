import { Component } from '@angular/core';
import { SidenavService } from './shared/services/sidenav.service';
import { onMainContentChange } from './shared/animations/animations';
import { selectAllFooterButtons } from 'app/core/store/footer/footer.selectors';
import { AppState } from './core/store';
import { Store, select } from '@ngrx/store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  animations: [ onMainContentChange ]
})
export class AppComponent  {
  title = 'ailos';
  public onSideNavChange: boolean = false;
  footerButtonList$ = this.store.select(selectAllFooterButtons);

  constructor(
    private _sidenavService: SidenavService,
    private store: Store<AppState>
    ) {
    this._sidenavService.sideNavState$.subscribe( (res: any) => {
      this.onSideNavChange = res;
    })
  }

}
