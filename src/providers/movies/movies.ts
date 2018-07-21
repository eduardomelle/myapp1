import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

/*
  Generated class for the MoviesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoviesProvider {
  api_key: string = "api_key=9a2695c5bac0e19d7d1cc459957b9f83";
  base_path: string = "https://api.themoviedb.org/3/";
  movies_popular_path: string = `${this.base_path}movie/popular?${
    this.api_key
  }&language=pt-BR`;

  constructor(public http: HttpClient) {
    console.log("Hello MoviesProvider Provider");
  }

  getPopularMovies() {
    return new Promise((resolve, reject) => {
      this.http.get(this.movies_popular_path).subscribe(
        response => {
          var data = response as any;
          resolve(data.results);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  getMovie(id) {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${this.base_path}movie/${id}?${this.api_key}&language=pt-BR`)
        .subscribe(
          data => {
            console.log(data);
            resolve(data);
          },
          err => {
            console.log(err);
            reject(err);
          }
        );
    });
  }
}
