import { Component } from "@angular/core";
import { NavController, NavParams, App } from "ionic-angular";
import { HomePage } from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private app: App
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  goToHome() {
    // this.navCtrl.push(HomePage);

    this.app.getRootNav().setRoot(HomePage);
  }
}
