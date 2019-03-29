import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesComponent } from './articles/articles.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'sources', pathMatch: 'full' },
  { path: 'about', component: HomeComponent },
  { path: 'sources', component: ArticlesListComponent, children: [
      { path: ':id', component: ArticlesComponent }
  ]}
];

@NgModule({
  imports: [
      RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
