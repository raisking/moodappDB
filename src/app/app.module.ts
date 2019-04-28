import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsermoodinfoComponent } from './usermoodinfo/usermoodinfo.component';
import { VendorComponent } from './vendor/vendor.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';
import { NewAppFormComponent } from './new-app-form/new-app-form.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule, MatMenuModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewUsersComponent } from './new-users/new-users.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { DefaultComponent } from './default/default.component';
import { FoodComponent } from './food/food.component';
import { GiphyComponent } from './giphy/giphy.component';

const appRoutes: Routes = [{
  path: '',                     //default component to display
  component: DefaultComponent
}, {
  path: 'addUser',         //when students added 
  component: NewAppFormComponent
},
{
  path: 'editUser/:_id',         //when students added 
  component: NewAppFormComponent
}, {
  path: 'listUsers',       //when students listed
  component: ListUsersComponent
},
{
  path: 'activities',       //when students listed
  component: ActivitiesComponent
},
{
  path: '**',                 //when path cannot be found
  component: NotFoundComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    UsermoodinfoComponent,
    VendorComponent,
    ActivitiesComponent,
    NewAppFormComponent,
    NavigationMenuComponent,
    ListUsersComponent,
    NotFoundComponent,
    NewUsersComponent,
    NewUserFormComponent,
    DefaultComponent,
    FoodComponent,
    GiphyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
