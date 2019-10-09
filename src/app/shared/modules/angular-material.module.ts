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
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';


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
        MatSnackBarModule,
        MatIconModule,
        MatTooltipModule,
        MatBadgeModule,
        MatListModule

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
        MatSnackBarModule,
        MatIconModule,
        MatTooltipModule,
        MatBadgeModule,
        MatListModule

    ]
})
export class AngularMaterialModule {
}
