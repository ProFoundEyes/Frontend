<template>
    <div class="relative w-full h-auto p-4">
       <div class="relative w-full mb-4">
            <select 
                class="relative w-full border border-slate-300 px-4 py-2 rounded-md focus:outline-none"
                v-model="cphone.data.country"
                @input="cphone.ifchangecountry"
                name="" 
                id="">
                <option :value="null">Country</option>
                <option v-for="country in countries.data" :value="country.code">
                    {{ country.name }}
                </option>
            </select>
       </div>
       <div class="relative w-full after:w-full">
            <input 
                type="text"
                :class="{'focus:border-red-300': !cphone.data.valid, 'focus:border-green-300': cphone.data.valid}" 
                class="relative w-full border border-slate-300 px-4 py-2 rounded-md focus:outline-none"
                v-model="cphone.data.number"
                @input="cphone.ifchangenumber">
       </div>
    </div>
</template>

<script setup lang="ts">
    import { useCountriesStore } from '@/stores/countries';
    import { useInputPhoneStroes } from '@/components/inputs/input_phone'

    const countries = useCountriesStore()
    const cphone = useInputPhoneStroes()

</script>