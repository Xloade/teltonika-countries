<template>
  <whole-page-layout>

    <template #header>
      <page-header headerName="Name" @clickAdd="showForm = true"/>
    </template>

    <template #body>
      <search-bar/>
      <item-table :items="items" :attributes="attributes"/>
      <pagination-row :links="paginationLinks"/>
      <countries-form v-show="showForm"/>
    </template>

  </whole-page-layout>
</template>


<script>
import WholePageLayout from '../layouts/WholePageLayout.vue'
import PageHeader from '../components/PageHeader.vue'
import SearchBar from '../components/SearchBar.vue'
import ItemTable from '../components/ItemTable.vue'
import PaginationRow from '../components/PaginationRow.vue'
import CountriesForm from '../components/CountriesForm.vue/'

import TableViewMixin from '../Mixins/TableViewMixin.vue'
import { computed } from '@vue/runtime-core'

export default {
  mixins:[TableViewMixin],
  props: ['page'],
  data(){
    return{
      response : null,
      attributes : [
        {apiKey: 'name', collName: 'pavadinimas'},
        {apiKey: 'area', collName: 'užimamas plotas'},
        {apiKey: 'population', collName: 'gyventojų skaičius'},
        {apiKey: 'phone_code', collName: 'šalies tel. kodas'},
      ]
    }
  },
  computed:{
    items(){
      if(!this.response) return []
      else return this.response['data']
    },
    paginationLinks(){
      if(!this.response) return []
      else return this.response['meta']['links']
    },
  },
  methods:{
    requestItems(){
      this.axios.get('https://akademija.teltonika.lt/countries_api/api/countries', { params: {page: this.page}})
        .then(response => this.response = response.data)
        .catch(error => alert(error.message))
    }
  },
  mounted(){
    this.requestItems();
  },
  updated(){
    this.requestItems();
  },
  components:{
    WholePageLayout,
    PageHeader,
    SearchBar,
    ItemTable,
    PaginationRow,
    CountriesForm,
  },
}
</script>
