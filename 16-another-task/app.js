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

const newTask = {
  tasks: [{ id: 1, name: "тест", description: "описание", order: 0 }],
};

// Перепривязываем методы ToDoList к newTask через bind
newTask.addTask = ToDoList.addTask.bind(newTask);
newTask.removeTask = ToDoList.removeTask.bind(newTask);
newTask.update = ToDoList.update.bind(newTask);
newTask.sort = ToDoList.sort.bind(newTask);

// Но: методы работают с полями title/priority, а у нас name/order!
// Поэтому дополняем их адаптерами
newTask.addTaskAdapted = function (name, id, order) {
  // Переводим name → title, order → priority для совместимости с ToDoList.addTask
  this.addTask(name, id, order);
};

newTask.updateAdapted = function (id, value, field = "name") {
  if (field === "name") {
    this.update(id, value); // value — строка → обновляет title (который у нас name)
  } else if (field === "order") {
    this.update(id, value); // value — число → обновляет priority (который у нас order)
  }
};

newTask.sortAdapted = function () {
  // Сортируем по order, но ToDoList.sort сортирует по priority
  this.sort();
  // После сортировки переводим priority → order в каждой задаче
  this.tasks.forEach((task) => {
    task.order = task.priority;
    delete task.priority; // убираем лишнее
  });
};

newTask.addTaskAdapted("Новая задача", 2, 1, "Важно!");
newTask.updateAdapted(1, "Обновлённое имя", "name");
newTask.updateAdapted(2, 2, "order");
newTask.sortAdapted();
console.log(newTask.tasks);
