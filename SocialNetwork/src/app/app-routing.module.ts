import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchProfileComponent } from './search-profile/search-profile.component';

const routes: Routes = [
  { path: '', component: SearchProfileComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    resolve: {
      id: (snaphot: ActivatedRouteSnapshot) => snaphot,
    },
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
