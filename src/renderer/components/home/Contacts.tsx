import React, { FC } from 'react';
import {
  List,
  Typography,
} from '@mui/material';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Contact from './Contact';
import useFetch from 'renderer/hooks/useFetch';

const API_PATH = '/contacts';

interface TitleProps {
  history: any;
  match: any;
}

const Contacts: FC<TitleProps> = ({ match, history }) => {
  const { data, isLoading, error,doFetch } = useFetch(API_PATH);

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
          <Box>
            <Typography variant="h5" component="h2" gutterBottom>
              No Contacts
            </Typography>
          </Box>
        ) : (
          data?.map((contact) => {
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
