import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  ViewController,
  ToastController,
  AlertController
} from "ionic-angular";
import CommentModel from "../../models/comment.model";
import { CommentsProvider } from "../../providers/comments/comments";

/**
 * Generated class for the AddCommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-add-comment",
  templateUrl: "add-comment.html"
})
export class AddCommentPage {
  movie_id: number;
  toast;
  alert;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private commentsProvider: CommentsProvider,
    private viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController
  ) {
    this.movie_id = navParams.get("id") || 5;

    this.toast = this.toastCtrl.create({
      message: "Comentário adicionado com sucesso!",
      duration: 3000
    });

    this.alert = this.alertCtrl.create({
      title: "Sucesso!",
      subTitle: "Comentário adicionado com sucesso!",
      buttons: ["OK"]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddCommentPage");
  }

  addComment(comment_text) {
    var comment = new CommentModel();
    comment.comment = comment_text;
    comment.movie_id = this.movie_id;
    comment.date = new Date();
    this.commentsProvider.addComment(comment);
    // this.toast.present();
    this.alert.present();
    this.closeModal();
  }

  backToDetail() {
    this.navCtrl.pop();
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
