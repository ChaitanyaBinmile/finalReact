import { TextField, Button, Stack } from "@mui/material"
import {useForm} from "react-hook-form"
import {DevTool} from "@hookform/devtools"

export const CustomerInfoComponent = () => {

    type FormValues ={
        email:string
        firstname: string
        lastname: string
        country:string
        state:string
        address:string
        phone: number
    }

    const form = useForm<FormValues>({
        defaultValues:{
            email: '',
            firstname:'',
            lastname:'',
            country:'India',
            state:'uttar pradesh',
            address:'',
            phone:91
        },
    });

    const {register,handleSubmit, formState, control} = form

    const {errors} = formState

    const onSubmit = (data:FormValues) => {
        console.log(data);
    }; 

  return (
    <div>
        <form noValidate    onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} >
                <h1 className="text-lg font-medium">Customer Information</h1>
                <div className="flex flex-col gap-4">
                    <div>
                        <TextField label='Email' type="email"  {...register("email",{
                            required:"Email is required"
                        })}
                        error={!!errors.email}  
                        helperText={errors.email?.message}
                        style={{ width: '100%' }} 
                        />
                    </div>
                    <div className="flex gap-2" >
                    <TextField label='First Name' type="firstname"  {...register("firstname",{
                            required:"firstname is required"
                        })}
                        error={!!errors.firstname}
                        helperText={errors.firstname?.message}
                        style={{ width: '100%' }} 
                        />
                        <TextField label='Last name' type="lastname"  {...register("lastname",{
                            required:"lastname is required"
                        })}
                        error={!!errors.lastname}
                        helperText={errors.lastname?.message}
                        style={{ width: '100%' }} 
                        />
                    </div>
                
                </div>
                <h1 className="text-lg font-medium">Shipping Address</h1>
                <div className="flex flex-col gap-4">
                    
                        <TextField label='country' type="country"  {...register("country",{
                            required:"country is required"
                        })}
                        error={!!errors.country}  
                        helperText={errors.country?.message}
                        />
                        <TextField label='State' type="state"  {...register("state",{
                            required:"State is required"
                        })}
                        error={!!errors.state}
                        helperText={errors.state?.message}
                        />
                         <TextField label='Address' type="address"  {...register("address",{
                            required:"address is required"
                        })}
                        error={!!errors.address}
                        helperText={errors.address?.message}
                        />
                         <TextField label='phone' type="phone"  {...register("phone",{
                            required:"phone is required"
                        })}
                        error={!!errors.phone}
                        helperText={errors.phone?.message}
                        />
                

                </div>
                <Button type="submit" variant="contained">
                    Sign Up
                </Button>
            </Stack>

        </form>
        <DevTool control={control}/>
    </div>
  )
}
