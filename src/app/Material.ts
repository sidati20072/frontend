import { NgModule } from '@angular/core';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';



@NgModule({
    imports: [
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatSnackBarModule,
        MatCardModule,
        MatSelectModule,
        MatGridListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule
    ],
    exports: [
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatSnackBarModule,
        MatCardModule,
        MatSelectModule,
        MatGridListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule
    ],
    providers: [ MatDatepickerModule],
    bootstrap: []
})
export class MaterialModule { }
