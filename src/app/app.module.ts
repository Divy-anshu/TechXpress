import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import {RouterModule, Routes} from '@angular/router';
import { LatestfeedComponent } from './latestfeed/latestfeed.component';
import { BlogComponent } from './blog/blog.component';
import { CategoriesComponent } from './categories/categories.component';
import { MyserviceService } from './myservice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule,
  MatToolbarModule, MatIconModule, MatTabsModule} from '@angular/material';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: '',
    component: BodyComponent
  },
  {
    path: 'home',
    component: BodyComponent
  },
  {
    path: 'latestfeed',
    component: LatestfeedComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    LatestfeedComponent,
    BlogComponent,
    CategoriesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'}),
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule, MatMenuModule,
    MatToolbarModule, MatIconModule,
    MatTabsModule,
    FormsModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
