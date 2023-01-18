import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { StaticsPage } from './statics.page';

describe('staticsPage', () => {
  let component: StaticsPage;
  let fixture: ComponentFixture<StaticsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaticsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(StaticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
