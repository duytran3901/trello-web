import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Card as MuiCard} from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'

function Card({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <MuiCard sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow: 'unset'
      }}>
        <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
          <Typography>Card hide Media</Typography>
        </CardContent>
      </MuiCard>
    )
  }
  return (
    <MuiCard sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
      overflow: 'unset'
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg"
        title="green iguana"
      />
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>Duy Tran</Typography>
      </CardContent>
      <CardActions sx={{ p: '0 4px 8px' }}>
        <Button size="small" startIcon={<GroupIcon />}>1000</Button>
        <Button size="small" startIcon={<CommentIcon />}>1000</Button>
        <Button size="small" startIcon={<AttachmentIcon />}>1000</Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card