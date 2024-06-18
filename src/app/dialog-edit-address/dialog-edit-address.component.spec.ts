import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditAddressComponent } from './dialog-edit-address.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('DialogEditAddressComponent', () => {
  let component: DialogEditAddressComponent;
  let fixture: ComponentFixture<DialogEditAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditAddressComponent],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
        provideFirebaseApp(() => initializeApp({ 
          "projectId": "customer-relationship-ma-3433a", 
          "appId": "1:1088794488166:web:3b280f560c8c9e994b6ca7", 
          "storageBucket": "customer-relationship-ma-3433a.appspot.com", 
          "apiKey": "AIzaSyDAqPeNT7eXUDa2ApSyh64rj5rHXB22DAA", 
          "authDomain": "customer-relationship-ma-3433a.firebaseapp.com", 
          "messagingSenderId": "1088794488166" })), 
        provideFirestore(() => getFirestore()),
        provideAnimationsAsync()
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEditAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
