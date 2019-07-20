import { async, TestBed } from '@angular/core/testing';
import { DataTestIdModule } from './data-test-id.module';

describe('DataTestIdModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataTestIdModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DataTestIdModule).toBeDefined();
  });
});
