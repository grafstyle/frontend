import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

import { AuthModule } from '@auth0/auth0-angular';
import { ProfileComponent } from './profile/profile.component';
import { PostInputComponent } from './post-input/post-input.component';
import { FollowedComponent } from './home/followed/followed.component';
import { LinksComponent } from './home/links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    PostInputComponent,
    FollowedComponent,
    LinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'actuality-social.us.auth0.com',
      clientId: 'vVks5NbSd8KdAD9P7ILxI84b4Mdup09a',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
