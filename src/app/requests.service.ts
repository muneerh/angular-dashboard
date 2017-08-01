import { Injectable } from '@angular/core';
import { AppState } from './shared/Definitions';
import { Store } from '@ngrx/store';

/**
 * Represents results from a login attempt.
 * It might be success or fail; but for convienence all functions
 * must return this function.
 */
interface ILoginResult {
  token: string;
  success: boolean;
  error: Error;
}

@Injectable()
export class RequestsService {

  constructor(private store: Store<AppState>) {
    // private
  }
  async AuthenticateByUserPassword (username: string, password: string): Promise<ILoginResult> {
    return {
        success: true,
        token: 'asfasfhashflaskjhflasjkhsfaskhsfasshfjaskfajssjf',
        error: null
      }
  }
}
