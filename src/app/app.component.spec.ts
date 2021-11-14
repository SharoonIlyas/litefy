import {TestBed, waitForAsync} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AppModule, httpTranslateLoader} from './app.module';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";

describe('AppComponent', () => {
    let translate: TranslateService;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: httpTranslateLoader,
                        deps: [HttpClient]
                    }
                })
            ],
            declarations: [
                AppComponent
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
