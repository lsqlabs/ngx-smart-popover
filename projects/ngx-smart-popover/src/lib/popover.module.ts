import { PopoverDirective } from './popover.directive';
import { PopoverContentComponent } from './popover-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        PopoverDirective,
        PopoverContentComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        PopoverContentComponent,
        PopoverDirective
    ],
    entryComponents: [
        PopoverContentComponent
    ]
})
export class PopoverModule { }
