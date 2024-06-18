import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialog} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../models/user.class';
import { DocumentData, Firestore, collection, doc, onSnapshot } from '@angular/fire/firestore';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule, MatTableModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  data:DocumentData[] = [];
  displayedColumns: string[] = [ 'name', 'birthDate', 'city'];
  dataSource = this.data;
  readonly dialog = inject(MatDialog);
  user = new User();
  firestore: Firestore = inject(Firestore);
  unsubData: any;

  constructor() {
    this.unsubData = onSnapshot(collection(this.firestore, 'users'), (doc) => {
      this.dataSource = doc.docs.map((doc) => doc.data());
  });
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  getLocalDate(timeStamp: number) {
    return new Date(timeStamp).toLocaleDateString();
  }

  ngOnDestroy() {
    if (this.unsubData) {
      this.unsubData();
    }
  }
}
