import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuppliesOrGroceryPage } from './supplies-or-grocery.page';

describe('SuppliesOrGroceryPage', () => {
  let component: SuppliesOrGroceryPage;
  let fixture: ComponentFixture<SuppliesOrGroceryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliesOrGroceryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuppliesOrGroceryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
