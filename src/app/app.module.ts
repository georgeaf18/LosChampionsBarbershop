import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BarbersComponent } from './barbers/barbers.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent },
  {path: 'barbers', component: BarbersComponent},
  {path: 'gallery', component: GalleryComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BarbersComponent,
    GalleryComponent,
    ScrollTopComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
