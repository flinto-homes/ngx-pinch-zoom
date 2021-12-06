import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { PinchZoomModule } from 'projects/ngx-pinch-zoom/src/public-api';

describe('AppComponent', () => {
  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        PinchZoomModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
