/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { VolumeBoxComponent } from './volume-box.component';
import { HttpClient } from '@angular/common/http';
import {AppModule} from "../../app.module";

describe('VolumeBoxComponent', () => {
  let component: VolumeBoxComponent;
  let fixture: ComponentFixture<VolumeBoxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeBoxComponent ],
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
