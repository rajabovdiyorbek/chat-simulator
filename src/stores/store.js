import { defineStore } from "pinia";

export const useChatsStore = defineStore("chats", {
  state: () => ({
    users: [
      { id: 1, name: "Alex Smith" },
      { id: 2, name: "Amelia" },
      { id: 3, name: "Diana" },
    ],
    chats: {},
    activeChatUser: null,
    selectedUser: null,
  }),

  getters: {
    currentUser(state) {
      // Получаем текущего пользователя из sessionStorage
      const userId = sessionStorage.getItem("selectedUser");
      return state.users.find((user) => user.id === parseInt(userId)) || null;
    },
    activeChatMessages(state) {
      if (!state.activeChatUser) return [];
      const chatKey = this.getChatKey(
        this.currentUser.id,
        state.activeChatUser.id
      );
      return state.chats[chatKey] || [];
    },
    availableChats(state) {
      // Возвращаем всех пользователей, кроме текущего
      return state.users.filter((user) => user.id !== this.currentUser.id);
    },
  },

  actions: {
    initializeChats() {
      // Инициализация чатов из localStorage
      this.chats = {
        chat_1_2: JSON.parse(localStorage.getItem("chat_1_2")) || [],
        chat_1_3: JSON.parse(localStorage.getItem("chat_1_3")) || [],
        chat_2_3: JSON.parse(localStorage.getItem("chat_2_3")) || [],
      };

      // Подписка на изменения в localStorage
      window.addEventListener("storage", this.handleStorageChange);
    },

    handleStorageChange(event) {
      if (event.key && event.key.startsWith("chat_")) {
        this.chats[event.key] = JSON.parse(event.newValue) || [];
      }
    },

    setActiveChatUser(user) {
      this.activeChatUser = user;
      // Загружаем сообщения при смене чата
      this.loadChatMessages(user);
    },

    selectUser(user) {
      this.selectedUser = user;
      sessionStorage.setItem("selectedUser", user.id); // Сохраняем выбранного пользователя
      this.initializeChats(); // Инициализируем чаты
    },

    loadChatMessages(user) {
      // Загружаем ранее отправленные сообщения, если они есть
      const chatKey = this.getChatKey(this.currentUser.id, user.id);
      this.chats[chatKey] = JSON.parse(localStorage.getItem(chatKey)) || [];
    },

    sendMessage(senderId, recipientId, messageContent) {
      const chatKey = this.getChatKey(senderId, recipientId);
      const message = {
        senderId,
        recipientId,
        content: messageContent,
        timestamp: new Date().toISOString(),
      };

      // Создаем чат, если его еще нет
      if (!this.chats[chatKey]) {
        this.chats[chatKey] = [];
      }

      // Добавляем сообщение в чат
      this.chats[chatKey].push(message);

      // Сохраняем обновленный чат в localStorage
      localStorage.setItem(chatKey, JSON.stringify(this.chats[chatKey]));

      // Обновляем активные сообщения
      // this.activeChatMessages.push(message);
    },

    getChatKey(userId1, userId2) {
      const sortedIds = [userId1, userId2].sort();
      return `chat_${sortedIds[0]}_${sortedIds[1]}`;
    },
  },

  beforeUnmount() {
    // Отписываемся от события при уничтожении компонента
    window.removeEventListener("storage", this.handleStorageChange);
  },
});
