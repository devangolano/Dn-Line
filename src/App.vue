<template>
  <div
    class="min-h-screen bg-gradient-to-t from-blue-900 via-purple-900 to-gray-900"
  >
    <!-- Navigation -->
    <nav class="flex flex-wrap justify-between items-center px-6 sm:px-16 py-4">
      <div class="text-white flex gap-1 text-xl sm:text-2xl font-bold">
        <span class="font-mono cursor-pointer">Dn-Line</span
        ><SparklesIcon class="h-5 w-5 sm:h-6 sm:w-6 inline ml-1" />
      </div>
      <div class="flex items-center gap-4 sm:gap-6 text-sm sm:text-base">
        <span class="text-gray-400 hidden">18:22 GMT+1</span>
        <a
          href="#"
          class="text-gray-400 hover:text-white flex items-center gap-1"
        >
          Explorar
          <ArrowUpRightIcon class="h-4 w-4" />
        </a>
        <a href="#" class="text-white hover:text-gray-200"> Entrar </a>
      </div>
    </nav>

    <!-- Main Content -->
    <main
      class="container mx-auto max-w-6xl px-4 flex flex-wrap sm:flex-nowrap items-center gap-8 sm:gap-12 mt-10 sm:mt-20"
    >
      <!-- Left Column -->
      <div class="flex-1 text-center sm:text-left">
        <h1 class="text-4xl sm:text-6xl font-bold text-white mb-6">
          Eventos
          <br />
          encantadores
          <br />
          <span
            class="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
          >
            começam aqui.
          </span>
          <br />
          <span
            class="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"
          >
          </span>
        </h1>

        <p
          class="text-gray-400 text-lg md:text-md sm:text-xl mb-5 md:mb-8 max-w-md mx-auto sm:mx-0"
        >
          Crie uma página de evento, convide amigos e venda ingressos. Organize
          um evento memorável hoje.
        </p>

        <button
          class="bg-white text-black px-4 sm:px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Crie Seu Primeiro Evento
        </button>
      </div>

      <!-- Right Column - Hero Image -->
      <div class="flex-1 mt-8 md:mt-0 relative">
        <div
          class="w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] rounded-full overflow-hidden relative mx-auto"
        >
          <img src="/home.gif" class="w-full h-full object-cover" />
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer
      class="mt-16 text-gray-400 text-sm py-6 px-6 md:px-32 border-t border-gray-700"
    >
      <div
        class="container mx-auto flex flex-col md:flex-row justify-between items-center"
      >
        <div class="flex font-mono gap-4 sm:gap-6">
          <a href="#" class="hover:text-white">Novidades</a>
          <a href="#" class="hover:text-white">Descobrir</a>
          <a href="#" class="hover:text-white">Preços</a>
          <a href="#" class="hover:text-white">Ajuda</a>
        </div>
        <div class="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
          <a href="#" class="hover:text-white">Termos</a>
          <a href="#" class="hover:text-white">Privacidade</a>
          <a href="#" class="hover:text-white">Segurança</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import {
  SparklesIcon,
  ArrowUpRightIcon,
  CalendarIcon,
  Music2Icon,
} from "lucide-vue-next";
</script>

<style>
/* Add any custom styles here if needed */
</style>
