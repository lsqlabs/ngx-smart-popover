import { CommonModule } from '@angular/common';
import { PopoverDirective } from './popover.directive';
import { PopoverContentComponent } from './popover-content.component';
import { NgModule } from '@angular/core';

export * from './popover.directive';
export * from './popover-content.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PopoverContentComponent,
        PopoverDirective,
    ],
    exports: [
        PopoverContentComponent,
        PopoverDirective,
    ],
    entryComponents: [
        PopoverContentComponent
    ]
})
export class PopoverModule { }
