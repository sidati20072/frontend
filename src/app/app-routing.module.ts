import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabsComponent } from './tabs/tabs.component';
import {UserComponent} from './users/user/user.component';
import {LoginComponent} from './users/login/login.component';
import {AdminLayoutComponent} from './_layout/admin-layout/admin-layout.component';
import {UserLayoutComponent} from './_layout/user-layout/user-layout.component';
import {AccueilComponent} from './frontPublic/accueil/accueil.component';
import {CreateEntrepriseComponent} from './frontPublic/create-entreprise/create-entreprise.component';
import {CreateOffreComponent} from './frontEntreprise/offres/create-offre/create-offre.component';
import {CompteComponent} from './frontEntreprise/compte/compte.component';
import {ProfileComponent} from './frontEntreprise/profile/profile.component';
import {EntrepriseComponent} from './frontEntreprise/entreprise/entreprise.component';

const routes: Routes = [

  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UserComponent },
   //   { path: 'compte', component: CompteComponent },
      { path: 'offres/create', component: CreateOffreComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'buttons', component: ButtonsComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'icons', component: IconsComponent },
      { path: 'typography', component: TypographyComponent },
      { path: 'alerts', component: AlertsComponent },
      { path: 'accordions', component: AccordionsComponent },
      { path: 'badges', component: BadgesComponent },
      { path: 'progressbar', component: ProgressbarComponent },
      { path: 'breadcrumbs', component: BreadcrumbsComponent },
      { path: 'pagination', component: PaginationComponent },
      { path: 'dropdowns', component: DropdownComponent },
      { path: 'tooltips', component: TooltipsComponent },
      { path: 'carousel', component: CarouselComponent },
      { path: 'tabs', component: TabsComponent }
    ]
  },

  // App routes goes here here
  {
    path: 'public',
    component: UserLayoutComponent,
    children: [
      { path: 'accueil', component: AccueilComponent },
      { path: 'entreprise', component: CreateEntrepriseComponent },


    ]
  },

  {
    path: 'compte',
    component: CompteComponent,
    children: [
      { path: 'profile/:id', component: ProfileComponent },
      { path: 'entreprise/:id', component: EntrepriseComponent },
    ]
  },

  { path: 'login', component: LoginComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];


export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
