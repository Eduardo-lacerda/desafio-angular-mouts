// icon.module
// Third Example - icon module
import { NgModule } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { MatIconModule } from "@angular/material/icon";
import { MatIconRegistry } from "@angular/material/icon";
@NgModule({
imports: [MatIconModule]})

export class IconModule {

  private path: string = "assets/icons";
  constructor(
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry ) {
    this.matIconRegistry.addSvgIcon("banco", this.setPath(`${this.path}/banco.svg`));
    this.matIconRegistry.addSvgIcon("chat", this.setPath(`${this.path}/chat.svg`));
    this.matIconRegistry.addSvgIcon("coracao", this.setPath(`${this.path}/coracao.svg`));
    this.matIconRegistry.addSvgIcon("estrela", this.setPath(`${this.path}/estrela.svg`));
    this.matIconRegistry.addSvgIcon("filtros", this.setPath(`${this.path}/filtros.svg`));
    this.matIconRegistry.addSvgIcon("lupa", this.setPath(`${this.path}/lupa.svg`));
  }

  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
