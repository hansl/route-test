import {
  async,
  beforeEachProviders,
  describe,
  ddescribe,
  expect,
  iit,
  it,
  inject,
  ComponentFixture,
  TestComponentBuilder
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {ChildComponent} from './child.component';
class MockRouter {
  registerPrimaryOutlet() { }
}

class MockRouteParams {
  get() { return 1; }
}

describe('Child Component', () => {

  beforeEachProviders(() => [
    provide(Router, { useClass: MockRouter }),
    provide(RouteParams, { useClass: MockRouteParams }),
  ]);

  it('should ...', async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(ChildComponent).then((fixture: ComponentFixture) => {
      fixture.detectChanges();
    });
  })));

});
