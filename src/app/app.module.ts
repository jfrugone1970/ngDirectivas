import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EjemploAttrComponent } from './components/ejemplo-attr/ejemplo-attr.component';
import { EjemplostructComponent } from './components/ejemplostruct/ejemplostruct.component';
import { EjemploLifeCycleComponent } from './components/ejemplo-life-cycle/ejemplo-life-cycle.component';
import { AttrDirective } from './directives/attr.directive';
import { StructDirective } from './directives/struct.directive';
import { LifeCycleDirective } from './directives/life-cycle.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EjemploAttrComponent,
    EjemplostructComponent,
    EjemploLifeCycleComponent,
    AttrDirective,
    StructDirective,
    LifeCycleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
