import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { Dashboard } from '../pages/dashboard/dashboard';
import { XModule } from '../xmodule/modules/core';
import { Logout } from '../components/logout/logout';
import { Createupdate } from '../components/createupdate/createupdate';
import { List } from '../components/list/list'
//import { PostListComponent } from '../xmodule/components/post-list/post-list';
import { Questionsform } from '../pages/questionsform/questionsform';
import { CreateUpdateForm } from '../pages/form/form';
import { Delete } from '../pages/delete/delete';
import { QuestionList } from '../pages/question-list/question-list';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    Dashboard,
    Questionsform,
    Logout,
    List,
    CreateUpdateForm,
    Createupdate,
    Delete,
    QuestionList
  
  ],
  imports: [
    XModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    Dashboard,
    Questionsform,
    Logout,
    List,
    CreateUpdateForm,
    Createupdate,
    Delete,
    QuestionList
  ],
  providers: [ ]
})
export class AppModule {}