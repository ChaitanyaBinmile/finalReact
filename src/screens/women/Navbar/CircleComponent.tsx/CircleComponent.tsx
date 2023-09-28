import { CheckCircle, Circle } from '@mui/icons-material'
import { Checkbox } from '@mui/material'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export const CircleComponent:React.FC<{ color: string }> = ({color}) => {
  return (
    <div>
        <Checkbox {...label} 
                    icon={<Circle style={{color: color}}/>}
                    checkedIcon={<CheckCircle style={{color: color}}
                    
                    />}
                    />
    </div>
  )
}
