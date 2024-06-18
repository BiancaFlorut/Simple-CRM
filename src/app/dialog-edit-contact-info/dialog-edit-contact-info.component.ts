import { ChangeDetectionStrategy, Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { User } from '../models/user.class';
import { Firestore, collection, addDoc, doc, updateDoc } from '@angular/fire/firestore';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-dialog-edit-contact-info',
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
  templateUrl: './dialog-edit-contact-info.component.html',
  styleUrl: './dialog-edit-contact-info.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class DialogEditContactInfoComponent {
  readonly dialogRef = inject(MatDialogRef<DialogEditContactInfoComponent>);
  user = new User();
  birthDate!: Date;
  firestore: Firestore = inject(Firestore);
  loading = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: User) {
    this.user = data;
    this.birthDate = new Date(this.user.birthDate);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async saveUser(): Promise<void> {
    this.user.birthDate = this.birthDate.getTime();
    this.loading = true;
    const docRef = doc(collection(this.firestore, 'users'), this.user.customIdName);
      await updateDoc(docRef, this.user.toJSON()).then((res) => {
        console.log("Document successfully updated!", res);
        this.loading = false;
      });

    this.dialogRef.close();
  }
}
