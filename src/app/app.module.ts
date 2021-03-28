import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubFeaturesModule } from './sub-features/sub-features.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SubFeaturesModule,
    SharedModule,
    FeaturesModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
