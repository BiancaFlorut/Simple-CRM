import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialog} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../models/user.class';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule, MatTableModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  data : User[] = [
    new User({
      firstName: 'Julian',
      lastName: 'Kowalski',
      birthDate: new Date('1980-01-01').getTime(),
      city: 'Wrocław',
      street: 'Flowestowa',
      zipCode: '12345'
    })
  ];
  displayedColumns: string[] = [ 'name', 'birthDate', 'city'];
  dataSource = this.data;
  readonly dialog = inject(MatDialog);
  user = new User();

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  getLocalDate(timeStamp: number) {
    return new Date(timeStamp).toLocaleDateString();
  }
}
