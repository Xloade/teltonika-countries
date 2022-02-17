<template>
  <popup-form-layout>
    <form
      @submit.prevent="submit"
      class="editForm"
      id="form"
    >
      <h2 id="formHeader">{{id===null?'PRIDETI':'REDAGUOTI'}} ŠALĮ</h2>
      <div class="formField" v-for="attribute in attributes" :key="attribute.apiKey">
        <fieldset>
          <legend>{{attribute.collName}}</legend>
          <input type="text" :name="attribute.apiKey" v-model="attribute.formField" />
        </fieldset>
        <div v-if="validationErrors.hasOwnProperty('data.attributes.'+attribute.apiKey)" class="errors">
          <p v-for="error in validationErrors['data.attributes.'+attribute.apiKey]" :key="error" class="error">
            {{error}}
          </p>
        </div>
      </div>

      <div class="submitButtonContainer">
        <button type="submit" class="submitButton">
          SAUGOTI
        </button>
      </div>
    </form>
  </popup-form-layout>
</template>

<script>
import PopupFormLayout from "../layouts/PopupFormLayout.vue";
export default {
    props:["id"],
    data(){
        return{
            attributes : [
                {apiKey: 'name', collName: 'Pavadinimas'},
                {apiKey: 'area', collName: 'Užimamas plotas',},
                {apiKey: 'population', collName: 'Gyventojų skaičius'},
                {apiKey: 'phone_code', collName: 'Šalies tel. kodas'},
            ],
            validationErrors: Object()
        }
    },
    methods:{
      submit(event){
        let formData = new FormData(event.target)
        let formDataArray = Object();
        formData.forEach((value, key) => (formDataArray[key] = value));
        let data = {data:{attributes:formDataArray}}
        this.axios({
          method:this.id===null?"POST":"PUT",
          url:"https://akademija.teltonika.lt/countries_api/api/countries"+( this.id===null?"":"/"+this.id),
          data:data,
          headers : {
            "Content-Type" : "application/json"
          }
          })
          .then((message)=>{
            this.$emit("submited")
            alert(message.data.message)
          })
          .catch((error)=>{
            if(error.response.status === 422){
              this.validationErrors = error.response.data.errors
            }
            else{
              alert(error.response.data.message)
            }
          })
      },
      getEditFields(){
        if(this.id !== null){
          this.axios.get("https://akademija.teltonika.lt/countries_api/api/countries/"+this.id)
          .then((message)=>{
            this.attributes.forEach((attribute) => attribute.formField = message.data.data.attributes[attribute.apiKey])
          })
          .catch((error)=>{
            alert(error.message)
          })
        }
      }
    },
    computed:{
      submitData(){
        return this.attributes.map((element)=>{element.apiKey})
      }
    },
    updated(){
      this.attributes.forEach((attribute)=>attribute.formField="")
      this.validationErrors = Object()
      this.getEditFields()
    },
    components:{
      PopupFormLayout
    }
};
</script>
<style>
.errors .error{
  font-size: 12px;
  line-height: 14px;
  margin: 4px 0px 4px 4px;
  color:red;
}
.errors .error:last-child{
  margin-bottom: 0px;
}
</style>