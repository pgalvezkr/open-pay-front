import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule, MenubarService } from 'primeng/menubar';
import { CharacteresComponent } from './characteres/characteres.component';
import { CallServicesComponent } from './call-services/call-services.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { DataViewModule } from 'primeng/dataview';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [
    AppComponent,
    CharacteresComponent,
    CallServicesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    TableModule,
    DialogModule,
    IconFieldModule,
    InputIconModule,
    DataViewModule,
    TabViewModule
  ],
  providers: [
    provideClientHydration(),
    MessageService,
    MenubarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
