import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loaderStatus = new BehaviorSubject<boolean>(false);

  get loaderStatus$() {
    return this.loaderStatus.asObservable();
  }

  show() {
    this.loaderStatus.next(true);
  }

  hide() {
    this.loaderStatus.next(false);
  }
}
