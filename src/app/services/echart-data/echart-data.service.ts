import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, timer} from "rxjs";
import {map, tap, withLatestFrom} from "rxjs/operators";
import {DatePipe} from "@angular/common";

export interface IEChartData {
  time: string[],
  data: number[]
}

@Injectable({
  providedIn: "root",
  deps: [DatePipe],
})
export class EchartDataService {
  constructor(private datePipe: DatePipe) {
    this.runningData();
  }

  private _data$ = new BehaviorSubject<IEChartData>({
    data: [],
    time: [],
  } as IEChartData);

  get data$(): Observable<IEChartData> {
    return this._data$.asObservable();
  }

  private runningData() {
    timer(0, 200 * 5)
      .pipe(
        withLatestFrom(this._data$),
        map(([_, data]) => {
          const time = this.datePipe.transform(new Date(), "hh:mm:ss");
          const number = Math.floor(Math.random() * 50000 + 1000);
          const startSize = data.time.length > 59 ? 1 : 0;
          return <IEChartData>{
            time: [...data.time.slice(startSize), time],
            data: [...data.data.slice(startSize), number],
          };
        }),
        tap(console.log),
      ).subscribe((result) => {
      this._data$.next(result);
    });

  }


}
