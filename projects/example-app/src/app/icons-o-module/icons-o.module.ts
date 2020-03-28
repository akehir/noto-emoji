import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IconsOComponent } from './icons-o.component';
import { NotoEmojiIconsModule } from '@triangular/noto-emoji-icons';

const routes: Routes = [
  { path: '', component: IconsOComponent }
];

@NgModule({
  declarations: [IconsOComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NotoEmojiIconsModule,
  ]
})
export class IconsOModule { }
