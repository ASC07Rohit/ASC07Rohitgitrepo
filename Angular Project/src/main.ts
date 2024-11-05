// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { appConfig } from './app/app.config';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';

// bootstrapApplication(AppComponent, appConfig).catch((err) => console.log(err));

platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err=>console.error(err));