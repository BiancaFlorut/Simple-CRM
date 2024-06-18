import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditContactInfoComponent } from './dialog-edit-contact-info.component';

describe('DialogEditContactInfoComponent', () => {
  let component: DialogEditContactInfoComponent;
  let fixture: ComponentFixture<DialogEditContactInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditContactInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEditContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
