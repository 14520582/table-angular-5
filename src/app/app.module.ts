import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BookService } from './service/book.service';
import { BookCdktableComponent } from './component/book-cdktable/book-cdktable.component';
import { BookMytableComponent } from './component/book-mytable/book-mytable.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MyDialogReactiveFormComponent } from './component/my-dialog-reactive-form/my-dialog-reactive-form.component';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { MyDateAdapter } from './utils/my-date-adapter'
import { Constant } from './utils/constant' 
@NgModule({
  declarations: [
    AppComponent,
    BookCdktableComponent,
    BookMytableComponent,
    MyDialogReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    CdkTableModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule
  ],
  entryComponents: [MyDialogReactiveFormComponent],
  providers: [
    BookService,
    {provide: DateAdapter, useClass: MyDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: Constant.MY_DATE_FORMATS},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
