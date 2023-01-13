import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./MyComponents/navbar/navbar.component";
import { BodyComponent } from "./MyComponents/body/body.component";

@NgModule({
  declarations: [AppComponent, NavbarComponent, BodyComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
