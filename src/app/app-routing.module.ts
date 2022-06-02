import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { UsersComponent } from './pages/users/users.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import { UserComponent } from './pages/user/user.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users',
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'transactions',
    component: TransactionsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
