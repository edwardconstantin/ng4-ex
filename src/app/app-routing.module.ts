import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CsvComponent } from './datatables/csv/csv.component';
import { ApiComponent } from './datatables/api/api.component';
import { HtmlComponent } from './datatables/html/html.component';
import { ChartComponent } from './charts/chart/chart.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent, data: { title: 'Home' } },
  { path: 'charts',  component: ChartComponent, data: { title: 'Charts' } },
  { path: 'about', component: AboutComponent, data: { title: 'About' } },

  { path: 'data',
    //component: AboutComponent,
    data: { title: 'Datatables' },
    children: [
      {path: 'csv', component: CsvComponent, data: { title: 'Table From CSV' } },
      {path: 'api', component: ApiComponent, data: { title: 'Table From API' } },
      {path: 'html', component: HtmlComponent, data: { title: 'Table From HTML' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  routes = routes;
}
