import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Typography from './component/Typography'
import './App.css'

// const Label = ({ text }:any) => {
//   return <label className="component-label">{text}</label>;
// };

function App() {
  return (
    <section className=''>
        <div className='layout flex min-h-screen flex-col items-center justify-center py-20'>

        <Typography >
            Base
          </Typography>

          <Typography variant='h1' as='h1'>
            Desktop Headline 1 as h1
          </Typography>

          <Typography variant='h2'>Desktop Headline 2</Typography>
          <Typography variant='h3'>Desktop Headline 3</Typography>
          <Typography variant='h4'>Desktop Headline 4</Typography>
          <Typography variant='h5'>Desktop Headline 5</Typography>
          <Typography variant='h6'>Desktop Headline 6</Typography>
          <Typography variant='s1'>Subheading 1</Typography>
          <Typography variant='s2'>Subheading 2</Typography>
          <Typography variant='b1'>Body Text 1</Typography>
          <Typography variant='b2'>Body Text 2</Typography>

          <Typography variant='b2' as='h2'>
            Body Text 2 as h2
          </Typography>

          <Typography variant='b1' as='h1'>
            Body Text 1 as h1
          </Typography>

          <Typography variant='s2' as='h3'>
            Subheading 2 as h3
          </Typography>

          <Typography variant='s1' as='h4'>
            Subheading 1 as h4
          </Typography>
          <Typography variant='h6' as='p'>
            Desktop Headline 6 as p
          </Typography>
          <Typography variant='h5' as='h6'>
            Desktop Headline 5 as h6
          </Typography>

          <Typography variant='h4' color='quartenary'>
            Desktop Headline 4 with quartenary color
          </Typography>

          <Typography variant='h3' color='tertiary'>
            Desktop Headline 3 with tertiary color
          </Typography>

          <Typography variant='h2' color='secondary'>
            Desktop Headline 2 with secondary color
          </Typography>

          <Typography variant='h1' color='primary'>
            Desktop Headline 1 with primary color
          </Typography>
        </div>
      </section>
  );
}

export default App
