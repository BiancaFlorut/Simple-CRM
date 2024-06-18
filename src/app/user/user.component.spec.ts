import { ComponentFixture, TestBed } from '@angular/core/testing';


import { UserComponent} from './user.component';
import { Firestore, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { NgModule } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent],
      providers: [
        provideFirebaseApp(() => initializeApp({
          "projectId":"customer-relationship-ma-3433a",
          "appId":"1:1088794488166:web:3b280f560c8c9e994b6ca7",
          "storageBucket":"customer-relationship-ma-3433a.appspot.com",
          "apiKey":"AIzaSyDAqPeNT7eXUDa2ApSyh64rj5rHXB22DAA",
          "authDomain":"customer-relationship-ma-3433a.firebaseapp.com","messagingSenderId":"1088794488166"
        })), 
        provideFirestore(() => getFirestore()),
        provideAnimationsAsync()
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
