import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialog} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../models/user.class';
import { DocumentData, Firestore, collection, doc, onSnapshot } from '@angular/fire/firestore';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule, MatTableModule, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  data:DocumentData[] = [];
  displayedColumns: string[] = [ 'name', 'email', 'birthDate', 'city'];
  dataSource = this.data;
  newData!: DocumentData;
  readonly dialog = inject(MatDialog);
  user = new User();
  firestore: Firestore = inject(Firestore);
  unsubData: any;

  constructor() {
    this.unsubData = onSnapshot(collection(this.firestore, 'users'), (doc) => {
      this.dataSource = [];
      doc.forEach((entry) => {
        this.newData = entry.data();
        this.newData['customIdName'] = entry.id;
        this.dataSource.push(this.newData)      
      })
      console.log(this.dataSource);
      
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
