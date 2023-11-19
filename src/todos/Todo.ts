export class Todo {
    id: number | undefined;
    title: string = '';
    description: string = '';
    completed: boolean = false;
    get isNew(): boolean {
      return this.id === undefined;
    }
  
    constructor(initializer?: any) {
      if (!initializer) return;
      if (initializer.id) this.id = initializer.id;
      if (initializer.title) this.title = initializer.title;
      if (initializer.description) this.description = initializer.description;
      if (typeof initializer.completed === 'boolean') this.completed = initializer.completed;
    }
  }
