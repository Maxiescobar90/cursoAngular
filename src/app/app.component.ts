import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule, NgClass, NgIf, NgStyle } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf,RouterOutlet, DashboardComponent, NgStyle, CommonModule, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  message = "from app component";
  condition =true;
  handleClick(){
    this.message = "cliked at the app component"
  }
}
