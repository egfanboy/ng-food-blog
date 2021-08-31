import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PostsModule } from './components/posts/posts.module';

@NgModule({
  declarations: [AppComponent, NavBarComponent],
  imports: [BrowserModule, CommonModule, PostsModule],

  bootstrap: [AppComponent],
})
export class AppModule {}
