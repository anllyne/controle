import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire'
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  async login(email: string, password: string): Promise<auth.UserCredential> {
    return await this.afa.signInWithEmailAndPassword(email, password);
  }

  logout(): Promise<void> {
    return this.afa.signOut();
  }

  getCurrentUser(): auth.User | null {
    return this.afa.auth.currentUser;
  }

}
