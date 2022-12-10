import { defineStore } from 'pinia'
import { reactive } from 'vue'
import countriesJson from './countries.json'


export const BCOUNTRY = defineStore("COUNTRY", () => {

    const country       = reactive({})
    const countries     = countriesJson

    return { country, countries}
})