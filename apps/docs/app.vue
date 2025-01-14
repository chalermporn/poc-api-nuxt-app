
<script lang="ts" setup>
import { api } from 'libs'
import { Article } from 'ui'
const { data, error } = await api.nendoroid.skadi.get()
if (error) throw error
const { id, name, cover, type, license } = data
</script>

<template>
  <main class="flex justify-center items-center w-full min-h-screen">
      <Article :id="id"  :name="name" :cover="cover" :license="license" :type="type" />
  </main>
</template>