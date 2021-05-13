import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  mostrar = false;

  @Input() task: Task;

  constructor(

    public taskService: TaskService

  ) { }

  ngOnInit() {
  }
  deleteTask(task: Task) {
    if (confirm('Are you sure want to delete task?')) {
      this.taskService.deleteTask(task);
    }
  }
}
