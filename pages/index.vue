<template>
  <div class="page-wrapper">
    <div class="element-wrapper">
      <div class="element-body">
        <h2>Manage al je taken met een simpele klick!</h2>
        <!-- Taken overzicht -->
        <LevButton @click="getAddTodoListItem"></LevButton>
        <NickTodoTable></NickTodoTable>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTodoTableStore } from '@/stores/todoStore';

const todoTableStore = useTodoTableStore();

function getAddTodoListItem(): void {
  todoTableStore.getItem();
}
</script>
