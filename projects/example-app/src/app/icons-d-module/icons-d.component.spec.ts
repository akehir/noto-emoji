import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsDComponent } from './icons-d.component';
import { NotoEmojiIconsModule } from '@triangular/noto-emoji-icons';

describe('IconsDComponent', () => {
  let component: IconsDComponent;
  let fixture: ComponentFixture<IconsDComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsDComponent ],
      imports: [
        NotoEmojiIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
