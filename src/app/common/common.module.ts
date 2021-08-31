import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './components/card/card.component';
import { HighlightDirective } from './directives/hover-color/hover-color.directive';

@NgModule({
  declarations: [CardComponent, HighlightDirective],
  imports: [BrowserModule, CommonModule],
  exports: [CardComponent],
})
export class FbCommonModule {}
