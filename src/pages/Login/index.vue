<script setup>
import { ref, onMounted } from "vue";
import { Mail, Phone, LogIn, Chrome } from "lucide-vue-next";

const currentTime = ref("");
const usePhone = ref(false); // Controle para alternar entre e-mail e telefone

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const timezoneOffset = -now.getTimezoneOffset() / 60;
  const gmt = `GMT${timezoneOffset >= 0 ? "+" : ""}${timezoneOffset}`;
  currentTime.value = `${hours}:${minutes} ${gmt}`;
}

// Alternar entre e-mail e telefone
function toggleLoginMethod() {
  usePhone.value = !usePhone.value;
}

function validatePhoneInput(event) {
  // Impede a entrada de letras
  const input = event.target;
  input.value = input.value.replace(/[^0-9]/g, "");
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
        <a
          href="#"
          class="text-gray-400 hover:text-white flex items-center gap-1"
        >
          Explorar
          <ArrowUpRightIcon class="h-4 w-4" />
        </a>
        <RouterLink to="/login">
          <a href="#" class="text-white hover:text-gray-200"> Entrar </a>
        </RouterLink>
      </div>
    </nav>

    <main class="flex items-center px-6 mt-24 justify-center">
      <div class="px-5 py-8 rounded-3xl shadow-2xl max-w-sm w-full">
        <div
          class="rounded-full shadow-2xl bg-purple-900 p-2 w-16 h-16 justify-center flex items-center"
        >
          <LogIn class="md:w-10 w-8 h-8 md:h-10 text-white" />
        </div>
        <h2 class="text-center text-2xl font-semibold text-white">Bem-vindo</h2>
        <p class="text-center text-sm text-gray-400 mb-6">
          Faça login ou cadastre-se.
        </p>
        <form class="">
          <!-- Campo de email ou telefone -->
          <div class="mb-4">
            <div class="flex justify-between items-center">
              <label
                for="email"
                class="flex items-center cursor-pointer gap-1 text-sm font-medium text-gray-400"
                :class="!usePhone ? 'order-first' : 'order-last'"
                @click="usePhone = false"
              >
                <Mail class="w-4" /> Email
              </label>
              <label
                for="telefone"
                class="text-sm flex cursor-pointer gap-1 items-center font-medium text-gray-400"
                :class="usePhone ? 'order-first' : 'order-last'"
                @click="usePhone = true"
              >
                <Phone class="w-4" /> Telefone
              </label>
            </div>
            <input
              v-if="!usePhone"
              type="email"
              id="email"
              placeholder="dnline@email.com"
              class="mt-2 block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none"
            />
            <input
              v-else
              type="tel"
              id="telefone"
              placeholder="+244 948-324-028"
              class="mt-2 block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none"
              @input="validatePhoneInput"
            />
          </div>
          <button
            class="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Continuar com {{ usePhone ? "Telefone" : "Email" }}
          </button>
        </form>
        <div class="w-full border-t border-gray-400 my-5 md:my-6"></div>
        <button
          class="w-full py-2 flex justify-center items-center bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
        >
          <Chrome class="w-5 h-5 mr-2" />
          Entrar com o Google
        </button>
      </div>
    </main>
  </div>
</template>
