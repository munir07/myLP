import { NgModule } from "@angular/core";

//import { FlexLayoutModule } from '@angular/flex-layout' 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

const MODULES = [
    //FlexLayoutModule,
    MatToolbarModule, MatInputModule, MatFormFieldModule, 
    MatButtonModule, MatCardModule,
    MatIconModule
];

@NgModule({
    imports: MODULES,
    exports: MODULES
})

export class MaterialModule { }