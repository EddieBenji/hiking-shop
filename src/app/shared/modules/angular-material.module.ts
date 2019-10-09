import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material:
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';




@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatButtonModule,
        MatMenuModule,
        MatCardModule,
        MatDividerModule,
        MatGridListModule,
        MatToolbarModule,
        MatSnackBarModule
    ],
    exports: [
        MatSidenavModule,
        MatCheckboxModule,
        MatButtonModule,
        MatMenuModule,
        MatCardModule,
        MatDividerModule,
        MatGridListModule,
        MatToolbarModule,
        MatSnackBarModule
    ]
})
export class AngularMaterialModule {
}
