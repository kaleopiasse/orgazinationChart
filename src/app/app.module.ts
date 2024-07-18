import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicPrimitivesModule } from 'ngx-basic-primitives';
import { NodeComponent } from './components/node/node.component';

@NgModule({
  declarations: [
    AppComponent,
    NodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BasicPrimitivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
