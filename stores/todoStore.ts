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
        method: todoAPI.apiMethod,
        maxBodyLength: Infinity,
        url: todoAPI.apiUrl,
        headers: { 
          'x-api-key': todoAPI.apiKey
        }
    };

    const todoTable = reactive([] as todoItems[]);

    const getItem = async (): Promise<void> => {
        await axios.request(config)
            .then((response) => {
                const todoResponse = response.data.todo;
                const newItem: todoItems = { 
                    id: todoResponse.id,
                    assignee: todoResponse.assignee,
                    dateTime: new Date(todoResponse.dueDateTime),
                    description: todoResponse.description
                } 
                const uniekQuestionmark = todoTable.filter((todoItem) => todoItem.id === newItem.id);
                if (uniekQuestionmark.length == 0) {
                    todoTable.push(newItem);
                    console.log("Opgehaalde informatie zat nog niet in de tabel, die word nu toegevoegd!");
                    return;
                }
                
                if (uniekQuestionmark.length != 0 ) {
                    console.error("Data bevindt zich al in tabel, Controleer de data integriteit!");
                    return;
                }
            })
            .catch((error) => {
            console.log(error);
        });
    }

    return { getItem, todoTable }
});