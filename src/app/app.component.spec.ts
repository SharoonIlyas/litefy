import {TestBed, waitForAsync} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AppModule, httpTranslateLoader} from './app.module';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {NgProgressModule} from "ngx-progressbar";
import {NgProgressHttpModule} from "ngx-progressbar/http";
import {HeaderComponent} from "./components/header/header.component";
import {RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {LoginAuthenticateComponent} from "./pages/login/login-authenticate/login-authenticate.component";
import {LoginCallbackComponent} from "./pages/login/login-callback/login-callback.component";
import {HomeComponent} from "./pages/home/home.component";
import {ShearchBoxComponent} from "./components/shearch-box/shearch-box.component";
import {PlayerComponent} from "./components/player/player.component";
import {SearchComponent} from "./pages/search/search.component";
import {ContentListComponent} from "./components/content-list/content-list.component";
import {ArtistComponent} from "./pages/artist/artist.component";
import {ShowComponent} from "./pages/show/show.component";
import {AlbumComponent} from "./pages/album/album.component";
import {PlaylistComponent} from "./pages/playlist/playlist.component";
import {LibraryComponent} from "./pages/library/library.component";
import {PodcastsComponent} from "./pages/podcasts/podcasts.component";
import {LanguageSwitcherComponent} from "./components/language-switcher/language-switcher.component";
import {KaraokeComponent} from "./pages/karaoke/karaoke.component";
import {VolumeBoxComponent} from "./components/volume-box/volume-box.component";
import {SettingsComponent} from "./pages/settings/settings.component";
import {YoutubePlayerComponent} from "./components/youtube-player/youtube-player.component";
import {UserProfileComponent} from "./pages/user-profile/user-profile.component";

describe('AppComponent', () => {
    let translate: TranslateService;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientTestingModule,
                NgProgressModule,
                NgProgressHttpModule,
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: httpTranslateLoader,
                        deps: [HttpClient]
                    }
                })
            ],
            declarations: [
                AppComponent,
                LoginAuthenticateComponent,
                LoginCallbackComponent,
                HomeComponent,
                HeaderComponent,
                ShearchBoxComponent,
                PlayerComponent,
                SearchComponent,
                ContentListComponent,
                ArtistComponent,
                ShowComponent,
                AlbumComponent,
                PlaylistComponent,
                LibraryComponent,
                PodcastsComponent,
                LanguageSwitcherComponent,
                KaraokeComponent,
                VolumeBoxComponent,
                SettingsComponent,
                YoutubePlayerComponent,
                UserProfileComponent
            ],
            providers: [TranslateService]
        }).compileComponents();

        translate = TestBed.get(TranslateService);
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
});
