<script setup>
import { ref, reactive, onBeforeMount } from "vue";

const inputDate = ref("1997-11-04");

const saveData = () => {
  // Save the input date value to local storage
  localStorage.setItem("dateData", inputDate.value);
  console.log(inputDate.value);
};
import { localData } from "../store/user";
// const localData = JSON.parse(localStorage.getItem("user"));
// console.log(localData);
</script>
<template>
  <div>
    <div class="px-4 sm:px-0">
      <h3 class="text-base font-semibold leading-7 text-gray-900">Applicant Information</h3>
      <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
    </div>
    <div class="mt-6 border-t border-gray-100">
      <dl class="divide-y divide-gray-100">
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Full name</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ localData.name }}</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Email address</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ localData.email }}</dd>
        </div>
      </dl>
    </div>
  </div>

  <!-- <div>
    <input type="date" v-model="inputDate" />
    <button @click="saveData" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
  </div> -->
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><router-link to="/edit-profile">Edit Profile</router-link></button>
</template>
