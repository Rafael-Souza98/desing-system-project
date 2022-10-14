import { Envelope, Lock } from 'phosphor-react';
import { Text } from '../../components/Text/Text';
import { Button } from '../../components/Button/Button';
import { CheckBox } from '../../components/CheckBox/Checkbox';
import { Heading } from '../../components/Heading/Heading';
import { Logo } from '../../components/Logo/Logo';
import { TextInput } from '../../components/TextInput/TextInput';
import { FormEvent, useState } from 'react';
import axios from 'axios';

// import { Container } from './styles';

export function SignIn (){

  const [isUserSignedIn, setisUserSignedIn] = useState(false);

async function handleSignIn(event: FormEvent){
  event.preventDefault()

  await axios.post('/sessions',{
    email: 'faelsos98@gmail.com',
    password: '12345678',

  })

  setisUserSignedIn(true)
}

  return (
    <header className='flex flex-col items-center'>
    <Logo/>
      <Heading size='lg' className='mt-4'> Ignite Lab </Heading>
          <Text className="text-gray-400 mt-1"> Faça login e comece a usar </Text>

          <form className='flex flex-col gap-4 items-stretch mt-10' onSubmit={handleSignIn}>

            {isUserSignedIn && <Text> Login Sucessful </Text>}
              <label htmlFor="email" className="font-semibold flex flex-col gap-3">
                <Text> Endereço de e-mail</Text>
                <TextInput.Root>
                  <TextInput.Icon>
                    <Envelope/>
                  </TextInput.Icon>
                  <TextInput.Input placeholder='Type your email'/>
                </TextInput.Root>
              </label>
              <label htmlFor="password" className="font-semibold flex flex-col gap-3">
                <Text> Your password </Text>
                <TextInput.Root>
                  <TextInput.Icon>
                    <Lock/>
                  </TextInput.Icon>
                  <TextInput.Input id='password' type="password" placeholder='********'/>
                </TextInput.Root>
              </label>

              <label htmlFor='remember' className='flex items-center gap-2'>
              <CheckBox id='remember'/>
              <Text size='sm' className='text-gray-200'> Lembrar de mim por 30 dias </Text>
              </label>

              <Button type="submit" className='mt-4'>Enter platform</Button>
          </form>

          <footer className='flex flex-col items-center gap-4 mt-8'>

            <Text size="sm">
                <a href="" className="text-gray-400 underline hover:text-gray-200"> Esqueceu sua senha? </a>
            </Text>
            <Text size="sm">
                <a href="" className="text-gray-400 underline hover:text-gray-200"> Não possui conta? crie uma agora </a>
            </Text>

          </footer>

  </header>
  )
}

