<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { api } from 'libs';

// Define reactive variables
const name = ref('');
const cover = ref('');
const type = ref('');
const license = ref('');
const error = ref(null);

onMounted(async () => {
  try {
    const response = await api.nendoroid.skadi.get();
    const { data } = response;

    if (!data) throw new Error('No data received');

    // Assign values from the response to reactive variables
    name.value = data.name;
    cover.value = data.cover;
    type.value = data.type;
    license.value = data.license;
  } catch (err) {
    //
  }
});
</script>

<template>
  <div>
    <div v-if="error" style="color: red;">
      <h1>Error</h1>
      <p>{{ error }}</p>
    </div>
    <div v-else>
      <h1 style="color: red;">{{ name }}</h1>
      <img :src="cover" alt="cover" />
      <p>{{ type }}</p>
      <p>{{ license }}</p>
    </div>
  </div>
</template>
