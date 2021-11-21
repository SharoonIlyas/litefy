import {AppModule} from './../../app.module';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {LanguageSwitcherComponent} from './language-switcher.component';
import {TranslateService} from "@ngx-translate/core";

describe('LanguageSwitcherComponent', () => {
    let translate: TranslateService;
    let component: LanguageSwitcherComponent;
    let fixture: ComponentFixture<LanguageSwitcherComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [LanguageSwitcherComponent],
            imports: [AppModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LanguageSwitcherComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
