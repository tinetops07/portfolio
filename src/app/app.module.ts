import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './main/main/body/body.component';
import { FooterComponent } from './main/main/footer/footer.component';
import { HeaderComponent } from './main/main/header/header.component';
import { HomeComponent } from './main/main/home/home.component';
import { MainComponent } from './main/main/main.component';
import { ContactComponent } from './contact/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
