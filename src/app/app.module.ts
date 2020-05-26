import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { NgGoogleAnalyticsModule } from '../../node_modules/ng-google-analytics/src/lib/ng-google-analytics.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AnalyticsService } from './service/analytics.service';

@NgModule({
  declarations: [
    AppComponent,
    AvaliacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //NgGoogleAnalyticsModule.forRoot({ id: 'UA-167569714-1' }),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [AnalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
