import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {BaseComponent} from './+base';

@Component({
  moduleId: __moduleName,
  selector: 'route-test-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'route-test.component.html',
  styleUrls: ['route-test.component.css'],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  {path: '/base/...', name: 'Base', component: BaseComponent}
])
export class RouteTestApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
