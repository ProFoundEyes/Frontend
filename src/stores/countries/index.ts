import { defineStore } from 'pinia'
import countries from './countries.json'

export const useCountriesStore = defineStore('countries', () => {

  const data = countries

  const getCountryByCode = ( code: string | undefined | null ) => {
    if(code !== null || undefined){
      for (let i = 0; i < countries.length; i++){
        let country = countries[i]
        if (country.code === code){
            return country
        }else{
            return 'Bunday mamlakat topilmadi'
        }
      }
    }
  }
 


  return { data, getCountryByCode }

})