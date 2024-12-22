import { Component, inject } from '@angular/core';
import { ImagesService } from '../../../services/general/images.service';
import { GoalService } from '../../../services/goals/goal.service';
import { Goal } from '../../../interfaces/goals.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  _images = inject(ImagesService);
  _goalService = inject(GoalService);
  isLoading: boolean = false;
  showSlider: boolean = false;
  goals: Goal[] = [];
  colors = [
    '#FF5733',
    '#000000',
    '#3357FF',
    '#91009b',
    '#007971',
    '#56002e',
    '#b34d00',
    '#310070',
  ];

  ngOnInit() {
    this.fetchGoals();
  }

 

  fetchGoals() {
    this.isLoading = true;
    this._goalService.fetchGoals().subscribe({
      next: (response) => {
        console.log(response);

        if (response && response.data && response.resp_code === '000') {
          this.goals = response.data.map((goal, index) => ({
            ...goal,
            color: this.colors[index % this.colors.length],
          }));
          console.log(this.goals);
          this.isLoading = false;
        }
      },
      error: (error) => {
        console.error(error);
        this.isLoading = false;
      },
    });
  }


  openSlider(goal: Goal) {
    this.showSlider = true;
  }


  closeSlider() {
    this.showSlider = false;
  }
}
