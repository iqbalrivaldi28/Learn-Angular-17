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
import { DirectiveStructuralComponent } from './components/directive-structural/directive-structural.component';
import { HighlightDirective } from './components/highlight.directive';
import { ListUserComponent } from './components/depedency-injection/list-user/list-user.component';
import { UserApiComponent } from './components/http-client/user-api/user-api.component';
import { DisplayJsonComponent } from './components/display-json/display-json.component';
import { SwiperJsComponent } from './components/swiper-js/swiper-js.component';
import { ObservableComponent } from './components/observable/observable.component';
import { InterceptorComponent } from './components/interceptor/interceptor/interceptor.component';

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
    DirectiveStructuralComponent,
    DirectiveStructuralComponent,
    HighlightDirective,
    ListUserComponent,
    UserApiComponent,
    DisplayJsonComponent,
    SwiperJsComponent,
    ObservableComponent,
    InterceptorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  dataPropertyBinding =
    'Ini data dari Parent Component (App Componet) ke Property Binding Component sebagai Child';

  counter = 0;

  color = '';
}
