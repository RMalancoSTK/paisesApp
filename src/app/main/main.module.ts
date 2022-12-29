import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './pages/test/test.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule, RouterModule],
})
export class MainModule {}
