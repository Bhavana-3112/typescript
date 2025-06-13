// 1Define a type for task status
type Status = "pending" | "done";

// Define an interface for a Task
interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  status: Status;
}

//  Create a class to manage tasks
class TaskManager {
  private tasks: Task[] = [];
  private nextId: number = 1;

  // Add a task
  addTask(title: string, description: string): void {
    const newTask: Task = {
      id: this.nextId++,
      title,
      description,
      dueDate: new Date(), // Set dueDate to current date or modify as needed
      status: "pending",
    };
    this.tasks.push(newTask);
    console.log(" Task added:", newTask.title);
  }

  // Show all tasks
  listTasks(): void {
    console.log("\n All Tasks:");
    this.tasks.forEach((task) => {
      console.log(
        `#${task.id}: ${task.title} - ${task.status} (Due: ${task.dueDate.toDateString()})`
      );
    });
  }

  // Mark a task as done
  markAsDone(id: number): void {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.status = "done";
      console.log(`Task #${id} marked as done.`);
    } else {
      console.log(`Task #${id} not found.`);
    }
  }
}

// Use the TaskManager
const manager = new TaskManager();
manager.addTask("Finish TypeScript project", "A small task manager app");

manager.listTasks();
manager.markAsDone(1);
manager.listTasks();  
