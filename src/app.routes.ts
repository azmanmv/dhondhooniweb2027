import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './components/public/layout.component';
import { HomeComponent } from './components/public/home.component';
import { AboutComponent } from './components/public/about.component';
import { ProgramsComponent } from './components/public/programs.component';
import { AdmissionsComponent } from './components/public/admissions.component';
import { BlogComponent } from './components/public/blog.component';
import { ContactComponent } from './components/public/contact.component';
import { AdminLayoutComponent } from './components/admin/admin-layout.component';
import { LoginComponent } from './components/admin/login.component';
import { DashboardComponent } from './components/admin/dashboard.component';
import { ContentEditorComponent } from './components/admin/content-editor.component';
import { BlogEditorComponent } from './components/admin/blog-editor.component';
import { SettingsComponent } from './components/admin/settings.component';
import { inject } from '@angular/core';
import { DataService } from './services/data.service';

const authGuard = () => {
  const auth = inject(DataService);
  return auth.isAuthenticated();
};

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'programs', component: ProgramsComponent },
      { path: 'admissions', component: AdmissionsComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'contact', component: ContactComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'content', component: ContentEditorComponent },
      { path: 'blog', component: BlogEditorComponent },
      { path: 'settings', component: SettingsComponent },
    ]
  }
];