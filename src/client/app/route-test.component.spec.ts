import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {RouteTestApp} from '../app/route-test.component';

beforeEachProviders(() => [RouteTestApp]);

describe('App: RouteTest', () => {
  it('should have the `defaultMeaning` as 42', inject([RouteTestApp], (app: RouteTestApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([RouteTestApp], (app: RouteTestApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

