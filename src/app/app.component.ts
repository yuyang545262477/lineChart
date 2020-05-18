import {ChangeDetectionStrategy, Component} from "@angular/core";
import {DataService} from "./services/data.service";
import {Observable} from "rxjs";
import {IResult} from "./services/model";
import {DatePipe} from "@angular/common";
import {tap} from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DatePipe],
})
export class AppComponent {
  title = "lineChart";

  constructor() {

  }

}
