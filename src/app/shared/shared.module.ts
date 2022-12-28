import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { PaisModule } from '../pais/pais.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [SidebarComponent, MenuComponent, FooterComponent],
  exports: [SidebarComponent, MenuComponent, FooterComponent],
  imports: [CommonModule, PaisModule],
})
export class SharedModule {}
