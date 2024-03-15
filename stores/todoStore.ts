import axios from "axios";
import todoAPI from "~/assets/data.json";

interface todoItems { 
    id: string,
    assignee: string,
    dateTime: Date,
    description: string,
}

export const useTodoTableStore = defineStore('TableStoreList', () => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: todoAPI.apiUrl,
        headers: { 
          'x-api-key': todoAPI.apiKey
        }
    };

    const todoTable = reactive([] as todoItem[]);

    const getItem = (): void => {
        axios.request(config)
            .then((response) => {
                const todoResponse = response.data.todo;
                const newItem: todoItems = { 
                    id: todoResponse.id,
                    assignee: todoResponse.assignee,
                    dateTime: new Date(todoResponse.dueDateTime),
                    description: todoResponse.description
                } 
                const uniekQuestionmark = todoTable.filter((todoItem) => todoItem.id === newItem.id);
                if (uniekQuestionmark.length != 1) {
                    todoTable.push(newItem);
                    alert("Opgehaalde informatie zat nog niet in de tabel, die word nu toegevoegd!"); 
                }
            })
            .catch((error) => {
            console.log(error);
        });
    }

    return { getItem, todoTable }
});