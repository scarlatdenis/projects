import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

export type AlertType = 'succes' | 'warning' | 'danger';

export interface Alert {
  type: AlertType;
  text: string;
}

@Injectable()
export class AlertService {
  public alert$ = new Subject<Alert>();

  success(text: string) {
    this.alert$.next({ type: 'succes', text });
  }

  warning(text: string) {
    this.alert$.next({ type: 'warning', text });
  }

  danger(text: string) {
    this.alert$.next({ type: 'danger', text });
  }
}
