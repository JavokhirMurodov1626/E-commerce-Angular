import { DropDownAnimation } from './animations';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [DropDownAnimation]
})
export class NavbarComponent {
  isActive = false;
  isOpen = false;
  isModalOpen: boolean = false;
  weightValue: number = 0;
  selectedUnit: string = 'kg';
  sliderValue: number = 0;
  checked: boolean = false;
  isHomePage: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = event.urlAfterRedirects === '/';
      }
    });
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.isActive = this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
    this.isActive = false;
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  getDeliveryCost(): number {
    if (this.selectedUnit === 'kg') {
      return this.weightValue * 12;
    } else if (this.selectedUnit === 'funt') {
      return this.weightValue * 6;
    } else {
      return 0;
    }
  }

  onSliderChange(event: any): void {
    this.sliderValue = parseFloat(event.target.value);
    this.weightValue = this.sliderValue;
  }

  onWeightInputChange(): void {
    this.sliderValue = parseFloat(this.weightValue.toString());
  }

  getFormattedDeliveryCost(): string {
    const deliveryCost = this.getDeliveryCost();
    return deliveryCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }
}
