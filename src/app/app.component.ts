import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './components/input_output/parent/parent.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { DirectiveNgclassComponent } from './components/directive-ngclass/directive-ngclass.component';
import { DirectiveNgstyleComponent } from './components/directive-ngstyle/directive-ngstyle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ParentComponent,
    DataBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    DirectivesComponent,
    DirectiveNgclassComponent,
    DirectiveNgstyleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  dataPropertyBinding =
    'Ini data dari Parent Component (App Componet) ke Property Binding Component sebagai Child';

  counter = 0;
}
