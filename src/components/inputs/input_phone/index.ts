import { defineStore } from "pinia";
import { usePhoneStore } from '@/stores/phone';
import { reactive, onBeforeMount } from 'vue';
import template from '@/components/inputs/input_phone/index.vue'

export const useInputPhoneStroes = defineStore('input-phone', () => {
    
    interface CPHONE {
        number?:    string  | null
        country?:   string  | null
        valid?:      boolean | null
    }

    const phone = usePhoneStore()
    const data = reactive({}) as CPHONE

    const ifchangenumber = (event:any) => {
        let in_phone = phone.parse(String(event.target.value))
        if (in_phone) {
            data.number       = in_phone.number?.international || in_phone.number?.input || null
            data.country      = in_phone.regionCode || null
            data.valid        = in_phone.valid || null
        }
    }

    const ifchangecountry = (event:any) => {
        let in_phone = phone.parse('+' + phone.getCallingCodeByCountryCode(String(event.target.value)))
        if (in_phone) {
            data.number       = in_phone.number?.international || in_phone.number?.input || null
            data.country      = in_phone.regionCode || null
            data.valid        = in_phone.valid || null
        }
    }


    onBeforeMount(() => {
        phone.getAutoFindCallingCodeAndCountry().then((res) => {
            if (data.number === undefined && data.country === undefined){
                data.number      = '+' + res.calling_code || null
                data.country     = res.country_code || null
            } 
        }).catch((err) => {
            throw new Error(err)
        });
    })

    return { data, template, ifchangenumber, ifchangecountry }

})