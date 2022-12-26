import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

import { useUserPhoneStore } from './user_phone'
import { useUserAuthStore } from './user_auth'

export const useUserStore = defineStore('user', () => {

    interface USER {
        uid?: number
        username?: string
        is_active?: boolean
        is_superuser?: boolean
        is_admin?: boolean
        is_staff?: boolean
        created_data?: Date
        last_login?: Date
    }


    const data = reactive({}) as USER
    const phone = useUserPhoneStore()
    const auth = useUserAuthStore()


  return { data, auth, phone }

})