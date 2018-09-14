import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {AgmCoreModule} from '@agm/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyBgW1DJWMWHUVEARVnpkjnLk16iXZ8GAb8'
      apiKey: 'AIzaSyB954EX24ldvc9K55mjhdei_wg8Ly5shKQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
