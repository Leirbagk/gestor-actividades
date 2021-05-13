import { Component, OnInit } from '@angular/core';
// import { ADDRCONFIG } from 'dns';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(public TaskService: TaskService
  ) {
  }
  ngOnInit(): void {
  }
  addTask(newTitle: HTMLInputElement, newDescription: HTMLInputElement) {
    console.log('adding......', newTitle.value, newDescription.value);
    this.TaskService.addTask(
      {
        title: newTitle.value,
        description: newDescription.value,
      }
    );
    newTitle.value = '';
    newDescription.value = '';
    newTitle.focus();
    return false;
  }
}
