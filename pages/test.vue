<template>
  <div class="w-100 row">
    <div class="col-3">
      <q-list>
        <q-item v-for="addr in address.state" :key="addr.id" clickable @click="setState(addr)">{{ addr.label }}</q-item>
      </q-list>
    </div>
    <div class="col-3">
      <q-list>
        <q-item v-for="addr in filteredAddresses" :key="addr.id" clickable @click="setCity(addr.city)">{{ addr.city }}</q-item>
      </q-list>
    </div>
    <div class="col-3">
      <span v-if="state === '' && city === ''">請選擇縣市</span>
       <span v-if="state!=='' &&city === ''">請選擇區域</span>
       <br>
       <span v-if="state!=='' &&city !== ''">你選擇的是:{{state}}{{city  }}</span>
       <br>
       免運金額:{{
        find.limit ?? "N/A"
      }}
      未滿運費: {{ find.price ?? "N/A" }}
    </div>
    <div class="col-3"></div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref, computed } from "vue";
import { useAddressStore } from "~/stores/address";
const address = useAddressStore();
const state = ref<string>("");
const city = ref<string>("");

type findObject = {
  price?: number;
  state?: string;
  city?: string;
  limit?: number;
};
type AddressPriceItem = {
  state: string;
  city: string;
  limit: number;
  price: number;
};
// -----------------------------------------------------------------------------
const find = ref<findObject>({});

const filteredAddresses = computed(() => {
  return address.pricelist.filter((addr) => addr.state === state.value);
});
const setState = (val: { label: string }) => {
  // 加上了 TypeScript 的類型
  state.value = val.label;
};

const setCity = (val: string) => {
  city.value = val;
};

watch(
  [state, city],
  ([newState, newCity], [oldState, oldCity]) => {
    if (newState !== oldState) {
      // state 已經改變，清空 city
      city.value = "";
    }

    if (newState && newCity) {
      const result: AddressPriceItem | undefined = address.pricelist.find(
        (item: AddressPriceItem) =>
          item.state === newState && item.city === newCity
      );

      if (result !== undefined) {
        find.value = result;
      }
    }
  }
);

</script>
