import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';  // Importa el módulo de rutas
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent, // Declara el componente
    ProductAddComponent   // Declara el componente
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule
  ],
  providers: [provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp({ projectId: "crud-angular-9a2c9", appId: "1:465712823772:web:015218ea05ebcf6788e319", storageBucket: "crud-angular-9a2c9.firebasestorage.app", apiKey: "AIzaSyBHz7dFG_mnKMJdw5f1brubacgEJ6vxPCM", authDomain: "crud-angular-9a2c9.firebaseapp.com", messagingSenderId: "465712823772" }))],
  bootstrap: [AppComponent]
})
export class AppModule {}