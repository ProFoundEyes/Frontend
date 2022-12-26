import { defineStore } from 'pinia'
import {    parsePhoneNumber, 
            getCountryCodeForRegionCode } from 'awesome-phonenumber'
import { useIpdataStore } from '@/stores/ipdata'


export const usePhoneStore = defineStore("phone", () => {

    
    // Dastur ishlash davomida o'zgarmaslar
    const IPDATA        = useIpdataStore()


    const parse = (property:string) => {
        let in_phone = parsePhoneNumber(property)
        return in_phone
    }

    const getCallingCodeByCountryCode = (property:string) => {
        let in_calling_code = getCountryCodeForRegionCode(property)
        return in_calling_code
    }

    const getAutoFindCallingCodeAndCountry = async ()  => {

        let in_ipdata = await IPDATA.ipdata().then((data) => {
            return { calling_code: data.calling_code, country_code: data.country_code }
        }).catch((error) => {
            throw new Error(error);
        })

        return in_ipdata

    }

    return { parse, getAutoFindCallingCodeAndCountry, getCallingCodeByCountryCode}
})