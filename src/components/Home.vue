//create home component
<script setup>
import { authStore } from "../store/store";
// import { localData } from "../store/user";
// import router from "../router/router";
// import { ref, reactive } from "vue";
// const profile = { Name: "Full Name", Email: "your@mail.com", Description: "Description" };

// localStorage.setItem("profile", JSON.stringify(profile));
// const pdatas = JSON.parse(localStorage.getItem("profile"));
// const pdataRef = reactive(pdatas);
// const localDataRec = reactive(localData);
// pdataRef.Name = localDataRec.name;
// pdataRef.Email = localDataRec.email;

// const saveLocal = () => {
//   localStorage.setItem("profile", JSON.stringify(pdataRef));
//   router.push("/user");
// };
</script>
<template>
  <h1 class="text-2xl mb-3">This is home page</h1>
  <!-- {{ Object.keys(localData).length }}

  <p>{{ pdataRef }}</p>
  <p>{{ localData }}</p> -->

  <p class="text-2xl mt-10" v-if="authStore.isAuthenticated">This is some secret content</p>

  <!-- <div v-for="(pdata, key, index) in pdataRef">
    <label for="">{{ key }}</label>
    <input class="my-3" type="text" v-model="pdataRef[key]" />
  </div>
  <button @click="saveLocal()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button> -->
</template>

<style></style>
