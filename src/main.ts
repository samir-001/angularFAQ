


import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { APP_ROUTE } from './components/app/App.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
bootstrapApplication(AppComponent, {
    providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(APP_ROUTE),
    provideAnimations(),
    importProvidersFrom(MatDialogModule),
    importProvidersFrom(TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  })
)
],
  }).catch((err) => console.error(err));