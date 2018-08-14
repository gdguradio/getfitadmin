import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
const routes : Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },{
        path: 'logout',
        component: LogoutComponent
    },{
        path: 'register',
        component: RegisterComponent
    },{
        path:'',
        component:LoginComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [LoginComponent,LogoutComponent,DashboardComponent,RegisterComponent]