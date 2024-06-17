import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"customer-relationship-ma-3433a","appId":"1:1088794488166:web:3b280f560c8c9e994b6ca7","storageBucket":"customer-relationship-ma-3433a.appspot.com","apiKey":"AIzaSyDAqPeNT7eXUDa2ApSyh64rj5rHXB22DAA","authDomain":"customer-relationship-ma-3433a.firebaseapp.com","messagingSenderId":"1088794488166"})), provideFirestore(() => getFirestore())]
};
