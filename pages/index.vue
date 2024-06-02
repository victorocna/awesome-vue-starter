<template>
  <main class="cover flex min-h-screen flex-col items-center justify-center px-4 py-8">
    <div class="my-8 flex w-full max-w-xl flex-col rounded-lg bg-white px-4 py-8 lg:px-12">
        <h2 class="mb-4 text-2xl font-bold">Login</h2>
        <LoginForm />
        <div class="mt-2">
          <NuxtLink to="/forgot" class="text-gray-600">
            Forgot password?
          </NuxtLink>
        </div>
        <div class="mt-2">
          <NuxtLink to="/signup" class="text-gray-600">
            <span>No account yet?</span>
            <span class="font-bold text-purple-800">Signup now</span>
          </NuxtLink>
        </div>
      </div>
  </main>
</template>
