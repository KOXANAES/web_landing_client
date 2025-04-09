import { observer } from 'mobx-react-lite'
import './PPR.scss'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../../main'
import { ICard } from '../../../models/ICard'
import { CardResponse } from '../../../models/response/CardResponse'

function PPR() {

  const {cardStore} = useContext(Context)

  const [cardsPicked, setCardsPicked] = useState<ICard[]>([])

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await cardStore.getCards();
        console.log(response);
        setCardsPicked(response)
      } catch (e) {
        console.error("Ошибка при получении карточек:", e);
      }
    };
    fetchCards();
  }, []);



  return (
    <table className='ppr_table'>
    <tbody>
      <tr>
        <td colSpan={10} align="center">Это первый ряд, занимающий всю ширину таблицы</td>
                  {/* <button onClick={() => handleGetCards()}>получить картоки</button> */}
        {/* <button onClick={() => console.log(cards)}>показать картоки</button> */}
      </tr>
      <tr>
        <td>Id</td>
        <td>Проверён</td>
        <td>Город</td>
        <td>Улица</td>
        <td>Дом</td>
        <td>Квартира</td>
        <td>Ответственный инспектор</td>
        <td>Дата создания</td>
        <td>Дата проверки</td>
      </tr>
      {cardsPicked.map((card) => (
          <tr key={card.id}>
            <td>{card.id}</td>
            <td>{card.isChecked ? 'Да' : 'Нет'}</td>
            <td>{card.city}</td>
            <td>{card.street}</td>
            <td>{card.home}</td>
            <td>{card.apartment || '-'}</td>
            <td>{card.inspectorId}</td>
            <td>{card.creationDate?.toString() || '-'}</td>
            <td>{card.inspectionDate?.toString() || '-'}</td>
          </tr>
        ))}
    </tbody>
  </table>
  )
}
  
export default observer(PPR)