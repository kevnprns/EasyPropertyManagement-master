import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantRequestComponent } from './tenant-request.component';

describe('TenantRequestComponent', () => {
  let component: TenantRequestComponent;
  let fixture: ComponentFixture<TenantRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
