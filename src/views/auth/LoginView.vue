<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 px-4">

    <div class="bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl">

      <!-- HEADER SPACE -->
      <div class="text-center mb-6">
        <img src="/logo.jpg" alt="logo" class="w-16 mb-2 mx-auto rounded-xl shadow" />
        <h1 class="text-2xl font-bold text-gray-800">Welcome Back</h1>
        <p class="text-gray-500 text-sm">Masuk ke akun BiSa</p>
      </div>

      <!-- INPUT -->
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="w-full p-3 mb-4 border rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
      />

      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="w-full p-3 mb-3 border rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
      />

      <!-- REMEMBER + FORGOT -->
      <div class="flex justify-between text-sm text-gray-500 mb-4">
        <label>
          <input type="checkbox" class="mr-1" /> Remember me
        </label>
        <span class="text-blue-500 cursor-pointer">Lupa Password?</span>
      </div>

      <!-- BUTTON -->
      <button
        @click="login"
        class="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 rounded-xl font-semibold hover:opacity-90"
      >
        Login
      </button>

      <!-- DIVIDER -->
      <div class="flex items-center my-6">
        <div class="flex-1 h-px bg-gray-300"></div>
        <span class="px-3 text-gray-400 text-sm">atau masuk dengan</span>
        <div class="flex-1 h-px bg-gray-300"></div>
      </div>

      <!-- SOCIAL -->
      <div class="flex justify-center gap-4 mb-6">
        <button class="w-10 h-10 rounded-full bg-gray-100"><img src="/fb.png" class="w-5 h-5 mx-auto" /></button>
        <button class="w-10 h-10 rounded-full bg-gray-100"><img src="/gg.png" class="w-5 h-5 mx-auto" /></button>
        <button class="w-10 h-10 rounded-full bg-gray-100"><img src="/app.png" class="w-5 h-5 mx-auto" /></button>
      </div>

      <!-- FOOTER -->
      <p class="text-center text-gray-500 text-sm">
        Belum punya akun?
        <router-link to="/register" class="text-blue-500 font-semibold">
          Daftar
        </router-link>
      </p>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const login = () => {
  if (email.value === 'admin@gmail.com') {
    router.push('/admin')
  } else if (email.value === 'rt@gmail.com') {
    router.push('/rt')
  } else if (email.value === 'petugas@gmail.com') {
    router.push('/petugas')
  } else {
    alert('Gunakan email demo')
  }
}
</script>