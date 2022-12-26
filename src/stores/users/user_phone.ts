import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { parsePhoneNumber } from 'awesome-phonenumber'

export const useUserPhoneStore = defineStore('user_phone', () => {
  
    interface USER_PHONE {
        pid?: number
        number?: string
        calling_code?: string
        created_date?: Date
    }

    const data = reactive({}) as USER_PHONE

    const save = async ( phone: any | null | undefined = null || undefined ) => {
      
      let in_phone = phone

      if(in_phone === null || undefined){
        return data.number
      }

      return parsePhoneNumber(in_phone)
    }

  return { data, save }
})