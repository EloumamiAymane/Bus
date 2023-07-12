import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardItemsComponent } from './card-items/card-items.component';
import { BusDetailsComponent } from './bus-details/bus-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';*/
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    CardItemsComponent,
    BusDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
