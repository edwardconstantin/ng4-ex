import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ChartModule } from 'angular-highcharts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchService } from './services/search/search.service';
import { ApiService } from './services/api.service';
import { Sse } from './services/sse.service';
import { SpinnerComponent } from './other/spinner/spinner.component';
import { CsvComponent } from './datatables/csv/csv.component';
import { ApiComponent } from './datatables/api/api.component';
import { HtmlComponent } from './datatables/html/html.component';
import { ChartComponent } from './charts/chart/chart.component';
import { MarketComponent } from './charts/market/market.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    SpinnerComponent,
    CsvComponent,
    ApiComponent,
    HtmlComponent,
    ChartComponent,
    MarketComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [ SearchService, ApiService, Sse],
  bootstrap: [AppComponent]
})
export class AppModule { }
