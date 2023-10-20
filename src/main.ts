


import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { APP_ROUTE } from './components/app/App.routes';
import { provideAnimations } from '@angular/platform-browser/animations';


bootstrapApplication(AppComponent, {
    providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(APP_ROUTE),
    provideAnimations()
],
  }).catch((err) => console.error(err));