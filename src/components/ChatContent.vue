<template>
  <section class="content">
    <div class="container active" id="chatBox">
      <div class="content-header">
        <div class="image">
          <img src="@/assets/img/profile-1.png" alt="" />
        </div>
        <div class="details">
          <h3>alex smith</h3>
          <span>last seen 10 minutes ago</span>
        </div>
        <div class="icons">
          <i class="fas fa-phone-alt"></i>
          <i class="fas fa-search"></i>
          <i class="fas fa-ellipsis-v"></i>
        </div>
      </div>
      <div class="chat-container">
        <div class="chat-msg">
          <p>How to make website using html and css?</p>
          <span class="time">06:04 PM</span>
        </div>
      </div>
      <div class="message-box">
        <div class="message-content">
          <i class="far fa-smile"></i>
          <input type="text" placeholder="Message" />
          <i class="fas fa-paperclip"></i>
        </div>
        <div class="micro">
          <i class="fa-brands fa-telegram"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
