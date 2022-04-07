import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { PagesRouting } from 'src/app/pages/pages-routing.module';
import { AdminComponent } from './admin.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarMenuComponent } from './components/sidebar/sidebar-menu/sidebar-menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileMenuComponent } from './components/navbar/profile-menu/profile-menu.component';
import { NavbarMenuComponent } from './components/navbar/navbar-menu/navbar-menu.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: PagesRouting,
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    SidebarMenuComponent,
    ProfileMenuComponent,
    NavbarMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ]
})
export class AdminModule { }
