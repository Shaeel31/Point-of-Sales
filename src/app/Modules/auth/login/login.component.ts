
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Email: string;
  Password: string;

  constructor(private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    localStorage.setItem('flag', 'false');
    // console.log(this.countera(), 'called');

  }


  // USER LOGIN FUNCTION
  getLoginDetails() {
    var a = document.forms["Form"]["Email"].value.trim();
    var b = document.forms["Form"]["Password"].value.trim();
    if (a == "admin@gmail.com" && b == "ADMIN889") {
      localStorage.setItem('flag', 'true');
      setTimeout(() => {
        this.router.navigateByUrl('/pages');
      }, 1000);
      this.toastr.success('Loged In Successfully', 'LOGIN SUCCESSFUL')
    }

    else {
      // this.toastrService.danger('Email or Password Incorrect', 'Login Failed');
      this.toastr.error('Email or Password Incorrect', 'Invalid Account Details');
      // document.forms["Form"].reset();
    }

  }

}
