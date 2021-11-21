import {AppModule} from './../../app.module';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ContentListComponent} from './content-list.component';
import {UserService} from "../../services/user.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClientModule} from "@angular/common/http";
import {of} from "rxjs/internal/observable/of";

describe('ContentListComponent', () => {
    let component: ContentListComponent;
    let fixture: ComponentFixture<ContentListComponent>;
    let mockUserService;
    beforeEach(waitForAsync(() => {
        mockUserService = jasmine.createSpyObj(['getUser']);
        mockUserService.getUser.and.returnValue(of({product: "track"}));
        TestBed.configureTestingModule({
            declarations: [ContentListComponent],
            imports: [AppModule, HttpClientModule],
            providers: [{provide: UserService, useValue: mockUserService}]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContentListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('testing getRootItem method', () => {
        const mock = {
            item: 'value1',
            subItem: {
                item: 'value2'
            }
        };

        component.rootItem = 'subItem';
        const value = component.getRootItem(mock);
        expect(value.item).toEqual(mock.subItem.item);
    });
});
