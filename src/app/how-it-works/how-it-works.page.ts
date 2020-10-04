import { Component, NgZone, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.page.html',
  styleUrls: ['./how-it-works.page.scss'],
})
export class HowItWorksPage implements OnInit {
  works: any;
  faqs: any;

  // public works: Array<{ name: String, description: String, image?: String }> = [
  //   {
  //     name: "How It Works",
  //     description: "Emi Value.com is an online loan facilitator, with active partnerships with all leading banks –both private sectors, as well as NBFC’s. We help in choosing the best solution for your customers. We present an easy to use mobile application through which any referee can register as a Channel Partner with us, and start referring potential borrowers. <br>  We help your customers in getting the best loan option after comparing multiple options. We work out the solution for them- be it in terms of rates, offers or a suitable tailor made scheme based on their need. The more referrals you make, the more you can earn, when each loan gets disbursed. We also offer online training of our Channel Partners to get equipped with better understanding about loan procedure, and thereby to offer clear solutions for your customers."
  //   },
  //   {
  //     name: "Why Us",
  //     description: "In a traditional loan referral concept you have to become an employee or an agent with a bank or NBFC to earn out of your loan referrals. This is not possible if you are pursuing any other profession. Also, you will have to follow up and help with he complete loan documentation till disbursement to earn your rewards. <br> With Emi Value.com all you need to do is to enter the details of your clients from the comforts of your office or home through our easy to use app on your Smartphone. You can also track the status of their applications in real time. If one bank is not offering them the required loan amount, they or you do not need to make a tiring walk to second bank, as we will take care of that too. The loan applications too will be processed fast, as the banks are receiving a complete screened information about the customer through us. <br> The possibilities of your rewards too are limitless. So refer more and earn more."
  //   },
  //   {
  //     name: "Mobile App How It Works",
  //     description: "With prior confirmation, customers will receive a short phone call from one of our representative and will be asked a small range of questions relating to their new or current loan requirements. <br> The representative will pass that information to our finance specialist who will assess the details and determine the best solution as per customer`s needs. <br> If your customer is happy to get referred, we will connect the customer with desired financial institutions and arrange to get them serviced without any intermediary"
  //   },
  // ]
  // public faqs: Array<{ name: String, description: String, image?: String }> =
  //   [
  //     {
  //       name: "What Is EMI VALUE..?",
  //       description: "EMIVALUE is an online B2B platform where property advisors, financial consultants, builders, insurance advisors, or just anyone can refer their clients who are having any loan requirements. <br>   You have the convenience of referring your leads using an easy to use app and get rewards for each of your referrals. "
  //     },
  //     {
  //       name: "How can I become a channel partner of EMI VALUE?",
  //       description: "All you need to do is to register on our site as a channel partner. It is a simple process.      <ul><li>          You would need to provide your personal and professional details in the registration/signup section on our mobile platform      </li>      <li>Once you are registered with us, we provide you with a User ID (which is your email ID) , and PIN which is unique numeric code.</li>      <li>Now you can start sending your referrals, by filling in the details of your clients or friends, who are looking out for a loan.</li>      </ul>    "
  //     },
  //     {
  //       name: "How can I know when the loan I referred is disbursed?      ",
  //       description: "You can check the status of each referral you are making at real time using our app. In this way, it is easy to track and claim your rewards.   "
  //     },
  //     {
  //       name: "I don't know anything about loans. So how can I advise customers?      ",
  //       description: "EMI VALUE is offering online training for all interested channel partners to equip themselves with better understanding of various loans      "
  //     },
  //     {
  //       name: "How do I know which is the best bank for my customers?     ",
  //       description: "EMI VALUE is having active tie ups with all leading banks and NBFCs all over India. So we can help your clients to get loan from the best bank based on their requirements and convenience. You will not have to worry about it.    "
  //     },
  //     {
  //       name: "What are the benefits of being a channel partner of Emi Value’s?",
  //       description: "Once you join as a channel partner, you can refer any leads to us and start earning for each referral.<ul>    <li>There are no upper limits for your earnings. The more you refer, the more you can earn. Besides, we are conducting various reward schemes and contests from time to time in which you can participate and earn more. This earning can be regular, if you are regular in referring leads, and can be part of your main income or passive income.</li>    <li>        With Emi Value’s easy to use app, you have the convenience of referring leads while on the go.    </li>    <li>        You can track the status of each application your have referred in real time till disbursement We provide online assistance for any of your queries.    </li></ul>    "
  //     },
  //     {
  //       name: "Do I need to collect the documents of my clients for submitting to the bank?      ",
  //       description: "Not really. You only need to refer leads to us, which include basic details of the customer like customer name, contact number, address and loan amount that customer is seeking for. You need not worry about the documentation part      "
  //     },
  //     {
  //       name: "Who can become channel partners of Emi Value?     ",
  //       description: "Any individual, partnership, private limited or public limited companies, proprietary, or any other entity interested in referring potential loan customers can be a channel partner with us. There are no other qualifications required.      "
  //     },
  //     {
  //       name: "What is the process I need to follow for referring leads?   ",
  //       description: "All you need to do now is:<ul>    <li>Login to our mobile app.</li>    <li>Provide your basic details (like name, mobile number, address etc).</li>    <li>You will get a unique User ID (your email), and PIN.</li></ul>Now start updating details of your customer like their name, contact no, address and loan amount looking for in the app"
  //     },
  //   ]
  constructor(private userAPI: UserService,
    private zone: NgZone,) { }

  ngOnInit() {
    this.userAPI.gethowitworks()
    .subscribe((res) => {
      this.zone.run(() => {
        console.log(res);
        if (res.isSuccess) {
          this.works = res.works;
          this.faqs = res.faqs;
        }
      })
    });
  }

  captureName() {

  }

}
