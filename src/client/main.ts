import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import {RouteTestApp} from './app/route-test.component';

if (environment.production) {
  enableProdMode();
}

bootstrap(RouteTestApp);
