import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  credentials: TokenPayload = {
    email: '',
    name: '',
    password: ''
  };
  public frmSignup: FormGroup;

  constructor(private auth: AuthenticationService, private router: Router,private fb: FormBuilder) {
    this.frmSignup = this.createSignupForm();

  }

  register() {
    this.auth.register(this.credentials).subscribe(() => {
      // if(this.credentials.email == "" || this.credentials.name == "" || this.credentials.password == ""){
      //   alert("Please fill all fields to register");}
      //   else

    console.log("kafjdjfadslkj");

      this.router.navigateByUrl('/login');
    }, (err) => {
      console.error(err);
    });
  }
  back(){
    console.log("aasd");
    this.router.navigateByUrl('/home');
  }
  createSignupForm(): FormGroup {
    return this.fb.group(
      {
        name:[],
        email: [
          null,
          Validators.compose([Validators.email, Validators.required])
        ],
        password: [
          null,
          Validators.compose([
            Validators.required,
            // check whether the entered password has a number
            CustomValidators.patternValidator(/\d/, {
              hasNumber: true
            }),
            // check whether the entered password has upper case letter
            CustomValidators.patternValidator(/[A-Z]/, {
              hasCapitalCase: true
            }),
            // check whether the entered password has a lower case letter
            CustomValidators.patternValidator(/[a-z]/, {
              hasSmallCase: true
            }),
            // check whether the entered password has a special character
            CustomValidators.patternValidator(
              /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
              {
                hasSpecialCharacters: true
              }
            ),
            Validators.minLength(8)
          ])
        ],
        confirmPassword: [null, Validators.compose([Validators.required])]
      }
    );
  }

}