import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { RailsComponent } from './rails/rails.component';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    RailsComponent
  ],
  imports: [
    BrowserModule,
    FormBuilder,
    FormGroup,
    Validators,
    RouterModule.forRoot(
      [
        {
          path : 'customer',
          component : CustomerComponent
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
