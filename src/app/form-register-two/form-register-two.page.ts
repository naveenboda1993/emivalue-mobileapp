import { Component, OnInit,NgZone  } from '@angular/core';
import { UserService } from './../shared/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-form-register-two',
  templateUrl: './form-register-two.page.html',
  styleUrls: ['./form-register-two.page.scss'],
})
export class FormRegisterTwoPage implements OnInit {
  registerForm: FormGroup;
  constructor(
    private userAPI: UserService,
    private router: Router,
    public fb: FormBuilder,
    private zone: NgZone) {

    this.registerForm = this.fb.group({
      name: [''],
      phone: [''],
      email: ['']
    })
    alert("Hello ");
   }

  ngOnInit() {
  
  }
  onFormSubmit() {
    console.log(this.registerForm.value)
    if (!this.registerForm.valid) {
      return false;
    } else {
      // this.userAPI.addUser(this.registerForm.value)
      //   .subscribe((res) => {
      //     this.zone.run(() => {
      //       console.log(res)
      //       alert(res.key);
      //       // this.registerForm.setValue([name,res]);
      //       // this.registerForm.reset();
      //       // this.router.navigate(['/home']);
      //     })
      //   });
    }
  }
}
