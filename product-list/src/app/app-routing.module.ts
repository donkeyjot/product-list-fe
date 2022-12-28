import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BasicLayoutComponent } from "./shared/layout/basic-layout/basic-layout.component";

const routes: Routes = [
  {
    path: "",
    component: BasicLayoutComponent,
    children: [{
      path: "",
      loadChildren: () => import("./modules/products/products.module").then(m => m.ProductsModule)
    }]
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
