import { defineStore } from "pinia";

export const useAddressStore = defineStore('address',{

  state: () => ({
    state: [{value:1,label:"台北市"}, {value:2,label:"新北市"}],
    pricelist:[
      {"state": "台北市", "city": "大安區", "limit": 1000, "price": 50},
      {"state": "台北市", "city": "松山區", "limit": 1500, "price": 75},
      {"state": "台北市", "city": "中山區", "limit": 1500, "price": 75},
      {"state": "台北市", "city": "信義區", "limit": 1500, "price": 75},
      {"state": "台北市", "city": "中正區", "limit": 1500, "price": 75},
      {"state": "新北市", "city": "永和區", "limit": 1500, "price": 75},
      {"state": "台北市", "city": "大同區", "limit": 2000, "price": 100},
      {"state": "台北市", "city": "萬華區", "limit": 2000, "price": 100},
      {"state": "台北市", "city": "文山區", "limit": 3000, "price": 150},
      {"state": "新北市", "city": "中和區", "limit": 3000, "price": 150},
      {"state": "新北市", "city": "板橋區", "limit": 3000, "price": 150},
      {"state": "新北市", "city": "三重區", "limit": 3000, "price": 150},
      {"state": "台北市", "city": "士林區", "limit": 4000, "price": 200},
      {"state": "台北市", "city": "內湖區", "limit": 4000, "price": 200},
      {"state": "新北市", "city": "新店區", "limit": 4000, "price": 200},
      {"state": "新北市", "city": "新莊區", "limit": 4000, "price": 200},
      {"state": "新北市", "city": "蘆洲區", "limit": 4000, "price": 200},
      {"state": "台北市", "city": "北投區", "limit": 5000, "price": 250},
      {"state": "台北市", "city": "內湖區(東湖)", "limit": 5000, "price": 250},
      {"state": "台北市", "city": "南港區", "limit": 5000, "price": 250},
      {"state": "新北市", "city": "土城區", "limit": 5000, "price": 250},
      {"state": "新北市", "city": "樹林區", "limit": 5000, "price": 250},
      {"state": "新北市", "city": "五股區", "limit": 5000, "price": 250},
      {"state": "新北市", "city": "泰山區", "limit": 5000, "price": 250},
      {"state": "台北市", "city": "士林區(陽明山/仰德大道/文化大學)", "limit": 6000, "price": 300},
      {"state": "新北市", "city": "鶯歌區", "limit": 6000, "price": 300},
      {"state": "新北市", "city": "汐止區", "limit": 6000, "price": 300},
      {"state": "新北市", "city": "三峽區", "limit": 8000, "price": 400},
      {"state": "新北市", "city": "林口區", "limit": 8000, "price": 400},
      {"state": "新北市", "city": "淡水區", "limit": 12000, "price": 600}
    ]
  }),
  actions: {},
  persist: true,
});
