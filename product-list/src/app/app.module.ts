import { DEFAULT_CURRENCY_CODE, isDevMode, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { metaReducers, reducers } from "./reducers";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { HeaderComponent } from "./shared/layout/header/header.component";
import { BasicLayoutComponent } from "./shared/layout/basic-layout/basic-layout.component";
import { HttpClientModule } from "@angular/common/http";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent,
    BasicLayoutComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: "CZK" }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
