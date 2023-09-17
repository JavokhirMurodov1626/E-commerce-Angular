import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BottomSearchProductComponent } from './components/bottom-search-product/bottom-search-product.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    BottomSearchProductComponent,
  ],
  imports: [CommonModule],
  exports: [NavbarComponent, FooterComponent, BottomSearchProductComponent],
})
export class CoreModule {}
