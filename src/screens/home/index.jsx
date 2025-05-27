import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button, Input, Title, Subtitle } from 'components';
import { SAVE_USERNAME_PATH } from 'services/constants';
import { ScreenContainer, ContentContainer, BagImage } from './styles';

export const HomeScreen = () => {
  const [username, setUsername] = useState('');

  const navigate = useNavigate();

  const onClickContinue = () => {
    if (username.length < 3) {
      alert('O nome de usuário deve conter no mínimo 3 caracteres.');
      return;
    }
    localStorage.setItem(SAVE_USERNAME_PATH, username);
    navigate('/list');
  };

  return (
    <ScreenContainer>
      <ContentContainer>
        <BagImage />
        <Title
          $margin={'16px 0 10px 0'}
          $lineHeight={26}
          $lineHeightXL={22}
          $lineHeightLG={22}
          $lineHeightSM={20}
        >
          Sua lista de supermercado mais fácil do que nunca
        </Title>
        <Subtitle $align={'center'} $mbLG={18}>
          Ajudamos você a organizar sua <br />
          lista de compras de forma descomplicada.
        </Subtitle>
        <Subtitle
          $mw={450}
          $mwXL={500}
          $mt={36}
          $align={'left'}
          $alignXL={'left'}
          $mbXL={4}
          $mwSM={272}
          $mbSM={2}
        >
          Digite abaixo seu usuário para ter acesso a sua lista de compras:
        </Subtitle>
        <Input
          onChange={(text) => setUsername(text)}
          value={username}
          label={'Username'}
          placeholder={'Ex: usuario1'}
          $margin="14px 0 22px 0"
        />
        <Button onClick={onClickContinue} variant="large">
          Acessar
        </Button>
      </ContentContainer>
    </ScreenContainer>
  );
};
