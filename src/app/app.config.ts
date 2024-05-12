import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggingInterceptor } from './components/interceptor/logging.interceptor';
import { authInterceptor } from './components/interceptor/auth.interceptor';
import { errorInterceptor } from './components/interceptor/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([loggingInterceptor, authInterceptor, errorInterceptor])
    ),
  ],
};
