import { createSlice } from '@reduxjs/toolkit';
import data from "../data/data.json"

let dataList = data.Product;
const mobileSlice = createSlice({
  name: 'mobiles',
  initialState: dataList,
  reducers: {
      addProduct: (state,action) =>{
        state.push(action.payload)
      },
      editProduct:(state,action) =>{
        const {id,name,price,year,thubnail,description} = action.payload;
        const uu = state.find(product => product.id == id);
        console.log(uu)
        if(uu){
          uu.name = name
          uu.price= price
          uu.year= year
          uu.thubnail= thubnail
          uu.description= description

        }
      },
      deleteProduct:(state,action) =>{
        const {id,name} = action.payload;
        const uu = state.find(product => product.id == id);
        if(uu){
          return state.filter(f=> f.id !== id)
        }
      }
      
  },
});
export const {addProduct,editProduct,deleteProduct} = mobileSlice.actions
export default mobileSlice.reducer;