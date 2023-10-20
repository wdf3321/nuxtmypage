<template>
  <div class="w-100 row">
    <div class="col-2">
      <q-input v-model="state" outlined>
        <q-btn-dropdown flat>
          <template v-slot:default>
            <q-list>
              <q-item v-for="addr in address.state" :key="addr.id" clickable @click="setState(addr)">
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>
                <q-item-section>
                  {{ addr.label }}
                </q-item-section>
              </q-item>
            </q-list>
          </template>
        </q-btn-dropdown>
      </q-input>
    </div>
    <div class="col-2">
      <q-input v-model="city" outlined>
        <q-btn-dropdown flat>
          <template v-slot:default>
            <q-list>
              <q-item v-for="addr in filteredAddresses" :key="addr.id" clickable @click="setCity(addr.city)">
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>
                <q-item-section>
                  {{ addr.city }}
                </q-item-section></q-item
              >
            </q-list>
          </template>
        </q-btn-dropdown>
      </q-input>
    </div>
    <div class="col-3">
      <span v-if="state === '' && city === ''">請選擇縣市</span>
      <span v-if="state !== '' && city === ''">請選擇區域</span>
      <br />
      <span v-if="state !== '' && city !== ''">你選擇的是:{{ state }}{{ city }}</span>
      <br />
      免運門檻:{{ find.limit ?? "N/A" }} 未滿運費: {{ find.price ?? "N/A" }}
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

watch([state, city], ([newState, newCity], [oldState, oldCity]) => {
  if (newState !== oldState) {
    // state 已經改變，清空 city
    city.value = "";
  }

  if (newState && newCity) {
    const result: AddressPriceItem | undefined = address.pricelist.find((item: AddressPriceItem) => item.state === newState && item.city === newCity);

    if (result !== undefined) {
      find.value = result;
    }
  }
});
</script>
