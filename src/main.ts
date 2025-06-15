import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // You must have routes defined
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes) // <-- Required if using router
  ]
});
