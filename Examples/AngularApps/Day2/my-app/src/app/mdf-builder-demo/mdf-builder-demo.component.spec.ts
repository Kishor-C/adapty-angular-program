import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdfBuilderDemoComponent } from './mdf-builder-demo.component';

describe('MdfBuilderDemoComponent', () => {
  let component: MdfBuilderDemoComponent;
  let fixture: ComponentFixture<MdfBuilderDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdfBuilderDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdfBuilderDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
