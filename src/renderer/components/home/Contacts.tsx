import { FC } from 'react';
import {
  List,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import useFetch from 'renderer/hooks/useFetch';
import Contact from './Contact';
const API_PATH = '/contacts';

const Contacts: FC = () => {
  const { data, isLoading, doFetch } = useFetch(API_PATH);

  const handleFetchData=()=>{
    doFetch(API_PATH);
  }

  return (
    <>
      <List className="contacts_list">
        {isLoading ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '80px',
            }}
          >
            <CircularProgress />
          </Box>
        ) : data?.length == 0 ? (
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h5" component="h2" gutterBottom>
              No Contacts
            </Typography>
          </Box>
        ) : (
          data?.map((contact: any) => {
            return (
              <Contact contact={contact} handleFetchData={handleFetchData} />
            );
          })
        )}
      </List>
    </>
  );
};

export default Contacts;
