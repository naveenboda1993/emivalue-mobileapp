import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.page.html',
  styleUrls: ['./how-it-works.page.scss'],
})
export class HowItWorksPage implements OnInit {

  public works: Array<{ name:String, description: String, image?: String}> =[
    {
      name: 'How It Works',
      description: 'Emi Value.com is an online loan facilitator, with active partnerships with all leading banks –both private sectors, as well as NBFC’s. We help in choosing the best solution for your customers. We present an easy to use mobile application through which any referee can register as a Channel Partner with us, and start referring potential borrowers. <br>  We help your customers in getting the best loan option after comparing multiple options. We work out the solution for them- be it in terms of rates, offers or a suitable tailor made scheme based on their need. The more referrals you make, the more you can earn, when each loan gets disbursed. We also offer online training of our Channel Partners to get equipped with better understanding about loan procedure, and thereby to offer clear solutions for your customers.'
    },
    {
      name: 'Why Us',
      description: 'In a traditional loan referral concept you have to become an employee or an agent with a bank or NBFC to earn out of your loan referrals. This is not possible if you are pursuing any other profession. Also, you will have to follow up and help with he complete loan documentation till disbursement to earn your rewards. <br> With Emi Value.com all you need to do is to enter the details of your clients from the comforts of your office or home through our easy to use app on your Smartphone. You can also track the status of their applications in real time. If one bank is not offering them the required loan amount, they or you do not need to make a tiring walk to second bank, as we will take care of that too. The loan applications too will be processed fast, as the banks are receiving a complete screened information about the customer through us. <br> The possibilities of your rewards too are limitless. So refer more and earn more.'
    },
    {
      name: 'Mobile App How It Works',
      description: 'With prior confirmation, customers will receive a short phone call from one of our representative and will be asked a small range of questions relating to their new or current loan requirements. <br> The representative will pass that information to our finance specialist who will assess the details and determine the best solution as per customer`s needs. <br> If your customer is happy to get referred, we will connect the customer with desired financial institutions and arrange to get them serviced without any intermediary'
    },
  ]
  public faqs: Array<{ name:String, description: String, image?: String}> =[
    {
      name: 'What Is EMI VALUE..?',
      description: 'EMIVALUE is an online B2B platform where property advisors, financial consultants, builders, insurance advisors, or just anyone can refer their clients who are having any loan requirements. <br>   You have the convenience of referring your leads using an easy to use app and get rewards for each of your referrals. How can I become a channel partner of EMI VALUE? '
    },
  ]
  constructor() { }

  ngOnInit() {
  }

  captureName(){

  }

}
