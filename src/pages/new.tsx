import { PetForm } from '@/components/shared';
import { useCurrentUser } from '@/hooks/useUser';
import Head from 'next/head';
import Router from 'next/router';

const petForm = {
  name: '',
  species: '',
  breed: '',
  age: 0,
  poddy_trained: false,
  diet: [],
  image_url: '',
  likes: [],
  dislikes: [],
}

const NewPet = () => {
  const [user] = useCurrentUser();

  if (!user && typeof window !== 'undefined') Router.push('/login');

  return (
    <div className="content">
      <Head>
        <title>Submit your Pet | PawShow</title>
      </Head>
      <h1>Submit your Pet</h1>
      <PetForm
        formId="add-pet-form"
        petForm={petForm}
      />
      <style jsx>
        {`
          .content {
            padding: 0 80px;
            margin-top: 100px;
          }
        `}
      </style>
    </div>
  )
}

export default NewPet
