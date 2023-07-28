import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeConteiner } from './styles';

import CloseImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from 'react';

interface NewTransactionModalProps{
    isNewTrasactionModalOpen: boolean;
    onNewTransectionCloseModal: () => void;
}

export function NewTransactionModal({isNewTrasactionModalOpen, onNewTransectionCloseModal}:NewTransactionModalProps){
    const [type, setType] = useState('deposit');
    const [tittle, setTitle] = useState('');
    const [value,setValue] = useState(0);
    const [category, setCategory] = useState('');

    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault()
    }
    
    return(
        <Modal 
        isOpen={isNewTrasactionModalOpen}
        onRequestClose={onNewTransectionCloseModal}
        overlayClassName={"react-modal-overlay"}
        className={"react-modal-content"}
        >
            <button type="button" onClick={onNewTransectionCloseModal} className='react-modal-close'>
                <img src={CloseImg} alt="Fechar Modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input 
                    placeholder='Titulo'
                    value={tittle}
                    onChange={e => setTitle(e.target.value)}
                />
                <input 
                    placeholder='Valor'
                    type='number'
                    value={value}
                    onChange={e => setValue(Number(e.target.value))}
                />
                <TransactionTypeConteiner>
                    <RadioBox
                     type="button"
                     onClick={()=> setType('deposit')}
                     isActive={type === 'deposit'}
                     activeColor='green'
                     >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                     type="button"
                     onClick={()=> setType('withdraw')}
                     isActive={type === 'withdraw'}
                     activeColor='red'
                     >
                        <img src={outcomeImg} alt="Saida" />
                        <span>Saida</span>
                    </RadioBox>
                </TransactionTypeConteiner>
                <input 
                    placeholder='Categoria'
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </Container>            
      </Modal>
    )
}