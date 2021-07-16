import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { parseHTML } from 'jquery';
import { BankAccountItem } from 'src/shared/models/bank-account.model';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.scss']
})
export class BankAccountsComponent implements OnInit {

  @Input() bankAccounts: BankAccountItem[] = new Array<BankAccountItem>();

  constructor() { }

  ngOnInit(): void {
    this.bankAccounts = [
      {
        'name': 'Chase Total Checking',
        'type': 'checking',
        'imgPath': '../../assets/chaseLogo.svg',
        'interestRate': 0.01,
        'monthlyFee': 12,
        'sub': 225,
        'overdraftFee': 34,
        'debitCard': 'Yes',
        'description': 'Chase is one of the largest banks in the United States. The advantage of having an account with them is that, well, they are everywhere. So, if you like to road trip or fliy all around the country, this may be a good option for you as you are almost guaranteed to have a branch near you wherever you are. The down side though, is that you also get all the fees of a big bank as well, if you are not careful with avoiding them. There are ways to avoid the monthly maintenance fee, and to turn off the overdraft feature, but those are extra steps to avoid those, which is inconvenient.',
        'appLink': 'https://account.chase.com/consumer/banking/RT62337?sitelink=headline&jp_cmp=rb/Retail_Brand_BMM_Chk-Bnk_SEM_IFP_DeskTab_Standard_NA/sea/p25218732600/chase+checking&opti_ca=674189475&opti_ag=33556516039&opti_ad=531212795162&opti_key=aud-461562237081:kwd-27929122426&gclid=CjwKCAjwlrqHBhByEiwAnLmYUPOfW7xfWnECoeAp18HQDWwpnL6leXzl0TBdddhMbiupKpaSYCRBNhoCP-YQAvD_BwE&gclsrc=aw.ds'
      },
      {
        'name': 'Mountain America CU MyFree Checking',
        'type': 'checking',
        'imgPath': '../../assets/macuLogo.png',
        'interestRate': 0,
        'monthlyFee': 0,
        'sub': 0,
        'overdraftFee': 25,
        'debitCard': 'Yes',
        'description': 'Mountain America Credit Union services quite a few states on the west side of the United States. If you happen to live in one of them, this may be a great option. This account is free to have, and they share the credit union network across the country, so although you might not have a branch everywhere, you sure will have an ATM without fees. This account is great for simplicity. There aren\'t a lot of strong pros, but there aren\'t a lot of strong cons either.',
        'appLink': 'https://www.macu.com/accounts/checking/free-checking'
      },
      {
        'name': 'Bonus: Charles Schwab Investor Checking',
        'type': 'checking',
        'imgPath': '../../assets/csLogo.png',
        'interestRate': 0.03,
        'monthlyFee': 0,
        'sub': 0,
        'overdraftFee': 0,
        'debitCard': 'Yes',
        'description': 'Now, this is my personal favorite. It has a few cons that can be a deal breaker for some, but the pros overweight those, to me at least. The main 2 features of this account are 1. no monthly fees, so it is free to use, and 2. they reimburse you for any ATM fees for withdrawing money, you heard that right! So, if you\'re someone who likes to go to Vegas but doesn\'t want to pay $12 for every withdrawal, this could be a strong option for you. Now, for my international vacationers out there, this also applies overseas, so this could save you a lot of money depending on how often you\'d use this. The major drawback is, Charles Schwab does not have a lot of branches throughout the U.S, so if you need any in-person interactions and you don\'t live near a branch, you\'re out of luck. BUT... their phone customer service is exceptional, just an FYI.',
        'appLink': 'https://www.schwab.com/checking'
      },
      {
        'name': 'Ally Savings',
        'type': 'savings',
        'imgPath': '../../assets/allyLogo.png',
        'interestRate': 0.5,
        'monthlyFee': 0,
        'sub': 0,
        'overdraftFee': 0,
        'debitCard': 'No',
        'description': 'Ally is one of many online only banking options when it comes to High Yield Savings Accounts (HYSAs). Although they all are pretty similar and offer similar interest rates, Ally has something that can come in handy, should an emergency occur... Zelle. Having Zelle available with your savings account can come in clutch if something happens. Zelle essentially allows you to skip the 1-3 business day waiting period to transfer money out all the way down to a matter of refreshing the page at your other bank... Yes, that fast.',
        'appLink': 'https://google.com'
      }
    ]
  }

  get getChecking() {
    return this.bankAccounts.filter( x => x.type === 'checking')
  }

  get getSavings() {
    return this.bankAccounts.filter( x => x.type === 'savings')
  }

}
