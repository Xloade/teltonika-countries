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
            {{translateValidation(error)}}
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
    props:["id", "apiRoute", "attributes"],
    data(){
        return{
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
          url: this.apiRoute+( this.id===null?"":"/"+this.id),
          data:data,
          headers : {
            "Content-Type" : "application/json"
          }
          })
          .then((message)=>{
            this.$emit("submited")
            alert(this.$t(message.data.message))
          })
          .catch((error)=>{
            if(error.response.status === 422){
              this.validationErrors = error.response.data.errors
            }
            else{
              alert(this.$t(error.response.data.message))
            }
          })
      },
      getEditFields(){
        if(this.id !== null){
          this.axios.get(this.apiRoute+"/"+this.id)
          .then((message)=>{
            this.attributes.forEach((attribute) => attribute.formField = message.data.data.attributes[attribute.apiKey])
          })
          .catch((error)=>{
            alert(this.$t(error.message))
          })
        }
      },
      translateValidation(text){
        const found = text.match(/The data.attributes.(.+) (field is required|must be a number)./);
        if(found === null) return text
        return this.$t("form_validation_error", {field: this.$t(found[1]), rule: this.$t(found[2])})
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
<style scoped>
/* header */
  h2{
      margin-top: 0px;
      margin-bottom: 28px;

      font-family: Oswald; 
      font-size: 25px; 
      font-style: normal; 
      font-variant: normal; 
      font-weight: 400; 
      line-height: 37.05px; 
      color: #5C5C5C;
  }
  /* form */
  .editForm{
      margin: 0px 46px 35px 46px;
  }
  /* submit button */
  .submitButtonContainer{
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
  }
  .submitButton{
      margin-top: 28px;
      width: 92px;
      height: 42px;
      border: none;
      border-radius: 5px;
      background-color: transparent;
      box-shadow: 0px 0px 5px  rgba(0,0,0,0.2);
      padding:2px 2px;

      font-family: Oswald; 
      font-size: 18px; 
      font-style: normal; 
      font-variant: normal; 
      font-weight: 400; 
      line-height: 26px; 
      color: #969696;
  }
  .submitButton:hover{
      color: #0054A6;
      box-shadow: 0px 0px 5px  #0054A6;
  }
  /* fielset */
  fieldset{
      border-color: #969696;
      border-width: 0.75px;
      border-radius: 7px;

      width: 374px;
      height: 42px;
      padding: 0px 5px 3.3px 0px;
  }

  .formField{
      margin-bottom: 15px;
  }
  .formField:last-child{
      margin-bottom: 0px;
  }
  legend{
      margin-left: 29px;
  }
  /* inputs */
  input{
      width: calc(100% - 5px);
      height: calc(100% - 2px);
      border: none;
      border-radius: 5px;
      padding: 2px 5px;
  }
  input:focus{
      outline: none;
  }
  /* errors */
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