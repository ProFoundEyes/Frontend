<template>
  <main>
    <div class="h-screen w-screen grid place-content-center">
      <input_phone.template />
    </div>
  </main>
</template>

<script setup lang="ts">
  // Components
  import { useInputPhoneStroes } from '@/components/inputs/input_phone'
  
  const input_phone = useInputPhoneStroes()

</script>
