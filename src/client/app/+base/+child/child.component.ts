import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
  moduleId: __moduleName,
  selector: 'app-child',
  templateUrl: 'child.component.html',
  styleUrls: ['child.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class ChildComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
