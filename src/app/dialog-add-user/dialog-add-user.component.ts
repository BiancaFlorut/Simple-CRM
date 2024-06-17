import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../models/user.class';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { doc, setDoc } from "firebase/firestore";

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDatepickerModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()]
})
export class DialogAddUserComponent {
  readonly dialogRef = inject(MatDialogRef<DialogAddUserComponent>);
  user = new User();
  birthDate!: Date;
  firestore: Firestore = inject(Firestore);

  onNoClick(): void {
    this.dialogRef.close();
  }

  async saveUser(): Promise<void> {
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);
    await addDoc(collection(this.firestore, 'users'), this.user.toJSON()).then((res) => {
      console.log("Document successfully written!", res);
    });

    this.dialogRef.close(this.user);
  }
}
