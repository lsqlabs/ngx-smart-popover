import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PopoverModule } from '../../projects/ngx-smart-popover/src/lib/popover.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PopoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
