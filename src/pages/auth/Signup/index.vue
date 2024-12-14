<script setup>
import { ref, onMounted } from "vue";
import { Mail, Chrome, Lock, User, Phone, UserPlus } from "lucide-vue-next";
import { RouterLink } from "vue-router";

const currentTime = ref("");

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const timezoneOffset = -now.getTimezoneOffset() / 60;
  const gmt = `GMT${timezoneOffset >= 0 ? "+" : ""}${timezoneOffset}`;
  currentTime.value = `${hours}:${minutes} ${gmt}`;
}

onMounted(() => {
  getCurrentTime();
});
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-t from-blue-900 via-purple-900 to-gray-900"
  >
    <!-- Navigation -->
    <nav class="flex flex-wrap justify-between items-center px-6 sm:px-16 py-4">
      <div class="text-white flex gap-1 text-xl sm:text-2xl font-bold">
        <RouterLink to="/">
          <span class="font-mono cursor-pointer">Dn-Line</span
          ><SparklesIcon class="h-5 w-5 sm:h-6 sm:w-6 inline ml-1" />
        </RouterLink>
      </div>
      <div class="flex items-center gap-4 justify-center text-sm sm:text-base">
        <span class="text-gray-400 text-sm">{{ currentTime }}</span>
      </div>
    </nav>

    <main class="flex items-center mx-auto w-full h-screen px-6 justify-center">
      <div class="px-5 rounded-3xl shadow-2xl max-w-sm w-full">
        <div
          class="rounded-full shadow-2xl bg-purple-900 p-2 w-16 h-16 justify-center flex items-center"
        >
          <UserPlus class="md:w-10 w-8 h-8 md:h-10 text-white" />
        </div>
        <h2 class="text-center text-2xl font-semibold text-white">
          Criar conta
        </h2>
        <p class="text-center text-sm text-gray-400 mb-6">
          Preencha com suas informações
        </p>
        <form class="">
          <!-- Campo de email ou telefone -->
          <div class="">
            <div class="flex justify-between items-center">
              <label
                for="text"
                class="flex items-center cursor-pointer gap-1 text-sm font-medium text-gray-400"
              >
                <User class="w-4" /> Nome Completo
              </label>
            </div>
            <input
              type="text"
              id="name"
              placeholder="Denise José"
              class="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none"
            />

            <div class="flex mt-3 justify-between items-center">
              <label
                for="tel"
                class="flex items-center cursor-pointer gap-1 text-sm font-medium text-gray-400"
              >
                <Phone class="w-4" /> Telefone
              </label>
            </div>
            <input
              type="tel"
              id="phone"
              placeholder="+244 948 324 028"
              class="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none"
            />

            <div class="flex mt-3 justify-between items-center">
              <label
                for="email"
                class="flex items-center cursor-pointer gap-1 text-sm font-medium text-gray-400"
              >
                <Mail class="w-4" /> E-mail
              </label>
            </div>
            <input
              type="email"
              id="email"
              placeholder="dnline@email.com"
              class="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none"
            />

            <label
              for="email"
              class="flex items-center mt-3 cursor-pointer gap-1 text-sm font-medium text-gray-400"
            >
              <Lock class="w-4" /> Senha</label
            >
            <input
              type="password"
              id="passWord"
              placeholder="sua senha!"
              class="block mt-1 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none"
            />
          </div>
          <button
            class="w-full mt-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Criar sua conta
          </button>
          <RouterLink
            to="/login"
            class="text-blue-200 text-center pt-4 flex items-center justify-center font-mono font-semibold text-sm"
            >Já tem conta</RouterLink
          >
        </form>
        <div class="w-full border-t border-gray-400 mb-5"></div>
      </div>
    </main>
  </div>
</template>
