import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage {
  tasks: { name: string; completed: boolean }[] = [
    { name: 'Arrumar as Malas', completed: false },
    { name: 'Separar Documentos', completed: false },
    { name: 'Verificar Passagens', completed: false }
  ];

  get completedTasks() {
    return this.tasks.filter(task => task.completed);
  }

  addTask() {
    const taskName = prompt('Adicione uma tarefa:');
    if (taskName) {
      this.tasks.push({ name: taskName, completed: false });
    }
  }
}
