import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
  });

  it('should add two numbers', () => {
    component.a = 5;
    component.b = 3;
    component.add();
    expect(component.result).toBe(8);
  });

  it('should subtract two numbers', () => {
    component.a = 10;
    component.b = 4;
    component.subtract();
    expect(component.result).toBe(6);
  });

  it('should multiply two numbers', () => {
    component.a = 7;
    component.b = 8;
    component.multiply();
    expect(component.result).toBe(56);
  });

  it('should divide two numbers', () => {
    component.a = 10;
    component.b = 2;
    component.divide();
    expect(component.result).toBe(5);
  });
  it('should return 0 if a or b is 0 in divide()', () => {
    component.a = 0;
    component.b = 0;
    component.divide();
    expect(component.result).toBe(0);
  });
});
