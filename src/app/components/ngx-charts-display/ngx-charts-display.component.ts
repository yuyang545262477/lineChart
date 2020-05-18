import {ChangeDetectionStrategy, Component} from "@angular/core";
import {DataService} from "../../services/data.service";
import {DatePipe} from "@angular/common";
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {IResult} from "../../services/model";

@Component({
  selector: "app-ngx-charts-display",
  templateUrl: "./ngx-charts-display.component.html",
  styleUrls: ["./ngx-charts-display.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxChartsDisplayComponent {
  data$: Observable<IResult[]>;
  // options
  legend: boolean = true;
  showLabels: boolean = false;
  animations: boolean = false;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel = false;
  showXAxisLabel = false;
  view: [number, number] = [1450, 700];
  timeline: boolean = false;

  colorScheme = {
    domain: ["#5AA454", "#E44D25", "#CFC0BB", "#7aa3e5", "#a8385d", "#aae3f5"],
  };
  xScaleMin: Date;
  xScaleMax: Date;


  handleXAxis(data) {
    return this.datePipe.transform(data, "hh:ss:mm");
  };


  constructor(private dataService: DataService, private datePipe: DatePipe) {
    this.data$ = dataService.data$.pipe(
      tap(() => {
        this.xScaleMax = new Date();
        this.xScaleMin = new Date(Date.now() - 60 * 1000);
      }),
    );
  }

  onSelect(data): void {
    console.log("Item clicked", JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log("Activate", JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log("Deactivate", JSON.parse(JSON.stringify(data)));
  }
}
