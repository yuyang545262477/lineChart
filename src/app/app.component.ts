import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DataService} from './services/data.service';
import {Observable} from 'rxjs';
import {IResult} from './services/model';
import {DatePipe} from '@angular/common';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DatePipe],
})
export class AppComponent {
  title = 'lineChart';
  data$: Observable<IResult[]>;


  // options
  legend: boolean = true;
  showLabels: boolean = false;
  animations: boolean = false;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  view: [number, number] = [1450, 700];
  timeline: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };
  xScaleMin: Date;
  xScaleMax: Date;


  handleXAxis(data) {
    return this.datePipe.transform(data, 'hh:ss:mm');
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
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
