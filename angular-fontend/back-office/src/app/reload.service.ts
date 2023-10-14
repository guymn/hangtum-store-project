import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReloadService {
  reloadPage() {
    window.location.reload();
  }

  checkUp(...arr: any[]): boolean {
    for (const iterator of arr) {
      if (iterator == null || iterator == '') {
        return false;
      }
    }
    return true;
  }
}
