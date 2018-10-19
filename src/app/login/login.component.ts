declare function require(name:string);
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {AuthService} from "../shared/auth.service";
import Mnemonic from 'bitcore-mnemonic';
import * as lightwallet from 'eth-lightwallet';
var Web3 = require('web3');

const getAddressesFromSeed = (mnemonic, password) => new Promise(((resolve, reject) => {
	if (mnemonic.split(' ').length !== 12) {
		return reject(new Error('Invalid mnemonic key'));
	}
	lightwallet.keystore.createVault({
		password,
		seedPhrase: mnemonic,
		// random salt
		hdPathString: "m/44'/60'/0'/0",
	}, (err, ks) => {
		if (err) {
			return reject(err);
		}
		const numAddr = 5;
		ks.keyFromPassword('', (keyerr, pwDerivedKey) => {
			if (keyerr) {
				return reject(keyerr);
			}
			ks.generateNewAddress(pwDerivedKey, numAddr);
      const addresses = ks.getAddresses();
      console.log(addresses);
			return resolve({ address: addresses[0], priv_key: ks.exportPrivateKey(addresses[0], pwDerivedKey) });
		});
	});
}));

@Component({
  templateUrl: './login.component.html',
  selector:'login',
  styleUrls:['./login.component.css']
})
export class LoginComponent {
  mnemonic:string = null;
  mnemonicForm: FormGroup;
  public submitted:boolean = false;
  web3: any;

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private authService: AuthService,     
  ) { }

  ngOnInit() {
    this.authService.mnemonic = undefined;
    this.mnemonicForm = this.fb.group({
      mnemonic: new FormControl(this.mnemonic)
    });
    this.web3 = new Web3(Web3.currentProvider || 'http://18.225.16.48:8545');
  }

  onSubmit() {
    this.submitted = true;
    let mnemonic = this.mnemonicForm.value.mnemonic;    
    getAddressesFromSeed(mnemonic, '')
    .then((data:any) => {
      if(data) {        
        this.authService.mnemonic = mnemonic;
        this.authService.privateKey = data.priv_key;
        this.authService.address = data.address;        
        let address = this.authService.address;
        let firstSnip = address.slice(2,6);
        let lastSnip = address.split("").reverse().join("").slice(2,6);
        this.authService.shortAddress = firstSnip + "...." + lastSnip;      
        this.router.navigate(['/single-user']);
        let walletBalance = this.web3.eth.getBalance(address);
        walletBalance.then(value => {
          let amount = value + '';
          amount = amount.slice(0,4);
          amount = "0."+amount;
          let balance = Number(amount);
          this.authService.walletBalance = balance;
        });        
      }
    }).catch(err => {
      console.log(err);
    });    
  }

  createMnemonic() {
    var code =new Mnemonic(Mnemonic.Words.ENGLISH);
    this.mnemonic = code;
  }
}
