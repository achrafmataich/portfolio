import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-powershell';

import { PrismComponent } from './components/prism/prism.component';

@NgModule({
  declarations: [
    PrismComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrismComponent
  ]
})
export class SharedModule { }
