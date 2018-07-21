import { Component, Input } from "@angular/core";
import { MovieDetailsPage } from "../../pages/movie-details/movie-details";
import { NavController } from "ionic-angular";

/**
 * Generated class for the MovieCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "movie-card",
  templateUrl: "movie-card.html"
})
export class MovieCardComponent {
  @Input() movie: any;

  constructor(public navCtrl: NavController) {
    console.log("Hello MovieCardComponent Component");
  }

  goToDetails(id) {
    this.navCtrl.push(MovieDetailsPage, {
      id: id
    });
  }
}
