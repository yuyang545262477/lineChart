import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, timer} from "rxjs";
import {map, withLatestFrom} from "rxjs/operators";
import {IData, IResult} from "./model";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private initResult: IResult = {
    name: "lineChart",
    series: [],
  };

  constructor() {
    this.loadDynamicData();
  }

  private _data$ = new BehaviorSubject<IResult[]>([this.initResult]);

  get data$(): Observable<IResult[]> {
    return this._data$.asObservable();
  }

  private loadDynamicData() {
    timer(0, 200).pipe(
      withLatestFrom(this._data$),
      map(([_, results]) => {
        const number = Math.floor(Math.random() * 5000 + 1000);
        return results.map((result) => {
          const startSize = result.series.length > 59 ? 1 : 0;
          const series: IData[] = [...result.series.slice(startSize), {name: new Date(), value: number}];
          return {...result, series};
        });
      }),
    ).subscribe(
      (data: IResult[]) => this._data$.next(data),
    );
  }
}
