import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestIdDirective } from './test-id.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [TestIdDirective],
  exports: [TestIdDirective]
})
export class DataTestIdModule {}
