<template>
  <section class="content">
    <div
      class="container"
      :class="{ active: store.activeChatUser?.id }"
      id="chatBox"
    >
      <div class="content-header">
        <div class="image">
          <img :src="getUserImage(store.activeChatUser?.id)" alt="" />
        </div>
        <div class="details">
          <h3>{{ store.activeChatUser?.name }}</h3>
          <span>last seen 10 minutes ago</span>
        </div>
        <div class="icons">
          <i class="fas fa-phone-alt"></i>
          <i class="fas fa-search"></i>
          <i class="fas fa-ellipsis-v"></i>
        </div>
      </div>
      <div class="chat-container">
        <div
          v-for="message in store.activeChatMessages"
          :key="message.timestamp"
          class="chat-msg"
          :class="{
            'my-message': message.senderId === store.currentUser?.id,
            'other-message': message.senderId !== store.currentUser?.id,
          }"
        >
          <p>{{ message.content }}</p>
          <span class="time">{{
            new Date(message.timestamp).toLocaleTimeString()
          }}</span>
        </div>
      </div>
      <div class="message-box">
        <div class="message-content">
          <i class="far fa-smile"></i>
          <input
            type="text"
            placeholder="Message"
            @keydown.enter="sendMessage"
            v-model="message"
          />
          <i class="fas fa-paperclip"></i>
        </div>
        <div class="micro">
          <i class="fa-brands fa-telegram" @click="sendMessage"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, nextTick } from "vue";
import { useChatsStore } from "@/stores/store";

const store = useChatsStore();
const message = ref("");

watch(
  () => store.activeChatUser,
  (newUser) => {
    if (newUser) {
      store.loadChatMessages(newUser);
      nextTick(() => {
        scrollToBottom();
      });
    }
  }
);

// Отслеживаем изменения в сообщениях
watch(
  () => store.activeChatMessages,
  () => {
    nextTick(() => {
      scrollToBottom();
    });
  }
);

const scrollToBottom = () => {
  nextTick(() => {
    const chatContainer = document.querySelector(".chat-container");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  });
};

const sendMessage = () => {
  if (message.value.trim() && store.activeChatUser) {
    store.sendMessage(
      store.currentUser.id,
      store.activeChatUser.id,
      message.value
    );
    message.value = "";
    nextTick(() => {
      scrollToBottom();
    });
  }
};

const getUserImage = (id) => {
  if (id) {
    return require(`@/assets/img/profile-${id}.png`);
  }
};
</script>
