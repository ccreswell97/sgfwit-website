import { Box, Typography } from "@mui/material";
import './footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <Box>
        <ul>
          <li><a href="https://www.facebook.com/sgfmowit" target="_blank"><Typography>Facebook Page</Typography></a></li>
          <li><a href="https://www.facebook.com/groups/sgfwit" target="_blank"><Typography>Facebook Discussion Group</Typography></a></li>
          <li><a href="https://www.meetup.com/springfield-women-in-technology/" target="_blank"><Typography>Meetup</Typography></a></li>
          <li><a href="https://www.linkedin.com/groups/8598538/" target="_blank"><Typography>LinkedIn Group</Typography></a></li>
          <li><a href="https://join.slack.com/t/springfield-wit/shared_invite/zt-1ugg6q7ox-zosC~iJBZIJ6Es4MU7dhVw" target="_blank"><Typography>Join our Slack Group</Typography></a></li>
        </ul>
      </Box>
    </div>
  )
}