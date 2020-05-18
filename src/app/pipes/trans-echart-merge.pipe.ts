import {Pipe, PipeTransform} from "@angular/core";
import {IEChartData} from "../services/echart-data/echart-data.service";
import EChartOption = echarts.EChartOption;

@Pipe({
  name: "transEchartMerge",
})
export class TransEchartMergePipe implements PipeTransform {

  transform(value: IEChartData): EChartOption {
    return {
      xAxis: {
        data: value.time,
      },
      series: [{
        name: "甩锅图",
        data: value.data,
      }],
    };
  }

}
