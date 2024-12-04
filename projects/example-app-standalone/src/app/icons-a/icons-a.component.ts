import { Component, ViewEncapsulation } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NotoEmojiIconComponent, NotoEmojiIconsRegistry } from '@triangular/noto-emoji-icons';

import {
  notoEmojiU0023,
  notoEmojiU002320E3,
  notoEmojiU002A,
  notoEmojiU002A20E3,
  notoEmojiU0030,
  notoEmojiU003020E3,
  notoEmojiU0031,
  notoEmojiU003120E3,
  notoEmojiU0032,
  notoEmojiU003220E3,
  notoEmojiU0033,
  notoEmojiU003320E3,
  notoEmojiU0034,
  notoEmojiU003420E3,
  notoEmojiU0035,
  notoEmojiU003520E3,
  notoEmojiU0036,
  notoEmojiU003620E3,
  notoEmojiU0037,
  notoEmojiU003720E3,
  notoEmojiU0038,
  notoEmojiU003820E3,
  notoEmojiU0039,
  notoEmojiU003920E3,
  notoEmojiU00A9,
  notoEmojiU00Ae,
  notoEmojiU1F004,
  notoEmojiU1F0Cf,
  notoEmojiU1F170,
  notoEmojiU1F171,
  notoEmojiU1F17E,
  notoEmojiU1F17F,
  notoEmojiU1F18E,
  notoEmojiU1F191,
  notoEmojiU1F192,
  notoEmojiU1F193,
  notoEmojiU1F194,
  notoEmojiU1F195,
  notoEmojiU1F196,
  notoEmojiU1F197,
  notoEmojiU1F198,
  notoEmojiU1F199,
  notoEmojiU1F19A,
  notoEmojiU1F1E6,
  notoEmojiU1F1E7,
  notoEmojiU1F1E8,
  notoEmojiU1F1E9,
  notoEmojiU1F1Ea,
  notoEmojiU1F1Eb,
  notoEmojiU1F1Ec,
  notoEmojiU1F1Ed,
  notoEmojiU1F1Ee,
  notoEmojiU1F1Ef,
  notoEmojiU1F1F0,
  notoEmojiU1F1F1,
  notoEmojiU1F1F2,
  notoEmojiU1F1F3,
  notoEmojiU1F1F4,
  notoEmojiU1F1F5,
  notoEmojiU1F1F6,
  notoEmojiU1F1F7,
  notoEmojiU1F1F8,
  notoEmojiU1F1F9,
  notoEmojiU1F1Fa,
  notoEmojiU1F1Fb,
  notoEmojiU1F1Fc,
  notoEmojiU1F1Fd,
  notoEmojiU1F1Fe,
  notoEmojiU1F1Ff,
  notoEmojiU1F201,
  notoEmojiU1F202,
  notoEmojiU1F21A,
  notoEmojiU1F22F,
  notoEmojiU1F232,
  notoEmojiU1F233,
  notoEmojiU1F234,
  notoEmojiU1F235,
  notoEmojiU1F236,
  notoEmojiU1F237,
  notoEmojiU1F238,
  notoEmojiU1F239,
  notoEmojiU1F23A,
  notoEmojiU1F250,
  notoEmojiU1F251,
  notoEmojiU1F300,
  notoEmojiU1F301,
  notoEmojiU1F302,
  notoEmojiU1F303,
  notoEmojiU1F304,
  notoEmojiU1F305,
  notoEmojiU1F306,
  notoEmojiU1F307,
  notoEmojiU1F308,
  notoEmojiU1F309,
  notoEmojiU1F30A,
  notoEmojiU1F30B,
  notoEmojiU1F30C,
  notoEmojiU1F30D,
  notoEmojiU1F30E,
  notoEmojiU1F30F,
  notoEmojiU1F310,
  notoEmojiU1F311,
  notoEmojiU1F312,
  notoEmojiU1F313,
  notoEmojiU1F314,
  notoEmojiU1F315,
  notoEmojiU1F316,
  notoEmojiU1F317,
  notoEmojiU1F318,
  notoEmojiU1F319,
  notoEmojiU1F31A,
  notoEmojiU1F31B,
  notoEmojiU1F31C,
  notoEmojiU1F31D,
  notoEmojiU1F31E,
  notoEmojiU1F31F,
} from '@triangular/noto-emoji-icons/icons';

@Component({
    selector: 'app-icons-a',
    templateUrl: './icons-a.component.html',
    styleUrls: [],
    encapsulation: ViewEncapsulation.None,
    imports: [
        NotoEmojiIconComponent,
        NgForOf
    ]
})
export class IconsAComponent {
  icons = [
    notoEmojiU0023,
    notoEmojiU002320E3,
    notoEmojiU002A,
    notoEmojiU002A20E3,
    notoEmojiU0030,
    notoEmojiU003020E3,
    notoEmojiU0031,
    notoEmojiU003120E3,
    notoEmojiU0032,
    notoEmojiU003220E3,
    notoEmojiU0033,
    notoEmojiU003320E3,
    notoEmojiU0034,
    notoEmojiU003420E3,
    notoEmojiU0035,
    notoEmojiU003520E3,
    notoEmojiU0036,
    notoEmojiU003620E3,
    notoEmojiU0037,
    notoEmojiU003720E3,
    notoEmojiU0038,
    notoEmojiU003820E3,
    notoEmojiU0039,
    notoEmojiU003920E3,
    notoEmojiU00A9,
    notoEmojiU00Ae,
    notoEmojiU1F004,
    notoEmojiU1F0Cf,
    notoEmojiU1F170,
    notoEmojiU1F171,
    notoEmojiU1F17E,
    notoEmojiU1F17F,
    notoEmojiU1F18E,
    notoEmojiU1F191,
    notoEmojiU1F192,
    notoEmojiU1F193,
    notoEmojiU1F194,
    notoEmojiU1F195,
    notoEmojiU1F196,
    notoEmojiU1F197,
    notoEmojiU1F198,
    notoEmojiU1F199,
    notoEmojiU1F19A,
    notoEmojiU1F1E6,
    notoEmojiU1F1E7,
    notoEmojiU1F1E8,
    notoEmojiU1F1E9,
    notoEmojiU1F1Ea,
    notoEmojiU1F1Eb,
    notoEmojiU1F1Ec,
    notoEmojiU1F1Ed,
    notoEmojiU1F1Ee,
    notoEmojiU1F1Ef,
    notoEmojiU1F1F0,
    notoEmojiU1F1F1,
    notoEmojiU1F1F2,
    notoEmojiU1F1F3,
    notoEmojiU1F1F4,
    notoEmojiU1F1F5,
    notoEmojiU1F1F6,
    notoEmojiU1F1F7,
    notoEmojiU1F1F8,
    notoEmojiU1F1F9,
    notoEmojiU1F1Fa,
    notoEmojiU1F1Fb,
    notoEmojiU1F1Fc,
    notoEmojiU1F1Fd,
    notoEmojiU1F1Fe,
    notoEmojiU1F1Ff,
    notoEmojiU1F201,
    notoEmojiU1F202,
    notoEmojiU1F21A,
    notoEmojiU1F22F,
    notoEmojiU1F232,
    notoEmojiU1F233,
    notoEmojiU1F234,
    notoEmojiU1F235,
    notoEmojiU1F236,
    notoEmojiU1F237,
    notoEmojiU1F238,
    notoEmojiU1F239,
    notoEmojiU1F23A,
    notoEmojiU1F250,
    notoEmojiU1F251,
    notoEmojiU1F300,
    notoEmojiU1F301,
    notoEmojiU1F302,
    notoEmojiU1F303,
    notoEmojiU1F304,
    notoEmojiU1F305,
    notoEmojiU1F306,
    notoEmojiU1F307,
    notoEmojiU1F308,
    notoEmojiU1F309,
    notoEmojiU1F30A,
    notoEmojiU1F30B,
    notoEmojiU1F30C,
    notoEmojiU1F30D,
    notoEmojiU1F30E,
    notoEmojiU1F30F,
    notoEmojiU1F310,
    notoEmojiU1F311,
    notoEmojiU1F312,
    notoEmojiU1F313,
    notoEmojiU1F314,
    notoEmojiU1F315,
    notoEmojiU1F316,
    notoEmojiU1F317,
    notoEmojiU1F318,
    notoEmojiU1F319,
    notoEmojiU1F31A,
    notoEmojiU1F31B,
    notoEmojiU1F31C,
    notoEmojiU1F31D,
    notoEmojiU1F31E,
    notoEmojiU1F31F,
  ];

  constructor(private registry: NotoEmojiIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
