import { useState, KeyboardEvent } from 'react';
import { Container } from './styles';

type AddAreaProps = {
  onEnter: (taskName: string) => void;

}


export const AddArea = ({ onEnter }: AddAreaProps) => {
  const [inputText, setInputText] = useState('')


  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && inputText !== '') {
      onEnter(inputText);
      setInputText('');
    }
  }

  return (
    <Container>
      <div className="image">＋</div>
      <input type="text"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
        placeholder="Adicione uma tarefa"
      />
    </Container>
  );
}