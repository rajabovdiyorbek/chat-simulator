<template>
  <div class="user-selection">
    <h2>Select a User to Start Chatting:</h2>
    <ul>
      <li
        v-for="user in store.users"
        :key="user.id"
        @click="selectUser(user.id)"
        class="user-item"
      >
        <img class="user-image" :src="getUserImage(user.id)" alt="" />
        <span class="user-name">{{ user.name }}</span>
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

const getUserImage = (id) => {
  if (id) {
    return require(`@/assets/img/profile-${id}.png`);
  }
};
</script>

<style scoped></style>
