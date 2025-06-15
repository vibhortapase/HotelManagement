import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { httpErrorInterceptor } from './app/interceptors/http-error.interceptor'; // Function not class

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(
      withInterceptors([httpErrorInterceptor])  // ✅ Use function-based interceptor
    ),
    provideRouter(routes)
  ]
});
