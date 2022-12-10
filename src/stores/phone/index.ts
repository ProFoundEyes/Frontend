import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { parsePhoneNumber } from 'awesome-phonenumber'
import { BCOUNTRY } from '@/stores/countries'


export const BPHONE = defineStore("PHONE", () => {

    interface Phone {
        index?:              number
        input?:              string
        international?:      string
        national?:           string
        tel?:                string
        valid?:              boolean
        type?:               string
        possible?:           boolean
        country?:            string
        country_code?:       string
        dialling_code?:      string
    }




    // Dastur ishlash davomida o'zgarmaslar
    const countries = BCOUNTRY().countries
    const phone = reactive({}) as Phone
    
    
    function ifchangecountry(val:number){
        // Agar foydalanuvchi mamlakatni o'zgartirsa shunga mos ravishda telefon raqamni ham o'zgartiradi
        
        if(val != null){
            let vcountry = countries[val]
            let vphone = parsePhoneNumber(vcountry.dialling_code)
            phone.index             = val
            phone.input             = vphone.number?.input
            phone.international     = vphone.number?.international || vphone.number?.input
            phone.national          = vphone.number?.national
            phone.tel               = vphone.number?.rfc3966
            phone.valid             = vphone.valid
            phone.type              = vphone.type
            phone.possible          = vphone.possible
            phone.country           = vcountry.name
            phone.country_code      = vphone.regionCode
            phone.dialling_code     = vcountry.dialling_code
        }
    }

    function ifchangenumber(val = '+998'){
        // Agar foydalanuvchi telefon raqamni kiritsa shunga mos ravishda mamlakatni ham o'zgartiradi
        let vphone = parsePhoneNumber(String(val))
        for (let i = 0; i < countries.length; i++){
            let country = countries[i]
            if (country.code === vphone.regionCode){
                phone.index             = i
                phone.input             = vphone.number?.input
                phone.international     = vphone.number?.international || vphone.number?.input
                phone.national          = vphone.number?.national
                phone.tel               = vphone.number?.rfc3966
                phone.valid             = vphone.valid
                phone.type              = vphone.type
                phone.possible          = vphone.possible
                phone.country           = country.name
                phone.country_code      = vphone.regionCode
                phone.dialling_code     = vphone.countryCode
            }
        }
    }

    // Saxifa yangi ochilganda mamlakatni tanlab beradi
    ifchangenumber()

    
    return { phone, ifchangecountry, ifchangenumber}
})