import { useContext, useState } from 'react';
import './AI.scss';
import { Context } from '../../../main';
import { AIAns } from '../../../models/AIAns';

function AI() {

  const {cardStore} = useContext(Context)

  const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const q = inputText
      const res:AIAns = await cardStore.askAI(q)
      setResponse(res.q)
    } catch (e) {
      console.error('Ошибка при отправке запроса:', e);
      setResponse('Произошла ошибка при получении ответа.');
    }
  };

  return (
    <div className="ai-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Введите ваш запрос"
          required
        />
        <button type="submit">Отправить</button>
      </form>
      <div className="response-container">
        <h3>Ответ:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default AI;