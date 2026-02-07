import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  isLoaderShowing = signal<boolean>(false);
}
