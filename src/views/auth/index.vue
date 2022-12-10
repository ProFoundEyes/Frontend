<template>

    <div class="relative grid gap-4 place-content-center h-screen w-screen">
        <div class="relative grid grid-cols-1 gap-4 m-auto w-72">
            <div class="relative">
                <h1 class="text-center text-slate-900 font-serif text-2xl font-bold tracking-wide leading-loose break-words">
                    Sign Up
                </h1>
            </div>
            <form class="relative grid grid-cols-1 gap-4">
                <div class="relative">
                    <select       
                            v-model="FPHONE.phone.index"
                            @input="handChangeCountry"
                            class ="relative w-full bg-gray-300 py-2 px-4
                            border border-transparent rounded-md ease-in-out
                            focus:outline-none focus:bg-transparent focus:border-slate-500">
                        <option v-for="(country, index) in FCOUNTRY.countries" :value="index">
                              {{country.name }}
                        </option>

                    </select>
                </div>
                <div class="relative">
                    <input  type  ="text"
                            v-model = 'FPHONE.phone.international'
                            @input="handChangeNumber"
                            :class="{ 'focus:border-slate-500':  FPHONE.phone.valid,  'focus:border-red-300':  !FPHONE.phone.valid}"
                            class ="relative w-full bg-gray-300 py-2 px-4
                                    border border-transparent rounded-md ease-in-out
                                    focus:outline-none focus:bg-transparent" >
                </div>
                <div class="relative grid grid-cols-2">
                    <input 
                        type    = "submit"
                        value   = "Next"
                        class   = "col-start-2 bg-indigo-500 font-bold text-white rounded-md py-2
                                  hover:bg-indigo-600">
                </div>
            </form>
        </div>
    </div>

</template>


<script lang="ts" setup>

    // IMPORT
    import { BPHONE } from '@/stores/phone'
    import { BCOUNTRY } from '@/stores/countries'

    // Props
    const props = defineProps({
        phone: String,
    })

    // Constants
    const FPHONE = BPHONE()
    const FCOUNTRY = BCOUNTRY()


    // Handler
    const handChangeNumber = (event: Event) => FPHONE.ifchangenumber(String((event.target as HTMLInputElement).value))

    const handChangeCountry = (event: Event) => FPHONE.ifchangecountry(parseInt((event.target as HTMLInputElement).value))

</script>