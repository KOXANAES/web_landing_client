import { observer } from 'mobx-react-lite'
import './PPR.scss'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../../main'
import { ICard } from '../../../models/ICard'

function PPR() {

  const {authStore} = useContext(Context)
  const {cardStore} = useContext(Context)

  const [cardsPicked, setCardsPicked] = useState<ICard[]>([])

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const cards = await cardStore.getCards();
        updateDateTimes(cards)
      } catch (e) {
        console.error("Ошибка при получении карточек:", e);
      }
    };
    fetchCards();
  }, []);

  const updateDateTimes = (cards: ICard[] | undefined) => {
    if (cards) {
      const updatedCards = cards.map(card => {
        const formatDate = (date: any) => {
          if (!date) return ''
          return date.split('T')[0]
        };
        return {
          ...card,
          formattedInspectionDate: formatDate(card.inspectionDate),
          formattedCreationDate: formatDate(card.creationDate),
          formattedInspectionDeadline: formatDate(card.inspectionDeadline)
        };
      });
      setCardsPicked(updatedCards);
    }
};

 

  return (
    <table className='ppr_table'>
    <tbody>
      <tr>
        <td colSpan={10} align="center">
          <div className='ppr_table_header'>
            <div>
              {authStore.isAuth ? 
              <div>
                <span>{authStore.user.username}</span>
              </div> 
              :
              'Не вошёл'
              }
            </div>
            <div>
              456
            </div>
          </div>          
        </td>
      </tr>
      <tr>
        <td>Создал</td>
        <td>Проверён</td>
        <td>Город</td>
        <td>Улица</td>
        <td>Дом</td>
        <td>Квартира</td>
        <td>Ответственный инспектор</td>
        <td>Дата создания</td>
        <td>Дата проверки</td>
        <td>Проверить до</td>
      </tr>
      {cardsPicked.map((card) => (
          <tr key={card.id}>
            <td>{card.creatorUsername}</td>
            <td>{card.isChecked ? 'Да' : 'Нет'}</td>
            <td>{card.city}</td>
            <td>{card.street}</td>
            <td>{card.home}</td>
            <td>{card.apartment || '-'}</td>
            <td>{card.inspectorUsername}</td>
            <td>{card.formattedCreationDate}</td>
            <td>{card.formattedInspectionDate}</td>
            <td>{card.formattedInspectionDeadline}</td>
          </tr>
        ))}
    </tbody>
  </table>
  )
}
  
export default observer(PPR)