<script setup>
import { ref, onMounted } from "vue";
import { Mail } from "lucide-vue-next";
import { RouterLink } from "vue-router";

const currentTime = ref("");
const step = ref(1); // Controla o passo atual do processo
const email = ref(""); // Armazena o email do usuário
const verificationCode = ref(""); // Código de verificação
const newPassword = ref(""); // Nova senha do usuário

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const timezoneOffset = -now.getTimezoneOffset() / 60;
  const gmt = `GMT${timezoneOffset >= 0 ? "+" : ""}${timezoneOffset}`;
  currentTime.value = `${hours}:${minutes} ${gmt}`;
}

function goToNextStep() {
  if (step.value < 3) step.value++;
}

function goToPreviousStep() {
  if (step.value > 1) step.value--;
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
        <span class="text-gray-400 md:flex text-sm hidden">{{
          currentTime
        }}</span>
      </div>
    </nav>

    <main class="flex items-center mx-auto w-full h-screen px-6 justify-center">
      <div class="px-5 py-8 rounded-3xl shadow-2xl max-w-sm w-full">
        <h2 class="text-center text-2xl font-semibold text-white">
          Alterar Senha
        </h2>
        <p class="text-center text-sm text-gray-400 mb-6">
          <span v-if="step === 1"
            >Informe o seu e-mail para alterar a sua senha</span
          >
          <span v-else-if="step === 2"
            >Digite o código que foi enviado no seu e-mail</span
          >
          <span v-else>Escolha uma nova senha</span>
        </p>

        <form @submit.prevent="goToNextStep">
          <div v-if="step === 1" class="mb-4">
            <label
              for="email"
              class="flex items-center gap-1 text-sm font-medium text-gray-400"
            >
              <Mail class="w-4" /> Email
            </label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="dnline@email.com"
              class="mt-2 block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none"
              required
            />
          </div>

          <div v-else-if="step === 2" class="mb-4">
            <label for="code" class="block text-sm font-medium text-gray-400">
              Código de Verificação
            </label>
            <input
              type="text"
              id="code"
              v-model="verificationCode"
              placeholder="123456"
              class="mt-2 block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none"
              required
            />
          </div>

          <div v-else class="mb-4">
            <label
              for="newPassword"
              class="block text-sm font-medium text-gray-400"
            >
              Nova Senha
            </label>
            <input
              type="password"
              id="newPassword"
              v-model="newPassword"
              placeholder="Digite sua nova senha"
              class="mt-2 block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none"
              required
            />
            <label
              for="ConfirmPassword"
              class="block text-sm mt-4 font-medium text-gray-400"
            >
              Confirmar Senha
            </label>
            <input
              type="password"
              id="ConfirmPassword"
              v-model="ConfirmPassword"
              placeholder="Confirma sua nova senha"
              class="mt-2 block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none"
              required
            />
          </div>

          <div class="flex justify-between items-center mt-6">
            <button
              type="button"
              @click="goToPreviousStep"
              v-if="step > 1"
              class="py-2 px-4 bg-gray-400 text-white rounded-md hover:bg-gray-500"
            >
              Voltar
            </button>
            <button
              type="submit"
              class="py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              {{ step === 3 ? "Alterar Senha" : "Próximo" }}
            </button>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>
