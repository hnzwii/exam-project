import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./components/main/main.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { FormsModule } from "@angular/forms";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { ServicesGroupComponent } from "./components/services-group/services-group.component";
import { ServiceCardComponent } from "./components/service-card/service-card.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarouselModule } from "ngx-owl-carousel-o";
import { CardsCarouselComponent } from "./components/cards-carousel/cards-carousel.component";
import { DentistCardComponent } from "./components/dentist-card/dentist-card.component";
import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from "./components/footer/footer.component";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { environment } from "src/environments/environment";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { getDatabase, provideDatabase } from "@angular/fire/database";
import { ProfileModule } from "./components/profile/profile.module";
import { AboutComponent } from "./components/about/about.component";
import { DentistComponent } from "./components/dentist/dentist.component";
import { ReviewComponent } from "./components/review/review.component";
import { NgxPaginationModule } from "ngx-pagination";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { ServicesComponent } from "./components/services/services.component";
import { SingleServiceComponent } from "./components/single-service/single-service.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavigationComponent,
    ServicesGroupComponent,
    ServiceCardComponent,
    CardsCarouselComponent,
    DentistCardComponent,
    FooterComponent,
    AboutComponent,
    DentistComponent,
    ReviewComponent,
    ContactsComponent,
    ServicesComponent,
    SingleServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ProfileModule,
    NgxPaginationModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
