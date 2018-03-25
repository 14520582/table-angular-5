import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { BookService } from '../../service/book.service';
import { IBook } from '../../model/book';
import { ErrorStateMatcher } from '@angular/material/core';

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

@Component({
  selector: 'app-my-dialog-reactive-form',
  templateUrl: './my-dialog-reactive-form.component.html',
  styleUrls: ['./my-dialog-reactive-form.component.scss']
})
export class MyDialogReactiveFormComponent implements OnInit {
  bookForm: FormGroup;
  // matcher = new MyErrorStateMatcher();
  constructor(
    private dialogRef: MatDialogRef<MyDialogReactiveFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private bookService : BookService,
    private formBuilder: FormBuilder
  ) {
    if(this.data.type === 0) {
      this.bookForm = this.formBuilder.group({
        id: [data.book.id, Validators.required ],
        name: [data.book.name, Validators.required ],
        author: [data.book.author, Validators.required ],
        price: [data.book.price, Validators.required ],
        releasedate: [new Date(data.book.releasedate), Validators.required ],
        genre: [data.book.genre, Validators.required ]
      });
    }
    else{
      this.bookForm = this.formBuilder.group({
        id: ['', Validators.required ],
        name: ['', Validators.required ],
        author: ['', Validators.required ],
        price: ['', Validators.required ],
        releasedate: [new Date(), Validators.required ],
        genre: ['', Validators.required ]
      });
    }

  }
  convertFormToBook() : IBook {
    return {
      id: this.bookForm.get('id').value,
      name: this.bookForm.get('name').value,
      author: this.bookForm.get('author').value,
      price: this.bookForm.get('price').value,
      releasedate: this.bookForm.get('releasedate').value.getTime(),
      genre: this.bookForm.get('genre').value
    }
  }
  confirm(){
    if(this.data.type === 0) 
      this.bookService.edit(this.convertFormToBook());
    else {
      this.bookService.add(this.convertFormToBook());
    }
    this.dialogRef.close();
  }
  onNoClick() {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}

