import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app.routes';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(AppRoutingModule)],
}).catch((err) => console.error(err));
function provideHttpClient():
  | import('@angular/core').Provider
  | import('@angular/core').EnvironmentProviders {
  throw new Error('Function not implemented.');
}
