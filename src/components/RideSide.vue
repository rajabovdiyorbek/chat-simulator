<template>
  <aside class="right-side">
    <div class="header-container">
      <div class="header">
        <div class="toggle-button">
          <i class="fas fa-bars"></i>
          <i class="fas fa-arrow-left"></i>
        </div>
        <div class="search-box">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
    <div class="body-container">
      <div
        v-for="user in filteredUsers"
        :key="user.id"
        class="chat-list"
        @click="setActiveChat(user)"
      >
        <div class="chat-box" id="Msg">
          <div class="chat-img">
            <img :src="getUserImage(user.id)" alt="" />
          </div>
          <div class="chat-details">
            <div class="chat-title">
              <h3>{{ user.name }}</h3>
              <span>06:04 PM</span>
            </div>
            <div class="chat-msg">
              <p>Sample message here</p>
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pen">
      <i class="fas fa-pen"></i>
    </div>
  </aside>
</template>

<script setup>
import { computed } from "vue";
import { useChatsStore } from "@/stores/store";

const store = useChatsStore();

const filteredUsers = computed(() => {
  return store.users.filter((user) => user.id !== store.currentUser?.id);
});

const setActiveChat = (user) => {
  store.setActiveChatUser(user);
  store.loadChatMessages(user);
};

const getUserImage = (id) => {
  if (id) {
    return require(`@/assets/img/profile-${id}.png`);
  }
};
</script>
