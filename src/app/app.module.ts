import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {CounterModule} from './counter/counter.module';

import { AppComponent } from './app.component';
import { HeroModule } from './heros/hero.module';
import { DbzModule } from './dbz/dbz.module';
// import { CounterComponent } from './counter/counter.component';
// import { HeroComponent } from './heros/hero/hero.component';
// import { ListComponent } from './heros/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    // CounterComponent,
    // HeroComponent,
    // ListComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
