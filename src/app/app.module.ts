import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxChartsDisplayComponent} from "./components/ngx-charts-display/ngx-charts-display.component";
import {EchartsDisplayComponent} from "./components/echarts-display/echarts-display.component";
import {NgxEchartsModule} from "ngx-echarts";
import {TransEchartMergePipe} from "./pipes/trans-echart-merge.pipe";
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    NgxChartsDisplayComponent,
    EchartsDisplayComponent,
    TransEchartMergePipe,
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    NgxEchartsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {
}
