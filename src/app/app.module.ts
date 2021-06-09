import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './component/admin/admin.module';
import { UserModule } from './component/user/user.module';
import { OwnerModule } from './component/owner/owner.module';
import { CustomerModule } from './component/customer/customer.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './layout/header/header.component';
import { AuthInterceptorService } from './service/auth.intercepter';
import { AngularFireModule } from "@angular/fire";
import { environment } from 'src/environments/environment';
import { AngularFireStorageModule, BUCKET} from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    UserModule,
    OwnerModule,
    CustomerModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptorService,
      multi:true
    },
    {
      provide:BUCKET,
      useValue:'groceryshop-d8a87.appspot.com'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
