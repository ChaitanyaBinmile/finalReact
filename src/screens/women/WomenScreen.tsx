import { FormControl, InputLabel, MenuItem } from '@mui/material';
import { CardComponent } from './CardComponent'
import { SidebarComponent } from './Sidebar/SidebarComponent';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { updateCart } from '../../app/feature/cartSlice/cartSlice';


export const WomenScreen = () => {

        const CartArr = useAppSelector((state=>state.cartArray.Arr))

        const dispatch= useAppDispatch()
    
        const [sort, setSort] = useState('');
        const handleChange = (event: SelectChangeEvent) => {
            const selectedValue = event.target.value;

            if (selectedValue === '10') {
              const sortedArray = [...CartArr].sort((a, b) => a.price - b.price);
              dispatch(updateCart(sortedArray))
              setSort(selectedValue);
            } else if (selectedValue === '20') {
              const sortedArray = [...CartArr].sort((a, b) => b.price - a.price);
              setSort(selectedValue);
              dispatch(updateCart(sortedArray))
          }
        }
  return (
    <div className='flex flex-col '>
        <div className='flex px-12 py-4'>
            <Link to='/'>
                <p className='text-xs text-[#5f5f5f]'> Homepage &gt; </p>
            </Link>
            <Link to='/women'>
                <p className='text-xs text-[#5f5f5f]'>Women &gt; </p>
            </Link>
            <p className='text-xs text-[#5f5f5f] cursor-pointer'> Clothes </p>
        </div>
        <div className='flex px-12 py-5 items-center justify-between bg-[#E9E9E9]'>
            <div className='flex items-center gap-6 '> 
            
                <p>Women</p>
                <p className='font-medium text-sm text-[#999898]'>110 items</p>

            </div>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label"  sx={{ fontSize: 'small' ,alignItems: 'center', display:'flex  '}} >Sort by order</InputLabel>
        <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={sort}
            label="Sort by order"
            onChange={handleChange}
        >
            <MenuItem value="" sx={{ fontSize: 'small' }}>
            None
            </MenuItem>
            <MenuItem value={'10'} sx={{ fontSize: 'small' }}>low to high</MenuItem>
            <MenuItem value={'20'} sx={{ fontSize: 'small' }}>high to low</MenuItem>
        </Select>
        </FormControl>
        </div>
        <div className='flex'>

         <SidebarComponent/>
        <div className='flex flex-wrap w-[80%] py-[68px] pl-[2%]'>
            <CardComponent/>
        </div>
        </div>

        </div>
  
  )
}
