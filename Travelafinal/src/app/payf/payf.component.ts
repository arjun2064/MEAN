import { Component, AfterViewChecked } from '@angular/core';
import { EmailService } from '../email.service';
declare let paypal: any;

@Component({
  selector: 'app-payf',
  templateUrl: './payf.component.html',
  styleUrls: ['./payf.component.css']
})
export class PayfComponent implements AfterViewChecked {


  addScript: boolean = false;
  paypalLoad: boolean = true;
  
  finalAmount: number = 1300;

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AcFmpHE6VW_pEvgMa4UCTBH9uh2smmUwMypKTrICqL-TQEsBSGIHjsu8_wueFGL2gfYltGxRPi9ES-Bk',
      production: ''
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'USD' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
      })
    }
  };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }
  
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }



}

