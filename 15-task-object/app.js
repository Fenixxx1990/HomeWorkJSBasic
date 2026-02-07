"use strict";

const ToDoList = {
  tasks: [{ title: "Помыть посуду", id: 1, priority: 1 }],
  addTask(title, id, priority) {
    if (
      typeof title === "string" &&
      !this.tasks.find((task) => task.title === title) &&
      !this.tasks.find((task) => task.id === id) &&
      !this.tasks.find((task) => task.priority === priority)
    ) {
      this.tasks.push({ title, id, priority });
      console.log(
        `Задача ${title} добавлена в список задач с id ${id} и приоритетом ${priority}`,
      );
    } else if (typeof title !== "string") {
      console.log("Название задачи не строка");
    } else if (this.tasks.find((task) => task.title === title)) {
      console.log("Задача с таким названием уже существует");
    } else if (this.tasks.find((task) => task.id === id)) {
      console.log("Задача с таким id уже существует");
    } else if (this.tasks.find((task) => task.priority === priority)) {
      console.log("Задача с таким приоритетом уже есть");
    }
  },
  removeTask(id) {
    if (this.tasks.find((task) => task.id === id)) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
      console.log(`Задача с id ${id} удалена из списка задач`);
    } else {
      console.log("Задачи с таким id не существует");
    }
  },
  update(id, value) {
    if (typeof value === "string") {
      if (!this.tasks.find((task) => task.title === value)) {
        this.tasks.find((task) => task.id === id).title = value;
        console.log(
          `Задача с Названием ${id} обновлена. Новое название: ${value}`,
        );
      } else {
        console.log("Задача с таким названием уже существует");
      }
    } else if (typeof value === "number") {
      if (!this.tasks.find((task) => task.priority === value)) {
        this.tasks.find((task) => task.id === id).priority = value;
        console.log(
          `Задача с id ${id} обновлена. Новое значение приоритета: ${value}`,
        );
      } else {
        console.log("Задача с таким приоритетом уже существует");
      }
    }
  },
  sort() {
    this.tasks.sort((a, b) => a.priority - b.priority);
    console.log(this.tasks);
  },
};

ToDoList.addTask("Пропылесосить", 2, 2);
ToDoList.addTask("Умыться", 3, 6);
ToDoList.addTask("Побриться", 4, 5);
// console.log(ToDoList.tasks);
// ToDoList.removeTask(1);
// console.log(ToDoList.tasks);
ToDoList.update(2, 8);
console.log(ToDoList.tasks);
ToDoList.sort();
