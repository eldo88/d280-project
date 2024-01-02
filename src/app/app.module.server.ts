import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { InlineSVGModule } from 'ng-inline-svg-2';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    InlineSVGModule.forRoot()
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
