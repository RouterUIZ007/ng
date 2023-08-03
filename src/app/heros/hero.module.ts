import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './component/hero/hero.component';
import { ListComponent } from './component/list/list.component';


@NgModule({
    declarations: [
        HeroComponent,
        ListComponent
    ],
    exports: [
        HeroComponent,
        ListComponent 
    ],
    imports: [
        CommonModule
    ]
})
export class HeroModule {
}