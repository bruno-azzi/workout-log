import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutService } from './workout.service';
import { WorkoutComponent } from './workout.component';
import { HeaderComponent } from './header/header.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExerciseTableComponent } from './exercise-table/exercise-table.component';

@NgModule({
  declarations: [
    HeaderComponent,
    WorkoutComponent,
    ExerciseComponent,
    ExerciseTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    WorkoutComponent,
    ExerciseComponent,
    ExerciseTableComponent
  ],
  providers: [
    WorkoutService
  ]
})
export class WorkoutModule { }
