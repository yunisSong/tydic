<template>
  <div class="chat-container">
    <section class="msger">
      <header class="msger-header">
        <div class="msger-header-title">
          <i class="fas fa-comment-alt"></i>
          SimpleChat
        </div>
        <div class="msger-header-options">
          <span><i class="fas fa-cog"></i></span>
        </div>
      </header>

      <main class="msger-chat" ref="msgerChat">
        <template v-for="msg in chatMsgArray">
          <ChatMsg v-bind="msg" />
        </template>
      </main>

      <form class="msger-inputarea">
        <input
          type="text"
          class="msger-input"
          ref="msgerInput"
          placeholder="Enter your message..."
        />
        <button @click="submit" class="msger-send-btn">Send</button>
      </form>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ChatMsg from "./ChatMsg.vue";
const msgerInput = ref(null);
const msgerChat = ref(null);

const BOT_MSGS = [
  "Hi, how are you?",
  "Ohh... I can't understand what you trying to say. Sorry!",
  "I like to play games... But I don't know how to play!",
  "Sorry if my answers are not relevant. :))",
  "I feel sleepy! :(",
];
const chatMsgArray = ref([]);

const BOT_NAME = "BOT";
const PERSON_NAME = "Sajad";
const submit = (event) => {
  event.preventDefault();
  const msgText = msgerInput.value.value;
  if (!msgText) return;
  appendMessage(PERSON_NAME, "right", msgText, false);
  msgerInput.value.value = "";

  botResponse();
};

function appendMessage(name, side, text, typing) {
  //   Simple solution for small apps
  const msgData = {
    name: name,
    alignType: side,
    msg: text,
    typing: typing,
  };

  chatMsgArray.value.push(msgData);
  msgerChat.scrollTop += 500;
}

function botResponse() {
  const r = random(0, BOT_MSGS.length - 1);
  const msgText = BOT_MSGS[r];
  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(BOT_NAME, "left", msgText, true);
  }, delay);
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
</script>

<style lang="scss" scoped>
.chat-container {
  display: flex;
  flex: 1;
  max-height: 900px;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
  font-family: Helvetica, sans-serif;
}
.msger {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 867px;
  margin: 25px 10px;
  height: calc(100% - 50px);
  border: var(--border);
  border-radius: 5px;
  background: var(--msger-bg);
  box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.msger-header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: var(--border);
  background: #eee;
  color: #666;
}

.msger-chat {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
}
.msger-chat::-webkit-scrollbar {
  width: 6px;
}
.msger-chat::-webkit-scrollbar-track {
  background: #ddd;
}
.msger-chat::-webkit-scrollbar-thumb {
  background: #bdbdbd;
}
.msger-inputarea {
  display: flex;
  padding: 10px;
  border-top: var(--border);
  background: #eee;
}
.msger-inputarea * {
  padding: 10px;
  border: none;
  border-radius: 3px;
  font-size: 1em;
}
.msger-input {
  flex: 1;
  background: #ddd;
}
.msger-send-btn {
  margin-left: 10px;
  background: rgb(0, 196, 65);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.23s;
}
.msger-send-btn:hover {
  background: rgb(0, 180, 50);
}
</style>
