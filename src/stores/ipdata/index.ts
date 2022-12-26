import { defineStore } from 'pinia'
import IPData from 'ipdata';


export const useIpdataStore = defineStore("IPDATA", () => {


    const ipdata = async () => {
        return await new IPData('2e73000eacb16ebd9d2f0ce003710f625d62e06d99d982bb4672f40c', {max: 1000, maxAge: 0.5 * 60 * 1000}).lookup()
                        .then( (data) => {
                            return data
                        }).catch((error) => {
                            throw new Error(error)
                        })
    } 

    return { ipdata }
})