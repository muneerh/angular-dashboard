import { EventEmitter } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

export enum EventType {
  TOKEN_CHANGE
}

@Injectable()
export class AuthService {

  public events: EventEmitter<EventType> = new EventEmitter();
  private token: string = null;

  constructor () {
    this.RestoreToken();
  }

  private RestoreToken () {
    const token = sessionStorage.getItem('authToken');
    if (token) {
      this.token = token;
    }
  }

  get Token () {
    return this.token;
  }

  set Token(token: string) {
    this.token = token;
    this.events.emit(EventType.TOKEN_CHANGE);
    sessionStorage.setItem('authToken' , token);
  }

  Unauthenticate() {
    this.events.emit(EventType.TOKEN_CHANGE);
    this.token = null;
    sessionStorage.setItem('authToken' , '');
  }
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private auth: AuthService) {
  }
  canActivate () {
    return !!this.auth.Token;
  }
}


@Injectable()
export class UnAuthGuard implements CanActivate {
  constructor (private auth: AuthService) {
  }
  canActivate () {
    return !this.auth.Token;
  }
}


