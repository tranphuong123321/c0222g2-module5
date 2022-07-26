import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ImageCardComponent } from './image-gallery/image-card/image-card.component';
import {GalleryConfig} from './image-gallery/token';

@NgModule({
  declarations: [
    AppComponent,
    ImageGalleryComponent,
    ImageCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: GalleryConfig, useValue: 3}],
  bootstrap: [AppComponent]
})
export class AppModule { }
