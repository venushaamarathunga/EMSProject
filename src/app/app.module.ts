import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RcFrontPageComponent } from './rc-front-page/rc-front-page.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RcFrontPageComponent,
    FrontPageComponent,
    EmployeeFormComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
