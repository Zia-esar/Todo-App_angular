import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { TodoGuardGuard } from './todo-guard.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  // {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'todo',
    component: TodoComponent,
    canActivate: [ TodoGuardGuard]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
