import React, { FC, useEffect } from 'react';
import { List, ListItem, IconButton, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import useFetch from 'renderer/hooks/useFetch';
const API_PATH = '/contacts';

interface TitleProps {
  history: any;
  match: any;
}

const Home: FC<TitleProps> = ({ match, history }) => {
  const { data, isLoading, error } = useFetch(API_PATH);

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  return (
    <>
      <List className="contacts_list">
        {isLoading ? (
          <Box sx={{ display: 'flex',justifyContent: 'center',marginTop:"80px" }}>
            <CircularProgress />
          </Box>
        ) : (
          data?.map((contact) => {
            return (
              <ListItem
                sx={{ borderBottom: 1 }}
                secondaryAction={
                  <>
                    <IconButton
                      edge="start"
                      aria-label="edit"
                      onClick={() => history.push(`/update/123`)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <p>Person name</p>
                  <p>+1 678 768 7867</p>
                </ListItemText>
              </ListItem>
            );
          })
        )}
      </List>
    </>
  );
};

export default Home;
