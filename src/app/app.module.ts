import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeContentComponent } from './components/prime-content/prime-content.component';
import { DirectivaStudentsListDirective } from './directives/directiva-students-list.directive';

@NgModule({
  declarations: [
    AppComponent,
    PrimeContentComponent,
    DirectivaStudentsListDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
