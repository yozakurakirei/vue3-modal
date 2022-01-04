<template>
  <div class="modal" :class="{ sale: theme === 'sale' }"></div>
  <h1>新規登録</h1>
  <div class="actions">
    <slot name="signup"></slot>
  </div>
</template>