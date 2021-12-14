import  { FC } from 'react';
import { Box, Container, TextField, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import usePost from 'renderer/hooks/usePost';
import LoadingButton from '@mui/lab/LoadingButton';

interface TitleProps {
  history: any;
  match: any;
}

const EditContact: FC<TitleProps> = ({ history }) => {
  const { isLoading, doPost } = usePost();

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    let formdata = {};

    if(!e.target.name.value){
      toast.error("Name is required")
      return;
    }
    if(!e.target.phone.value){
      toast.error("Phone Number is required")
      return;
    }

    Array.from(e.target).forEach((field: any) => {
      if (field.name && field.value) {
        formdata[field.name] = field.value;
      }
    });

    const response = await doPost(`/contacts/`, formdata);
    if (response?._id) {
      const notify = () => toast.success('Contact Added Successfully');
      notify();
      history.push('/');
    }
  };

  return (
    <>
      <Container>
        <Typography
          sx={{ marginBottom: '25px' }}
          variant="h5"
          component="h2"
          className="heading"
          gutterBottom
        >
          Add Contacts
        </Typography>
        <form onSubmit={handleOnSubmit}>
          <Box>
            <TextField
              id="standard-basic"
              label="Name"
              sx={{ marginBottom: '20px', width: '700px', mx: 'auto' }}
              name="name"
              defaultValue=""
            />
          </Box>
          <Box>
            <TextField
              id="standard-basic"
              label="Email"
              sx={{ marginBottom: '20px', width: '700px', mx: 'auto' }}
              name="email"
              defaultValue=""
            />
          </Box>
          <Box>
            <TextField
              id="standard-basic"
              label="Phone"
              sx={{ marginBottom: '20px', width: '700px', mx: 'auto' }}
              name="phone"
              defaultValue=""
            />
          </Box>
          <LoadingButton
            edge="end"
            aria-label="delete"
            variant="contained"
            color="primary"
            loading={isLoading}
            type="submit"
            className="btn-dark"
            sx={{ marginTop: '20px' }}
          >
            Add Contact
          </LoadingButton>
        </form>
      </Container>
    </>
  );
};

export default EditContact;
