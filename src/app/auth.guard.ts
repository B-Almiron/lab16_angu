import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  register // El token no existe, el usuario no está autenticado
    (registerData: { username: string; password: string; }) {
      throw new Error('Method not implemented.');
  }

  constructor(private router: Router) { }

  canActivate(): boolean {
    const token = localStorage.getItem('token');

    if (token) {
      // El token existe, el usuario está autenticado
      return true;
    } else {
      // El token no existe, el usuario no está autenticado
      this.router.navigate(['/login']);
      return false;
    }
  }

}
