import { Component, ViewEncapsulation } from '@angular/core';
import { NotoEmojiIconsRegistry, } from '@triangular/noto-emoji-icons';

import {
  notoEmojiU1F97B,
  notoEmojiU1F97C,
  notoEmojiU1F97D,
  notoEmojiU1F97E,
  notoEmojiU1F97F,
  notoEmojiU1F980,
  notoEmojiU1F981,
  notoEmojiU1F982,
  notoEmojiU1F983,
  notoEmojiU1F984,
  notoEmojiU1F985,
  notoEmojiU1F986,
  notoEmojiU1F987,
  notoEmojiU1F988,
  notoEmojiU1F989,
  notoEmojiU1F98A,
  notoEmojiU1F98B,
  notoEmojiU1F98C,
  notoEmojiU1F98D,
  notoEmojiU1F98E,
  notoEmojiU1F98F,
  notoEmojiU1F990,
  notoEmojiU1F991,
  notoEmojiU1F992,
  notoEmojiU1F993,
  notoEmojiU1F994,
  notoEmojiU1F995,
  notoEmojiU1F996,
  notoEmojiU1F997,
  notoEmojiU1F998,
  notoEmojiU1F999,
  notoEmojiU1F99A,
  notoEmojiU1F99B,
  notoEmojiU1F99C,
  notoEmojiU1F99D,
  notoEmojiU1F99E,
  notoEmojiU1F99F,
  notoEmojiU1F9A0,
  notoEmojiU1F9A1,
  notoEmojiU1F9A2,
  notoEmojiU1F9A5,
  notoEmojiU1F9A6,
  notoEmojiU1F9A7,
  notoEmojiU1F9A8,
  notoEmojiU1F9A9,
  notoEmojiU1F9Aa,
  notoEmojiU1F9Ae,
  notoEmojiU1F9Af,
  notoEmojiU1F9B0,
  notoEmojiU1F9B1,
  notoEmojiU1F9B2,
  notoEmojiU1F9B3,
  notoEmojiU1F9B4,
  notoEmojiU1F9B5,
  notoEmojiU1F9B51F3Fb,
  notoEmojiU1F9B51F3Fc,
  notoEmojiU1F9B51F3Fd,
  notoEmojiU1F9B51F3Fe,
  notoEmojiU1F9B51F3Ff,
  notoEmojiU1F9B6,
  notoEmojiU1F9B61F3Fb,
  notoEmojiU1F9B61F3Fc,
  notoEmojiU1F9B61F3Fd,
  notoEmojiU1F9B61F3Fe,
  notoEmojiU1F9B61F3Ff,
  notoEmojiU1F9B7,
  notoEmojiU1F9B8,
  notoEmojiU1F9B81F3Fb,
  notoEmojiU1F9B81F3Fb200D2640,
  notoEmojiU1F9B81F3Fb200D2642,
  notoEmojiU1F9B81F3Fc,
  notoEmojiU1F9B81F3Fc200D2640,
  notoEmojiU1F9B81F3Fc200D2642,
  notoEmojiU1F9B81F3Fd,
  notoEmojiU1F9B81F3Fd200D2640,
  notoEmojiU1F9B81F3Fd200D2642,
  notoEmojiU1F9B81F3Fe,
  notoEmojiU1F9B81F3Fe200D2640,
  notoEmojiU1F9B81F3Fe200D2642,
  notoEmojiU1F9B81F3Ff,
  notoEmojiU1F9B81F3Ff200D2640,
  notoEmojiU1F9B81F3Ff200D2642,
  notoEmojiU1F9B8200D2640,
  notoEmojiU1F9B8200D2642,
  notoEmojiU1F9B9,
  notoEmojiU1F9B91F3Fb,
  notoEmojiU1F9B91F3Fb200D2640,
  notoEmojiU1F9B91F3Fb200D2642,
  notoEmojiU1F9B91F3Fc,
  notoEmojiU1F9B91F3Fc200D2640,
  notoEmojiU1F9B91F3Fc200D2642,
  notoEmojiU1F9B91F3Fd,
  notoEmojiU1F9B91F3Fd200D2640,
  notoEmojiU1F9B91F3Fd200D2642,
  notoEmojiU1F9B91F3Fe,
  notoEmojiU1F9B91F3Fe200D2640,
  notoEmojiU1F9B91F3Fe200D2642,
  notoEmojiU1F9B91F3Ff,
  notoEmojiU1F9B91F3Ff200D2640,
  notoEmojiU1F9B91F3Ff200D2642,
  notoEmojiU1F9B9200D2640,
  notoEmojiU1F9B9200D2642,
  notoEmojiU1F9Ba,
  notoEmojiU1F9Bb,
  notoEmojiU1F9Bb1F3Fb,
  notoEmojiU1F9Bb1F3Fc,
  notoEmojiU1F9Bb1F3Fd,
  notoEmojiU1F9Bb1F3Fe,
  notoEmojiU1F9Bb1F3Ff,
  notoEmojiU1F9Bc,
  notoEmojiU1F9Bd,
  notoEmojiU1F9Be,
  notoEmojiU1F9Bf,
  notoEmojiU1F9C0,
  notoEmojiU1F9C1,
  notoEmojiU1F9C2,
} from '@triangular/noto-emoji-icons/icons';

// eslint-disable-next-line @angular-eslint/prefer-standalone
@Component({
  selector: 'app-icons-t',
  templateUrl: './icons-t.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class IconsTComponent {
  icons = [
    notoEmojiU1F97B,
    notoEmojiU1F97C,
    notoEmojiU1F97D,
    notoEmojiU1F97E,
    notoEmojiU1F97F,
    notoEmojiU1F980,
    notoEmojiU1F981,
    notoEmojiU1F982,
    notoEmojiU1F983,
    notoEmojiU1F984,
    notoEmojiU1F985,
    notoEmojiU1F986,
    notoEmojiU1F987,
    notoEmojiU1F988,
    notoEmojiU1F989,
    notoEmojiU1F98A,
    notoEmojiU1F98B,
    notoEmojiU1F98C,
    notoEmojiU1F98D,
    notoEmojiU1F98E,
    notoEmojiU1F98F,
    notoEmojiU1F990,
    notoEmojiU1F991,
    notoEmojiU1F992,
    notoEmojiU1F993,
    notoEmojiU1F994,
    notoEmojiU1F995,
    notoEmojiU1F996,
    notoEmojiU1F997,
    notoEmojiU1F998,
    notoEmojiU1F999,
    notoEmojiU1F99A,
    notoEmojiU1F99B,
    notoEmojiU1F99C,
    notoEmojiU1F99D,
    notoEmojiU1F99E,
    notoEmojiU1F99F,
    notoEmojiU1F9A0,
    notoEmojiU1F9A1,
    notoEmojiU1F9A2,
    notoEmojiU1F9A5,
    notoEmojiU1F9A6,
    notoEmojiU1F9A7,
    notoEmojiU1F9A8,
    notoEmojiU1F9A9,
    notoEmojiU1F9Aa,
    notoEmojiU1F9Ae,
    notoEmojiU1F9Af,
    notoEmojiU1F9B0,
    notoEmojiU1F9B1,
    notoEmojiU1F9B2,
    notoEmojiU1F9B3,
    notoEmojiU1F9B4,
    notoEmojiU1F9B5,
    notoEmojiU1F9B51F3Fb,
    notoEmojiU1F9B51F3Fc,
    notoEmojiU1F9B51F3Fd,
    notoEmojiU1F9B51F3Fe,
    notoEmojiU1F9B51F3Ff,
    notoEmojiU1F9B6,
    notoEmojiU1F9B61F3Fb,
    notoEmojiU1F9B61F3Fc,
    notoEmojiU1F9B61F3Fd,
    notoEmojiU1F9B61F3Fe,
    notoEmojiU1F9B61F3Ff,
    notoEmojiU1F9B7,
    notoEmojiU1F9B8,
    notoEmojiU1F9B81F3Fb,
    notoEmojiU1F9B81F3Fb200D2640,
    notoEmojiU1F9B81F3Fb200D2642,
    notoEmojiU1F9B81F3Fc,
    notoEmojiU1F9B81F3Fc200D2640,
    notoEmojiU1F9B81F3Fc200D2642,
    notoEmojiU1F9B81F3Fd,
    notoEmojiU1F9B81F3Fd200D2640,
    notoEmojiU1F9B81F3Fd200D2642,
    notoEmojiU1F9B81F3Fe,
    notoEmojiU1F9B81F3Fe200D2640,
    notoEmojiU1F9B81F3Fe200D2642,
    notoEmojiU1F9B81F3Ff,
    notoEmojiU1F9B81F3Ff200D2640,
    notoEmojiU1F9B81F3Ff200D2642,
    notoEmojiU1F9B8200D2640,
    notoEmojiU1F9B8200D2642,
    notoEmojiU1F9B9,
    notoEmojiU1F9B91F3Fb,
    notoEmojiU1F9B91F3Fb200D2640,
    notoEmojiU1F9B91F3Fb200D2642,
    notoEmojiU1F9B91F3Fc,
    notoEmojiU1F9B91F3Fc200D2640,
    notoEmojiU1F9B91F3Fc200D2642,
    notoEmojiU1F9B91F3Fd,
    notoEmojiU1F9B91F3Fd200D2640,
    notoEmojiU1F9B91F3Fd200D2642,
    notoEmojiU1F9B91F3Fe,
    notoEmojiU1F9B91F3Fe200D2640,
    notoEmojiU1F9B91F3Fe200D2642,
    notoEmojiU1F9B91F3Ff,
    notoEmojiU1F9B91F3Ff200D2640,
    notoEmojiU1F9B91F3Ff200D2642,
    notoEmojiU1F9B9200D2640,
    notoEmojiU1F9B9200D2642,
    notoEmojiU1F9Ba,
    notoEmojiU1F9Bb,
    notoEmojiU1F9Bb1F3Fb,
    notoEmojiU1F9Bb1F3Fc,
    notoEmojiU1F9Bb1F3Fd,
    notoEmojiU1F9Bb1F3Fe,
    notoEmojiU1F9Bb1F3Ff,
    notoEmojiU1F9Bc,
    notoEmojiU1F9Bd,
    notoEmojiU1F9Be,
    notoEmojiU1F9Bf,
    notoEmojiU1F9C0,
    notoEmojiU1F9C1,
    notoEmojiU1F9C2,
  ];

  constructor(private registry: NotoEmojiIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
