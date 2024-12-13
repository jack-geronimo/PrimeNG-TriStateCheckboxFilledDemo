import { Component } from '@angular/core';
import { ImportsModule } from './imports';
@Component({
    selector: 'tri-state-checkbox-filled-demo',
    templateUrl: './tri-state-checkbox-filled-demo.html',
    standalone: true,
    imports: [ImportsModule]
})
export class TriStateCheckboxFilledDemo {
    value: boolean | null = null;
}
