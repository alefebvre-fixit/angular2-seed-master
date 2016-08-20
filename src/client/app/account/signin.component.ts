import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { UserService } from '../services/users.service';
import { FormGroup, FormControl } from '@angular/forms';  





export class SignIn {
  constructor(
    public username: string,
    public password: string
  ) {  }
}


@Component({
  moduleId: module.id,
  templateUrl: 'signin.component.html',
  styleUrls: ['signin.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
  ],
  viewProviders: [UserService],
})
export class SignInComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) {}

  submitted = false;


  ngOnInit(): void {

    let signin = new FormGroup({
        usename: new FormControl("username"),
        password: new FormControl("password"),
    })

  }

  onSubmit(form: any) {
    console.log('you submitted value:', form);  

    this.submitted = true;


    //console.log('onSubmit login' + email);

    /*
    this.userService.login(email, password).subscribe((result) => {
      if (result) {
        this.router.navigate(['']);
      }
    });
    */
  }


}
