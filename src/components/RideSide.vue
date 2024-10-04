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
      <div class="chat-list">
        <div class="chat-box" id="Msg">
          <div class="chat-img">
            <img src="@/assets/img/profile-1.png" alt="" />
          </div>
          <div class="chat-details">
            <div class="chat-title">
              <h3>alex smith</h3>
              <span>06:04 PM</span>
            </div>
            <div class="chat-msg">
              <p>How to make website using html and css?</p>
              <span>1</span>
            </div>
          </div>
        </div>
        <div class="chat-box">
          <div class="chat-img">
            <img src="@/assets/img/profile-2.png" alt="" />
          </div>
          <div class="chat-details">
            <div class="chat-title">
              <h3>amelia</h3>
              <span>05:04 PM</span>
            </div>
            <div class="chat-msg">
              <p>How are you?</p>
              <span>2</span>
            </div>
          </div>
        </div>
        <div class="chat-box">
          <div class="chat-img">
            <img src="@/assets/img/profile-3.png" alt="" />
          </div>
          <div class="chat-details">
            <div class="chat-title">
              <h3>diana</h3>
              <span>04:04 PM</span>
            </div>
            <div class="chat-msg">
              <p>How to make website?</p>
              <span>3</span>
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

<script setup></script>

<style lang="scss" scoped></style>
