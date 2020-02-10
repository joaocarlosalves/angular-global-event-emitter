import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CompAComponent } from './components/comp-a/comp-a.component';
import { CompBComponent } from './components/comp-b/comp-b.component';

@NgModule({
  declarations: [
    AppComponent,
    CompAComponent,
    CompBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
