import { AfterViewInit, Component, Injector } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  constructor(private injector: Injector) {}

  ngAfterViewInit(): void {
    const waitForAngularJS = () => {
      const angular = (window as any).angular;

      if (angular && angular.module) {
        const upgrade = this.injector.get(UpgradeModule);
        upgrade.bootstrap(
          document.getElementById('legacy-calculator-root')!,
          ['calculatorApp'],
          { strictDi: true }
        );
      } else {
        setTimeout(waitForAngularJS, 50); // retry every 50ms
      }
    };

    waitForAngularJS();
  }
}
