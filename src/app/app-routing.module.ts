import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { ContentComponent } from './content/content.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'Contato', component: ContatoComponent },
  { path: 'News', component: NewsComponent },
  { path: 'Login', component: LoginComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
