import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { UpgradeModule } from '@angular/upgrade/static';

@NgModule({
  declarations: [AppComponent, CalculatorComponent],
  imports: [BrowserModule, FormsModule, UpgradeModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
