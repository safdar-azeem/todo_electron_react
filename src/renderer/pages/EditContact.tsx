import {Container, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingButton from '@mui/lab/LoadingButton';
import useFetch from 'renderer/hooks/useFetch';
import usePatch from 'renderer/hooks/usePatch';

interface TitleProps {
  history: any;
  match: any;
}

const EditContact: FC<TitleProps> = ({ match, history }) => {
  const { data, error } = useFetch(`/contacts/get_contact/${match.params.id}`);
  const { response, isLoading, error: editError, doPatch } = usePatch();

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    let formdata = {
      _id: data._id,
    };

    Array.from(e.target).forEach((field) => {
      if (field.name && field.value) {
        formdata[field.name] = field.value;
      }
    });

   const response = await doPatch(`/contacts/${data._id}`, formdata);
    if (response._id) {
      const notify = () => toast.success(
        'Contact Updated Successfully',
      );
      notify();
      history.push('/');
    }
  };

  return (
    <>
      <Container sx={{ marginTop: '50px' }}>
        <Typography
          sx={{ marginBottom: '40px' }}
          variant="h5"
          component="h2"
          gutterBottom
        >
          Edit Contacts
        </Typography>
        <form onSubmit={handleOnSubmit}>
          {data &&
            Object.keys(data).map((key) => {
              if (key !== '_id' && key !== '__v') {
                return (
                  <TextField
                    id="standard-basic"
                    label={key}
                    sx={{ marginBottom: '20px', width: '700px', mx: 'auto' }}
                    name={key}
                    defaultValue={data[key]}
                  />
                );
              }
            })}

          <LoadingButton
            edge="end"
            aria-label="delete"
            variant="contained"
            color="primary"
            loading={isLoading}
            type="submit"
          >
            Edit Contact
          </LoadingButton>
        </form>
      </Container>
    </>
  );
};

export default EditContact;
