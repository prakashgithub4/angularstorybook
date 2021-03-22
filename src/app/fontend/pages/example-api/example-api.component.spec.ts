import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleApiComponent } from './example-api.component';

describe('ExampleApiComponent', () => {
  let component: ExampleApiComponent;
  let fixture: ComponentFixture<ExampleApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
