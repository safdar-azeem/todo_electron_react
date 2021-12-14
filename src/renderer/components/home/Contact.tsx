import { FC } from 'react';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Box,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import useDelete from 'renderer/hooks/useDelete';
const API_PATH = '/contacts';

interface TitleProps {
  match: any;
  contact: any;
  handleFetchData: any;
}

const Contact: FC<TitleProps> = ({ match, contact, handleFetchData }) => {
  const { isLoading, doDelete } = useDelete();
  const history = useHistory();

  const deleteContact = async () => {
    await doDelete(`${API_PATH}/${contact._id}`);
    const notify = () => toast.success('Contact Deleted Successfully');
    notify();
    handleFetchData();
  };

  return (
    <>
      <ListItem
        sx={{ borderBottom: 1, alignItems: 'start' }}
        className="contact_list_item"
        secondaryAction={
          <>
            <Box sx={{display: 'flex'}}>
              <LoadingButton
                edge="end"
                aria-label="delete"
                color="inherit"
                onClick={() => history.push(`/edit/${contact._id}`)}
                className="btn-rounded"
              >
                <EditIcon />
              </LoadingButton>
              <LoadingButton
                edge="end"
                color="inherit"
                aria-label="delete"
                className="btn-rounded"
                loading={isLoading}
                onClick={deleteContact}
              >
                <DeleteIcon />
              </LoadingButton>
            </Box>
          </>
        }
      >
        <ListItemAvatar sx={{ marginTop: '8px' }}>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Typography variant="h6" component="h5" gutterBottom>
            {contact?.name}
          </Typography>
          <Typography variant="p" component="p" gutterBottom>
            {contact?.phone}
          </Typography>
        </ListItemText>
      </ListItem>
    </>
  );
};

export default Contact;
