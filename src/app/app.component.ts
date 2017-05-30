import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<p>Still More {{name}}</p>`,
})
export class AppComponent  { name = 'Angular'; }
