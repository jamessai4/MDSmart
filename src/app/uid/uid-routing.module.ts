import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UidPage } from './uid.page';

const routes: Routes = [
  {
    path: ':uid',
    component: UidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UidPageRoutingModule {}
