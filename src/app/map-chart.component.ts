import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  NgZone,
} from '@angular/core';
import { ChartCore } from './chart-core';


@Component({
  selector: 'b-map-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class MapChartComponent extends ChartCore implements OnChanges {

  constructor(cdr: ChangeDetectorRef, zone: NgZone) {
    super(cdr, zone);
  }


  override ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);

    // this.updateOptions();
    this.applyOnChange();
  }

}
