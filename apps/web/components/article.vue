<script setup lang="ts">
const props = defineProps<{
    id: string
    name: string
    cover: string
    type: string
    license: {
      from: string
    }
}>()
</script>
<template>
     <article class="flex gap-6 max-w-xs mx-auto">
          <header class="flex flex-col justify-between">
              <div class="flex flex-col items-end gap-1">
                  <small class="text-gray-400 text-sm font-light">
                      Nendoroid: {{ props.id }}
                  </small>
                  <h1 class="text-5xl text-gray-600">{{ props.name }}</h1>
              </div>
              <div class="relative">
                  <p class="text-right text-gray-500 font-light">
                      {{ props.license.from }}
                  </p>
                  <h4
                      class="z-[-10] text-[24em] absolute bottom-[-6rem] left-[-18rem] text-white font-semibold pointer-events-none outline-text"
                  >
                      {{ props.id }}
                  </h4>
              </div>
          </header>
          <img
              :src="cover"
              alt="{{ props.name }} {{ props.type }}"
              class="z-10 rounded-2xl shadow-2xl object-fit object-contain"
          />
      </article>
</template>

<style>
.outline-text {
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000;
}
</style>