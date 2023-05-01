import '../eventCard/eventCard.css'

import { Card, CardContent, Typography } from '@mui/material';

export default function EventCard({title, content, id}) {
  return (
    <Card className='event-card' id={id}>
        <CardContent>
            <Typography fontSize={26} fontWeight={600}>
                {title}
            </Typography>
            <Typography fontSize={18} fontWeight={400}>
                {content}
            </Typography>
        </CardContent>
    </Card>
  )
}
