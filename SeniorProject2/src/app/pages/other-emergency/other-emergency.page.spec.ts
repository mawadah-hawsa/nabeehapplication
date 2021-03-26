import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherEmergencyPage } from './other-emergency.page';

describe('OtherEmergencyPage', () => {
  let component: OtherEmergencyPage;
  let fixture: ComponentFixture<OtherEmergencyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherEmergencyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtherEmergencyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
