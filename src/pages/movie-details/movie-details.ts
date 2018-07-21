import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  LoadingController,
  ModalController
} from "ionic-angular";
import { MoviesProvider } from "../../providers/movies/movies";
import { AddCommentPage } from "../add-comment/add-comment";
import { CommentsProvider } from "../../providers/comments/comments";
import { AvaliacoesProvider } from "../../providers/avaliacoes/avaliacoes";

/**
 * Generated class for the MovieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-movie-details",
  templateUrl: "movie-details.html"
})
export class MovieDetailsPage {
  movie_id: number;
  movie_original_title: string;
  movie_overview: string;
  movie_poster_path: string;

  loader;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private moviesProvider: MoviesProvider,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    private commentsProvider: CommentsProvider,
    private avaliacoesProvider: AvaliacoesProvider
  ) {
    this.movie_id = this.navParams.get("id");

    this.loader = this.loadingCtrl.create({
      content: "Carregando..."
    });
    this.loader.present();

    this.moviesProvider.getMovie(this.movie_id).then(data => {
      const response = data as any;
      this.movie_original_title = response.original_title;
      this.movie_overview = response.overview;
      this.movie_poster_path = response.poster_path;

      this.loader.dismiss();
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MovieDetailsPage");
  }

  addComment() {
    let commentModal = this.modalCtrl.create(AddCommentPage, {
      id: this.movie_id
    });
    commentModal.present();
  }

  backToList() {
    this.navCtrl.pop();
  }

  getComments() {
    return this.commentsProvider.getComments();
  }

  addNota(nota: number) {
    this.avaliacoesProvider.adicionar(nota);
  }

  getAvaliacoes() {
    return this.avaliacoesProvider.list();
  }
}
