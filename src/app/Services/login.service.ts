import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loggedInManagement: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
}
