import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { MoviesProvider } from "../providers/movies/movies";
import { HttpClientModule } from "../../node_modules/@angular/common/http";
import { MovieDetailsPage } from "../pages/movie-details/movie-details";
import { ComponentsModule } from "../components/components.module";
import { AddCommentPage } from "../pages/add-comment/add-comment";
import { CommentsProvider } from "../providers/comments/comments";
import { AvaliacoesProvider } from "../providers/avaliacoes/avaliacoes";
import { LoginPage } from "../pages/login/login";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MovieDetailsPage,
    AddCommentPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MovieDetailsPage,
    AddCommentPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MoviesProvider,
    CommentsProvider,
    AvaliacoesProvider
  ]
})
export class AppModule {}
