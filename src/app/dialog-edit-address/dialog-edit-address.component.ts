import { ChangeDetectionStrategy, Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { User } from '../models/user.class';
import { Firestore, collection, addDoc, updateDoc, doc } from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDatepickerModule,
    MatProgressBarModule],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss',
})
export class DialogEditAddressComponent {
  readonly dialogRef = inject(MatDialogRef<DialogEditAddressComponent>);
  birthDate!: Date;
  firestore: Firestore = inject(Firestore);
  user!: User;
  loading = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: User) {
    this.user = data;

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async saveUser(): Promise<void> {
    if (this.user) {
      this.loading = true;
      const docRef = doc(collection(this.firestore, 'users'), this.user.customIdName);
      await updateDoc(docRef, this.user.toJSON()).then((res) => {
        console.log("Document successfully updated!", res);
        this.loading = false;
      });
    }
    this.dialogRef.close();
  }
}
