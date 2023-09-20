import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-search-product',
  templateUrl: './bottom-search-product.component.html',
  styleUrls: ['./bottom-search-product.component.scss'],
})
export class BottomSearchProductComponent {
  searchForm: FormGroup;

  constructor(private router: Router) {
    this.searchForm = new FormGroup({
      search: new FormControl('', [Validators.required, Validators.min(2)]),
    });
  }

  searchProduct(event: Event) {
    event.preventDefault();

    this.router.navigate([], {
      queryParams: { search: this.searchForm.get('search')?.value },
    });
  }
}
