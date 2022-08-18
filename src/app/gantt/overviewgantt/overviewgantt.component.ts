import { Component, OnInit } from '@angular/core';
import {
  GanttDependency, CellClickEvent,
  CellCloseEvent,
} from "@progress/kendo-angular-gantt";
import { Task, tasks, dependencies } from "./hierarchical-data";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-overviewgantt',
  templateUrl: './overviewgantt.component.html',
  styleUrls: ['./overviewgantt.component.scss']
})
export class OverviewganttComponent implements OnInit {

  public data: Task[] = tasks;
  public dependencies: GanttDependency[] = dependencies;
  public dateTimeFormat = "dd-MMM-yyyy HH:mm";

  public handleCellDblClick({
    sender,
    columnIndex,
    dataItem,
    isEdited,
  }: CellClickEvent): void {
    if (!isEdited) {
      sender.editCell(dataItem, columnIndex, this.createFormGroup(dataItem));
    }
  }

  public handleCellClose(e: CellCloseEvent): void {
    const { formGroup: taskFormGroup, item } = e;

    if (!taskFormGroup.valid) {
      // Prevent closing the edited cell if the form is invalid.
      e.preventDefault();
    } else {
      const editedItem = taskFormGroup.value;
      const originalItem = { ...e.dataItem };

      // Update the edited item
      Object.assign(e.dataItem, editedItem);

      // Edit the ancestor items accordingly if necessary
      if (this.anyChanged(originalItem, editedItem)) {
        let currentItem = item.parent;

        while (currentItem) {
          const dataItem = currentItem.dataItem;
          const subtasks = dataItem.subtasks;

          dataItem.completionRatio =
            subtasks.reduce((acc, curr) => acc + curr.completionRatio, 0) /
            subtasks.length;
          dataItem.start = new Date(Math.min(...subtasks.map((t) => t.start)));
          dataItem.end = new Date(Math.max(...subtasks.map((t) => t.end)));

          currentItem = currentItem.parent;
        }
      }
    }
  }

  private createFormGroup(dataItem: Task): FormGroup {
    return new FormGroup({
      id: new FormControl(dataItem.id),
      start: new FormControl(dataItem.start),
      end: new FormControl(dataItem.end),
      completionRatio: new FormControl(dataItem.completionRatio),
      title: new FormControl(dataItem.title),
    });
  }

  private anyChanged(item: Task, editedItem: Task) {
    return (
      item.start !== editedItem.start ||
      item.end !== editedItem.end ||
      item.completionRatio !== editedItem.completionRatio
    );
  }

  // public data: Task[] = tasks;
  // public dependencies: GanttDependency[] = dependencies;


  // public data: Task[] = tasks;
  // public dependencies: GanttDependency[] = dependencies;

  // public columns: string[] = ["title", "start", "end"];

  // public hiddenColumns: string[] = [];

  // public restoreColumns(): void {
  //   this.hiddenColumns = [];
  // }

  // public hideColumn(field: string): void {
  //   this.hiddenColumns.push(field);
  // }

  // public data: Task[] = tasks;
  // public dependencies: GanttDependency[] = dependencies;

  constructor() { }

  ngOnInit() {
  }

}
