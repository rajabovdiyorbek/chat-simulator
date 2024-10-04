<template>
  <div class="user-selection">
    <h2>Select a User to Start Chatting:</h2>
    <ul>
      <li
        v-for="user in store.users"
        :key="user.id"
        @click="selectUser(user.id)"
      >
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useChatsStore } from "@/stores/store";

const router = useRouter();
const store = useChatsStore();

const selectUser = (id) => {
  sessionStorage.setItem("selectedUser", id);
  router.push("/chat");
};
</script>

<style scoped>
.user-selection {
  text-align: center;
  padding: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 10px 0;
}

li:hover {
  background-color: #f0f0f0;
}
</style>
