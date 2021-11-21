/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";

import {YoutubePlayerComponent} from "./youtube-player.component";
import {AppModule} from "../../app.module";

describe("YoutubePlayerComponent", () => {
    let component: YoutubePlayerComponent;
    let fixture: ComponentFixture<YoutubePlayerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [YoutubePlayerComponent],
            imports: [AppModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(YoutubePlayerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
