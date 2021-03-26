import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PermitsPage } from './permits.page';

describe('PermitsPage', () => {
  let component: PermitsPage;
  let fixture: ComponentFixture<PermitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermitsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PermitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
