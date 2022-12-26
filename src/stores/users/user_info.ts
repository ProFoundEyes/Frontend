import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore('user_info', () => {
  
    interface USER_INFO {
        uid?: number
        username?: string
        is_active?: boolean
        is_superuser?: boolean
        is_admin?: boolean
        is_staff?: boolean
        created_data?: Date
        last_login?: Date
    }


    const data = reactive({}) as USER_INFO

    

  return { data }
})