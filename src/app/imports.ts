import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';

@NgModule({
  imports: [
    FormsModule,
    TriStateCheckboxModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    TriStateCheckboxModule,
  ],
  providers: []
})
export class ImportsModule {
}
