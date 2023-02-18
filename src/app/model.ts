export class Model {
    user:any;
    items:any;

    /**
     *
     */
    constructor() {
        this.user="Çağrı";
        this.items=[
            new ToDoItem("Yemek",false),
            new ToDoItem("Spor",true),
            new ToDoItem("Uyku",true),
            new ToDoItem("Oyun",false)

        ]

    }
}

export class ToDoItem {
    description;
    action;
    /**
     *
     */
    constructor(description:string,action:boolean) {
        this.description=description;
        this.action=action
    }
}