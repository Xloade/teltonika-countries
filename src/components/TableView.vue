<template>
  <whole-page-layout>

    <template #header>
      <page-header :headerName="headerName" @clickAdd="showForm = true"/>
    </template>

    <template #body>
      <search-bar/>
      <item-table :items="items" :attributes="attributes" @sort="(order) => this.order = order" @edit="(id) => edit(id)" @delete="(id) => deleteItem(id)"/>
      <pagination-row v-if="paginationLinks.length > 3" :links="paginationLinks" :currentQuery="this.query"/>
      <item-form v-show="showForm" :id="editId" :apiRoute="apiRoute" :attributes="attributes" @close="closeForm()" @submited="formSubmited()"/>
    </template>

  </whole-page-layout>
</template>


<script>
import WholePageLayout from '../layouts/WholePageLayout.vue'
import PageHeader from '../components/PageHeader.vue'
import SearchBar from '../components/SearchBar.vue'
import ItemTable from '../components/ItemTable.vue'
import PaginationRow from '../components/PaginationRow.vue'
import ItemForm from '../components/ItemForm.vue/'

import TableViewMixin from '../Mixins/TableViewMixin.vue'

export default {
  mixins:[TableViewMixin],
  props: ['page', 'headerName','attributes', 'query', 'apiRoute'],
  data(){
    return{
      response : [],
      order : null,
      editId : null
    }
  },
  computed:{
    items(){
      // sorting
      if(this.order !== null){
        this.response['data'].sort((a, b) => {
            if(a.attributes.name == b.attributes.name){
              return 0
            }
            return a.attributes.name < b.attributes.name ? -1 : 1
          })
        if(this.order === 'desc'){
          this.response['data'].reverse()
        }
      }
      return this.response['data']
    },
    paginationLinks(){
      if(this.response.length < 1) return []
      return this.response['meta']['links']
    },
  },
  methods:{
    requestItems(){
      this.axios.get(this.apiRoute, { params: {page: this.page, ...this.query }})
        .then(response => this.response = response.data)
        .catch(error => alert(error.message))
    },
    closeForm(){
      this.showForm = false;
      this.editId = null
    },
    edit(id){
      this.editId = id
      this.showForm = true
    },
    deleteItem(id){
      this.axios.delete(this.apiRoute +'/'+id)
        .then(response => {
          this.requestItems();
          alert(response.data.message)
        })
        .catch(error => alert(error.message))
    },
    formSubmited(){
      this.closeForm()
      this.requestItems()
    }
  },
  mounted(){
    this.requestItems()
  },
  updated(){
    this.requestItems()
  },
  components:{
    WholePageLayout,
    PageHeader,
    SearchBar,
    ItemTable,
    PaginationRow,
    ItemForm,
  },
}
</script>