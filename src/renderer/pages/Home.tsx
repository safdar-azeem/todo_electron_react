import { FC } from 'react';
import { Container, Box } from '@mui/material';
import Contacts from 'renderer/components/home/Contacts';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home: FC = () => {
  return (
    <Container>
      <Box sx={{ textAlign: 'center' }}>
        <Link to="/add" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="btn-dark"
            sx={{ marginBottom: '50px' }}
          >
            Add New Contacts
          </Button>
        </Link>
      </Box>
      <Contacts />
    </Container>
  );
};

export default Home;
