//enum
enum TaskStatus {
  Pending = "pending",
  Approved = "approved",
  Rejected = "rejected",
  Done = "done"
}

let currentStatus: TaskStatus;

currentStatus = TaskStatus.Approved;  // OK
currentStatus = TaskStatus.Pending;   // OK
currentStatus = TaskStatus.Done;      // OK
