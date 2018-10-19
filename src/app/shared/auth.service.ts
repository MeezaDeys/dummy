import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class AuthService {
  _mnemonic: any;
  _privateKey: any;
  _address: any;
  shortAddress: any;
  walletBalance: any;

  constructor() {
  }  

  get mnemonic() {
    return this._mnemonic;
  }
  set mnemonic(value) {
    if(value !== this._mnemonic) {
      this._mnemonic = value;
    }
  }

  get privateKey() {
    return this._privateKey;
  }
  set privateKey(value) {
    if(value !== this._privateKey) {
      this._privateKey = value;
    }
  }

  get address() {
    return this._address;
  }
  set address(value) {
    if(value !== this._address) {
      this._address = value;
    }
  }
}
