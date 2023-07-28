import logo from '../../assets/logo.svg'
import { Container, Contant } from './styles';

interface HeaderOpen{
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}:HeaderOpen){
  
    return (
        <Container>
            <Contant>
                <img src={logo} alt="DT money" />
                <button type="button" onClick={onOpenNewTransactionModal}>Nova Transação</button>
                
            </Contant>
        </Container>   
    )

}