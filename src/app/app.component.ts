import { Component } from '@angular/core';
import { RouterModule, Routes} from '@angular/routes';
import { ContacComponent } from './contac/contac.component';
import { LoginComponent } from './login/login.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

const routes: Routes = [
  { path: "contac", Component: ContacComponent},
  { path: "login", Component: LoginComponent},
  { path: "ecommerce", Component: EcommerceComponent},
  { path: "header", Component: HeaderComponent},
  { path: "sidebar", Component: SidebarComponent},
  { path: "",redirecTo: "login", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppComponent {
  title = 'UTS212102434';
}
