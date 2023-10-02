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

  setImagePath(img: string) {
    const startIndex = img.lastIndexOf('\\') + 1; // Find the last backslash
    const fileName = img.substring(startIndex); // Extract the filename
    const pathBefore = '../../../../../img/Product/';
    const path = `${pathBefore}${fileName}`;

    return path;
  }
}
