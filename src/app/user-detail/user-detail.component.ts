import { Component, inject } from '@angular/core';
import { Firestore, collection, doc, onSnapshot } from '@angular/fire/firestore';
import {MatCardModule} from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.class';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditContactInfoComponent } from '../dialog-edit-contact-info/dialog-edit-contact-info.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  route = inject(ActivatedRoute);
  firestore: Firestore = inject(Firestore);
  user = new User();
  unsub: any;
  dialog = inject(MatDialog);

  id = this.route.snapshot.params['id'];

  constructor() { 
    this.getUser();
  }

  getUser() {
    const docRef = doc(collection(this.firestore,'users'), this.id);
    this.unsub = onSnapshot(docRef, (doc) => {
      this.user = new User(doc.data());
    });
  }

  onNGDestroy() {
    if (this.unsub) {
      this.unsub();
    }
  }

  openAddressDialog() {
    this.dialog.open(DialogEditAddressComponent, {
      data: this.user
    });
  }
  openContactInfoDialog() {
    this.dialog.open(DialogEditContactInfoComponent, {
      data: this.user
    })
    }
}
