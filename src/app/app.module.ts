import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from  '@angular/material/toolbar';
import { MatIconModule} from  '@angular/material/icon';
import { MatSidenavModule}from '@angular/material/sidenav';
import { MatListModule }from '@angular/material/list';
import { MatButtonModule}from '@angular/material/button';
import { HighchartsChartModule } from 'highcharts-angular';
import { UsersComponent } from './pages/users/users.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { UserComponent } from './pages/user/user.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MapComponent } from './pages/map/map.component';
import { TabelComponent } from './pages/tabel/tabel.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TransactionsComponent,
    UserComponent,
    NotFoundComponent,
    MapComponent,
    TabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    HighchartsChartModule,
    MatGridListModule,
    MatCardModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
