import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  standalone: true,
  imports: [],
  templateUrl: './drag-drop.component.html',
  styleUrl: './drag-drop.component.scss',
})
export class DragDropComponent {
  title: string = 'Materi Drag & Drop: ';
  targetElement?: any;

  tasks: any[] = [
    {
      id: 1,
      name: 'Task 1',
      complatad: false,
    },
    {
      id: 2,
      name: 'Task 2',
      complatad: false,
    },
    {
      id: 3,
      name: 'Task 3',
      complatad: false,
    },
  ];

  onTaskDragStart(event: any) {
    this.targetElement = event.target;
  }

  onTaskDragOver(event: any) {
    event.preventDefault();
  }

  onTaskDrop(event: any) {
    event.preventDefault();

    const targetTask = event.target;
    const textOfTargetTask = targetTask.innerText;
    const textOfSourceTask = this.targetElement.innerText;
    
    targetTask.innerText = textOfSourceTask;
    this.targetElement.innerText = textOfTargetTask;
  }
}
