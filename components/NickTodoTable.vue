<template>
    <table class="todo-table">
        <tr class="todo-table-head">
            <th><span>Cessionares</span></th>
            <th><span>Termijn loopt tot</span></th>
            <th><span>Beschrijving</span></th>
        </tr>
        <tr v-for="todoItem in responseTodos">
            <td>{{ todoItem.assignee }}</td>
            <td>{{ todoItem.dateTime.toLocaleString() }}</td>
            <td>{{ todoItem.description }}</td>
        </tr>
    </table>
</template>

<script setup lang="ts">
import { useTodoTableStore } from '@/stores/todoStore';
const todoTableStore = useTodoTableStore();
const responseTodos = computed(() => {
    return todoTableStore.todoTable;
});
</script>

<style>
table.todo-table {
    overflow: hidden;
    border: 1px solid #d3d3d3;
    background: #fefefe;
    width: 100%;
    margin: 5% auto 0;
    border-radius: 3px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    ;
    -moz-box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    border-collapse: separate !important;
}

table,
td,
th {
    padding: 4px 6px 4px;
    text-align: center;
}

table,
td,
th {
    text-align: left
}

td {
    border-top: 1px solid #e0e0e0;
    border-right: 1px solid #e0e0e0;
}

tr:hover {
    background-color: #bbcadf;
    transition: all .8s ease;
    -webkit-transition: all .8s ease;
    -moz-transition: all .8s ease;
}

th {
    padding-top: 14px;
    padding-bottom: 10px;
    text-shadow: 1px 1px 1px #333;
    background: #043168;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
}
</style>