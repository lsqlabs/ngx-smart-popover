import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxPopoverModule } from '../../projects/ngx-smart-popover/src/lib/popover.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgxPopoverModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
