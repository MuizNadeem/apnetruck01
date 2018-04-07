import { Component, OnInit } from "@angular/core";
import { ValidateService } from "../../services/validate.service";
import { FlashMessagesService } from "angular2-flash-messages";
//import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router"

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private _flashMessagesService: FlashMessagesService,
    //private authService: AuthService,
    private router:Router
  ) {}

  ngOnInit() {}

  onRegisterSubmit() {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    };

    // All required fields present?
    if (!this.validateService.validateRegister(user)) {
      this._flashMessagesService.show("Please fill all fields.", {
        cssClass: "alert-danger",
        timeout: 3000
      });
      return false;
    }
    //email valid?
    if (!this.validateService.validateEmail(user.email)) {
      this._flashMessagesService.show("Please fill a valid email", {
        cssClass: "alert-danger",
        timeout: 3000
      });
      return false;
    }

    //register user 
    // this.authService.registerUser(user).subscribe(data => {
    //   if(data.success){
    //     this._flashMessagesService.show("Registered successfully, please login", {
    //       cssClass: "alert-success",
    //       timeout: 3000
    //     });
    //     console.log("qaw");
    //     this.router.navigateByUrl('[/login]');
    //   }
    //   else {
    //     this._flashMessagesService.show("Something went working. Please Try again", {
    //       cssClass: "alert-danger",
    //       timeout: 3000
    //     });
    //     this.router.navigateByUrl('[/register]');
    //   }
    // })

  }
}
