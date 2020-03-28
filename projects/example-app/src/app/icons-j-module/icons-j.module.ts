import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IconsJComponent } from './icons-j.component';
import { NotoEmojiIconsModule } from '@triangular/noto-emoji-icons';

const routes: Routes = [
  { path: '', component: IconsJComponent }
];

@NgModule({
  declarations: [IconsJComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NotoEmojiIconsModule,
  ]
})
export class IconsJModule { }
