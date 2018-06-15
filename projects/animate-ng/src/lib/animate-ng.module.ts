import { NgModule } from '@angular/core';
import { AnimateNgComponent } from './animate-ng.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
		BrowserAnimationsModule
  ],
  declarations: [AnimateNgComponent],
  exports: [AnimateNgComponent]
})
export class AnimateNgModule { }
