import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Reference
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Use Toastr
import { AppComponent } from './app.component';
import { ToastrComponent } from './toastr/toastr.component';

@NgModule({
  declarations: [AppComponent, ToastrComponent],
  imports: [
    BrowserModule,
    FormsModule,

    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
