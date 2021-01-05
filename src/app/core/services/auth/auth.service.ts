import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private af: AngularFireAuth
  ) { }

  createUser(email: string, password: string) {
    return this.af.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, pass: string) {
    return this.af.signInWithEmailAndPassword(email, pass)
  }

  logout() {
    return this.af.signOut();
  }

  hasUser() {
    return this.af.authState
  }
}
