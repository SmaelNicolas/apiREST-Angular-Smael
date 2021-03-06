import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatExpansionModule],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
  ],
})
export class MaterialModule {}
