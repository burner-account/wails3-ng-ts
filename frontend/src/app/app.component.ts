import { ChangeDetectionStrategy, Component, OnInit, signal, WritableSignal } from '@angular/core';
import {Events, WML} from "@wailsio/runtime";
import { Greet } from '../../bindings/changeme/greetservice';

@Component({
  selector: 'wails-root',
  templateUrl: './app.component.html',
  imports: [],
  styles: [`
    :host {
        height: 100%;
        width: 100%;
    }
`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public time: WritableSignal<string> = signal('');
  public name: WritableSignal<string> = signal('');

  constructor() {
    Events.On(
      'time',
      (ev: Events.WailsEvent) => {
        this.time.set(ev.data as string);
      }
    );
  }

  ngOnInit(): void {
    WML.Reload();
  }

  doGreet(name: string): void {
    Greet(name).then( (value: string) => {
      this.name.set(value);
    })
  }
}
