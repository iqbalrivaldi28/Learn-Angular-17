import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './components/input_output/parent/parent.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ParentComponent,
    DataBindingComponent,
    PropertyBindingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  dataPropertyBinding =
    'Ini data dari Parent Component (App Componet) ke Property Binding Component sebagai Child';
}
