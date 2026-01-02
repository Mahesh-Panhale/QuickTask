import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Calendar } from "lucide-react";
import type { Task } from "@/pages/Dashboard";

interface TaskCardProps {
  task: Task;
  onToggleStatus: (id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  animationDelay?: number;
}

const TaskCard = ({ task, onToggleStatus, onEdit, onDelete, animationDelay = 0 }: TaskCardProps) => {
  const isCompleted = task.status === "completed";
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  return (
    <div
      className={`group p-4 sm:p-5 rounded-xl border transition-all duration-300 animate-slide-up ${
        isCompleted
          ? "bg-muted/50 border-border"
          : "bg-card border-border hover:border-primary/30 hover:shadow-md"
      }`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="flex items-start gap-4">
        <Checkbox
          checked={isCompleted}
          onCheckedChange={() => onToggleStatus(task.id)}
          className="mt-1"
        />
        
        <div className="flex-1 min-w-0">
          <h3
            className={`font-medium text-foreground mb-1 transition-all ${
              isCompleted ? "line-through text-muted-foreground" : ""
            }`}
          >
            {task.title}
          </h3>
          <p className={`text-sm mb-3 ${isCompleted ? "text-muted-foreground/70" : "text-muted-foreground"}`}>
            {task.description}
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="w-3.5 h-3.5" />
            <span>{formatDate(task.createdAt)}</span>
            <span
              className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                isCompleted
                  ? "bg-success/10 text-success"
                  : "bg-warning/10 text-warning"
              }`}
            >
              {task.status}
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit(task)}
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
          >
            <Pencil className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(task.id)}
            className="h-8 w-8 text-muted-foreground hover:text-destructive"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
