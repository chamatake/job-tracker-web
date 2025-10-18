import { bootstrapApplication } from '@angular/platform-browser';
import { API_BASE_URL } from './app/core/tokens/api-base-url.token';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './app/core/interceptors/auth-interceptor';
import { errorInterceptor } from './app/core/interceptors/error-interceptor';
import { environment } from './app/environments/environment.dev';
import { App } from './app/app';

bootstrapApplication(App, {
  providers: [
    { provide: API_BASE_URL, useValue: environment.apiUrl },
    provideHttpClient(withInterceptors([authInterceptor, errorInterceptor]))
  ]
});
