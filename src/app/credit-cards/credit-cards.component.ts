import { Component, Input, OnInit } from '@angular/core';
import { CreditCardItem } from 'src/shared/models/credit-cards.model';

@Component({
  selector: 'app-credit-cards',
  templateUrl: './credit-cards.component.html',
  styleUrls: ['./credit-cards.component.scss']
})
export class CreditCardsComponent implements OnInit {

  @Input() creditCards: CreditCardItem[] = new Array<CreditCardItem>();


  constructor() { }

  ngOnInit(): void {

    this.creditCards = [
      {
        'name': 'American Express Hilton Aspire',
        'imgPath': '../../assets/amexHiltonAspire.png',
        'appLink': 'http://refer.amex.us/ARTHUFjqqr?xl=cp105k'
      },
      {
        'name': 'American Express Hilton Surpass',
        'imgPath': '../../assets/amexHiltonSurpass.png',
        'appLink': 'http://refer.amex.us/ARTHUDFIYp?xl=cp105k'
      },
      {
        'name': 'American Express Delta Platinum',
        'imgPath': '../../assets/amexDeltaPlatinum.png',
        'appLink': 'http://refer.amex.us/ARTHUDv1WA?xl=cp105k'
      },
      {
        'name': 'American Express Charles Schwab Platinum',
        'imgPath': '../../assets/amexCSPlatinum.jpg',
        'appLink': 'https://www.schwab.com/credit-cards'
      },
      {
        'name': 'American Express Gold',
        'imgPath': '../../assets/amexGold.png',
        'appLink': 'http://refer.amex.us/ARTHUFcqTE?xl=cp106r'
      },
      {
        'name': 'Chase Sapphire Preferred',
        'imgPath': '../../assets/chaseCSP.png',
        'appLink': 'https://www.referyourchasecard.com/6b/AFSVSU98PB'
      },
      {
        'name': 'Chase Freedom Unlimited',
        'imgPath': '../../assets/chaseCFU.png',
        'appLink': 'https://www.referyourchasecard.com/18g/6BMU39STBP'
      },
      {
        'name': 'Citi Premier',
        'imgPath': '../../assets/citiPremier.jpg',
        'appLink': 'https://citicards.citi.com/usc/LPACA/Citi/Rewards/Premier/ps/index.html?cmp=knc|acquire|2006|CARDS|Google|BR&targetid=kwd-1341631461&ds_rl=1284033&gclid=CjwKCAjwlrqHBhByEiwAnLmYUEi0JRkBS5xGeGh83fyWeXuqZyIVQ6bp9lN5qhmuun-kjdTdzVUBTBoCsY4QAvD_BwE&gclsrc=aw.ds&BT_TX=1&ProspectID=DF07FFCC139842D5963B974D6D9B5246'
      },
      {
        'name': 'Bank of America Premium Rewards',
        'imgPath': '../../assets/bofaPR.png',
        'appLink': 'https://secure.bankofamerica.com/apply-credit-cards/public/icai-single/#/info/'
      }
    ]
  }
}
