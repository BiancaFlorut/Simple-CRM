import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailComponent } from './user-detail.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      imports: [UserDetailComponent, RouterModule.forRoot([])
      ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
        
      provideFirebaseApp(() => initializeApp({
        "projectId":"customer-relationship-ma-3433a",
        "appId":"1:1088794488166:web:3b280f560c8c9e994b6ca7",
        "storageBucket":"customer-relationship-ma-3433a.appspot.com",
        "apiKey":"AIzaSyDAqPeNT7eXUDa2ApSyh64rj5rHXB22DAA",
        "authDomain":"customer-relationship-ma-3433a.firebaseapp.com",
        "messagingSenderId":"1088794488166"})), 
        provideFirestore(() => getFirestore())
    ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
