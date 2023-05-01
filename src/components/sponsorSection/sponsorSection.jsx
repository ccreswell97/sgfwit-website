import { Box, Typography } from "@mui/material";

import '../sponsorSection/sponsorSection.css'

export default function SponsorSection() {
  return(
    <Box className='sponsors-section' sx={{backgroundColor: 'white', minHeight: '75vh'}}>
      <Typography fontSize={36} fontWeight={600} className='title'>Our Amazing Sponsors</Typography>
        <Box className='sponsors-logo-wrapper'>
          <div className='row'>
            <div className='column'>
              <img src='../src/assets/logos/stcLogo.png' alt='Springfield Technology Council'></img>
            </div>
            <div className='column'>
              <img src='../src/assets/logos/mostlySeriousLogo.webp' alt='Mostly Serious'></img>
            </div>
          </div>
          <div className='row'>
            <div className='column'>
              <img src='../src/assets/logos/jmarkLogo.png' alt='JMARK'></img>
            </div>
            <div className='column'>
              <img src='../src/assets/logos/legacyBankLogo.png' alt='Legacy Bank and Trust' className='legacyBankLogo'></img>
            </div>
            <div className='column'>
              <img src='../src/assets/logos/mwiLogo.png' alt='Midwestern Interactive' className='mwiLogo'></img>
            </div>
          </div>
      </Box>
    </Box>
  )
}