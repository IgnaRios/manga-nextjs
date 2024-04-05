'use client';
import { useState } from 'react';
import axios, { AxiosError } from 'axios';

const RegisterForm = () => {
  const [error, setError] = useState();

  //* HandleSubmit captura los datos del formulario y los envía a traves de axios a la db
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Captura de los valores del evento
    const formData = new FormData(e.currentTarget);

    //creando un usuario con los datos completados en el formulario
    const user = {
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    try {
      //Confirmación de la contraseña
      const pass1 = formData.get('password');
      const pass2 = formData.get('checkpassword');
      console.log(pass1, pass2);
      if (pass1 != pass2) {
        throw new Error('Passwords dont match');
      }
      //enviando los datos al backend para su guardado en la db
      const postUser = await axios.post('api/auth/singup', {
        username: user.username,
        email: user.email,
        password: user.password,
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof AxiosError) {
        setError(error.response.data.message);
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full"
      >
        <label className="input input-bordered flex items-center gap-2 mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Username"
            name="username"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2  mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Email"
            name="email"
          />
        </label>

        <label className="input input-bordered flex items-center gap-2  mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="******"
            name="password"
          />
        </label>

        <label className="input input-bordered flex items-center gap-2  mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Confirm your password"
            name="checkpassword"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-700 block text-white px-4 py-2 my-6 border border-gray-200 rounded-lg"
        >
          Registrarse
        </button>
      </form>
      {error && (
        <div className="bg-red-500 mx-auto my-5 p-1 flex flex-col items-center justify-center text-white w-2/3 border rounded-sm border-none">
          <p className="m-auto my-1 text-center">{error}</p>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
