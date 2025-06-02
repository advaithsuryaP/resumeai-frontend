import { Component } from '@angular/core';
import { ClassicComponent } from './classic/classic.component';

@Component({
    selector: 'app-layouts',
    imports: [ClassicComponent],
    templateUrl: './layouts.component.html',
    styleUrl: './layouts.component.scss'
})
export class LayoutsComponent {}
