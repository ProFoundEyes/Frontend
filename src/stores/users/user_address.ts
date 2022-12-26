import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserAddressStore = defineStore('user_address', () => {
  
    interface USER_ADDRESS {
        uid?: number
        username?: string
        is_active?: boolean
        is_superuser?: boolean
        is_admin?: boolean
        is_staff?: boolean
        created_data?: Date
        last_login?: Date
    }


    const data = reactive({}) as USER_ADDRESS

    

  return { data }
})