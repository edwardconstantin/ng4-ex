import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';

const EventSource: any = window['EventSource'];

@Injectable()
export class Sse {

  constructor(private zone: NgZone) { }

  observe(sseUrl: string): Observable<any> {
    return new Observable<any>(obs => {
      const es = new EventSource(sseUrl);
      es.onmessage = evt => {
        const data = evt.data; // TODO handle parse error
        this.zone.run(() => obs.next(data));
      };
      es.onerror = x => obs.error(console.error('EventSource failed'));
      return () => es.close();
    });
  }
}
