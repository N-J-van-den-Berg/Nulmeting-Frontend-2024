<template>
  <button>
    <slot>Create
    </slot>
  </button>
</template>
<style lang="scss" scoped>
button {
  padding: 8px 16px;
  border-radius: 5px;
  border: none;
  color: white;
  background-color: #175dc7;
  cursor: pointer;

  &:hover {
    background-color: #124da4
  }
}
</style>