import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core";
import EChartOption = echarts.EChartOption;
import {EchartDataService, IEChartData} from "../../services/echart-data/echart-data.service";
import {Observable} from "rxjs";

@Component({
  selector: "app-echarts-display",
  templateUrl: "./echarts-display.component.html",
  styleUrls: ["./echarts-display.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EchartsDisplayComponent implements OnInit {
  chartOption: EChartOption = {
    xAxis: {
      type: "category",
      boundaryGap: true,
      data: [],
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "50%"],
      position: "right",
    },
    series: [{
      name: "甩锅图",
      type: "line",
      data: [],
      areaStyle: {},
    }],
  };
  private echartInstance: echarts.ECharts;
  eData$: Observable<IEChartData>;

  constructor(private echartDataService: EchartDataService) {
    this.eData$ = echartDataService.data$;
  }

  ngOnInit(): void {
  }

  chartInit($event: echarts.ECharts) {
    this.echartInstance = $event;
  }
}
