import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BadgesComponent } from './components/badges/badges.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressComponent } from './components/progress/progress.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { FormsElementsComponent } from './components/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './components/forms-layouts/forms-layouts.component';
import { FormsEditorsComponent } from './components/forms-editors/forms-editors.component';
import { TablesGeneralComponent } from './components/tables-general/tables-general.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { ChartsChartjsComponent } from './components/charts-chartjs/charts-chartjs.component';
import { ChartsApexchartsComponent } from './components/charts-apexcharts/charts-apexcharts.component';
import { IconsBootstrapComponent } from './components/icons-bootstrap/icons-bootstrap.component';
import { IconsRemixComponent } from './components/icons-remix/icons-remix.component';
import { IconsBoxiconsComponent } from './components/icons-boxicons/icons-boxicons.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { DataSyncComponent } from './data-sync/data-sync.component';
import { KYCUsersComponent } from './kyc-users/kyc-users.component';
import { CheckOutReportsComponent } from './Reports/check-out-reports/check-out-reports.component';
import { SaleReportsComponent } from './Reports/sale-reports/sale-reports.component';
import { WebsiteInventoryComponent } from './Reports/website-inventory/website-inventory.component';
import { SignupReportsComponent } from './Reports/signup-reports/signup-reports.component';
import { SubscriptionReportsComponent } from './Reports/subscription-reports/subscription-reports.component';
import { H20ReportsComponent } from './Reports/h20-reports/h20-reports.component';
import { ViewOperatorComponent } from './Operator/view-operator/view-operator.component';
import { ViewAffiliateComponent } from './Affiliate/view-affiliate/view-affiliate.component';
import { ViewContactUsComponent } from './Enquiry/view-contact-us/view-contact-us.component';
import { ViewPartnerComponent } from './Enquiry/view-partner/view-partner.component';
import { TicketsComponent } from './Service-management/tickets/tickets.component';
import { ManageSubComplaintComponent } from './Service-management/manage-sub-complaint/manage-sub-complaint.component';
import { APIOrderManagementComponent } from './API-Order-Management/api-order-management/api-order-management.component';
import { ManageBlogExternalComponent } from './manage-blog-external/manage-blog-external.component';
import { CreateOperatorComponent } from './Operator/create-operator/create-operator.component';
import { CreateAffiliateComponent } from './Affiliate/create-affiliate/create-affiliate.component';
import { CreateCountryFormComponent } from './Country/create-country-form/create-country-form.component';
import { ViewCountryFormComponent } from './Country/view-country-form/view-country-form.component';
import { CreatePlansComponent } from './Plans/create-plans/create-plans.component';
import { ViewPlansComponent } from './Plans/view-plans/view-plans.component';
import { RechargableTopupComponent } from './Plans/rechargable-topup/rechargable-topup.component';
import { PlanOrderSetComponent } from './Plans/plan-order-set/plan-order-set.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    AlertsComponent,
    AccordionComponent,
    BadgesComponent,
    BreadcrumbsComponent,
    ButtonsComponent,
    CardsComponent,
    CarouselComponent,
    ListGroupComponent,
    ModalComponent,
    TabsComponent,
    PaginationComponent,
    ProgressComponent,
    TooltipsComponent,
    FormsElementsComponent,
    FormsLayoutsComponent,
    FormsEditorsComponent,
    TablesGeneralComponent,
    TablesDataComponent,
    ChartsChartjsComponent,
    ChartsApexchartsComponent,
    IconsBootstrapComponent,
    IconsRemixComponent,
    IconsBoxiconsComponent,
    UsersProfileComponent,
    PagesFaqComponent,
    PagesContactComponent,
    PagesRegisterComponent,
    PagesLoginComponent,
    PagesError404Component,
    PagesBlankComponent,
    DataSyncComponent,
    KYCUsersComponent,
    CheckOutReportsComponent,
    SaleReportsComponent,
    WebsiteInventoryComponent,
    SignupReportsComponent,
    SubscriptionReportsComponent,
    H20ReportsComponent,
    ViewOperatorComponent,
    ViewAffiliateComponent,
    ViewContactUsComponent,
    ViewPartnerComponent,
    TicketsComponent,
    ManageSubComplaintComponent,
    APIOrderManagementComponent,
    ManageBlogExternalComponent,
    CreateOperatorComponent,
    CreateAffiliateComponent,
    CreateCountryFormComponent,
    ViewCountryFormComponent,
    CreatePlansComponent,
    ViewPlansComponent,
    RechargableTopupComponent,
    PlanOrderSetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
