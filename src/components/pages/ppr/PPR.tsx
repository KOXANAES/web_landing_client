import { observer } from 'mobx-react-lite'
import './PPR.scss'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../../main'
import { ICard } from '../../../models/ICard'
import Avatar from '../../avatar/Avatar'
import NotAuthWarning from '../../notAuthWarning/NotAuthWarning'

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

  //filters
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedStreet, setSelectedStreet] = useState<string>('');
  const [selectedHome, setSelectedHome] = useState<string>('');
  const [selectedInspector, setSelectedInspector] = useState<string>('');
  const [searchApartment, setSearchApartment] = useState<string>('');
  
  const [selectedCreationDate, setSelectedCreationDate] = useState<string>('');
  const [selectedInspectionDate, setSelectedInspectionDate] = useState<string>('');
  const [selectedInspectionDeadline, setSelectedInspectionDeadline] = useState<string>('');

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };
  const handleStreetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStreet(event.target.value);
  };
  const handleHomeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHome(event.target.value);
  };
  const handleApartmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchApartment(event.target.value);
  };
  const handleInspectorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedInspector(event.target.value);
  };
  const handleCreationDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCreationDate(event.target.value);
  };
  const handleInspectionDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedInspectionDate(event.target.value);
  };
  const handleInspectionDeadlineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedInspectionDeadline(event.target.value);
  };

  const uniqueCities = Array.from(new Set(cardsPicked.map(card => card.city)));
  const uniqueStreets = Array.from(new Set(cardsPicked.map(card => card.street)));
  const uniqueHomes = Array.from(new Set(cardsPicked.map(card => card.home)))
  const uniqueInspector = Array.from(new Set(cardsPicked.map(card => card.inspectorUsername)))

  const filteredCards = cardsPicked.filter(card => {
    const cityMatch = selectedCity ? card.city === selectedCity : true;
    const streetMatch = selectedStreet ? card.street === selectedStreet : true;
    const homeMatch = selectedHome ? card.home === selectedHome : true;
    const inspectorMatch = selectedInspector ? card.inspectorUsername === selectedInspector : true;
    const apartmentMatch = searchApartment ? card.apartment?.toString().includes(searchApartment) : true;
    const creationDateMatch = selectedCreationDate ? card.formattedCreationDate === selectedCreationDate : true;
    const inspectionDateMatch = selectedInspectionDate ? card.formattedInspectionDate === selectedInspectionDate : true;
    const inspectionDeadlineMatch = selectedInspectionDeadline ? card.formattedInspectionDeadline === selectedInspectionDeadline : true;
    return cityMatch && streetMatch && homeMatch && inspectorMatch && apartmentMatch && creationDateMatch && inspectionDateMatch && inspectionDeadlineMatch;
  });

  // Пагинация 
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(10);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };



  if(!authStore.isAuth) {return (<NotAuthWarning/>)}

  return (
    <div style={{overflowX: 'auto'}}>
      <table className='ppr_table'>
        <thead>
          <tr>
            <td colSpan={10} align="center">
              <div className='ppr_table_header'>
                <div className='ppr_table_header_left_auth'>
                    <Avatar/>
                    <span className='ppr_user_username'>{authStore.user.username}</span>
                  </div>
                <div>
                  <span className='ppr_user_role'>Уровень доступа - {authStore.user.role}</span>
                  <button onClick={() => authStore.logout()} className='ppr_btn'>Выйти</button>
                </div>
              </div>          
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <select className='filter_inp' value={selectedCity} onChange={handleCityChange}>
              <option value="">Все города</option>
              {uniqueCities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
              </select>
            </th>
            <th>
              <select className='filter_inp' value={selectedStreet} onChange={handleStreetChange}>
              <option value="">Все улицы</option>
              {uniqueStreets.map(street => (
                <option key={street} value={street}>{street}</option>
              ))}
              </select>
            </th>
            <th>
              <select className='filter_inp' value={selectedHome} onChange={handleHomeChange}>
              <option value="">Все улицы</option>
              {uniqueHomes.map(home => (
                <option key={home} value={home}>{home}</option>
              ))}
              </select>
            </th>
            <th>
              <input
                className='filter_inp'
                type="text"
                value={searchApartment}
                onChange={handleApartmentChange}
                placeholder="Номер квартиры"
              />
            </th>
            <th>
              <select className='filter_inp' value={selectedInspector} onChange={handleInspectorChange}>
              <option value="">Ответственный инспектор</option>
              {uniqueInspector.map(inspector => (
                <option key={inspector} value={inspector}>{inspector}</option>
              ))}
              </select>
            </th>
            <th>
              <label className='filter_inp' htmlFor="creationDate">Дата создания:</label>
              <input
                className='input_date'
                id="creationDate"
                type="date"
                value={selectedCreationDate}
                onChange={handleCreationDateChange}
                placeholder="Дата создания"
              />
            </th>
            <th>
              <label className='filter_inp' htmlFor="inspectionDeadline">Проверить до:</label>
              <input
                className='input_date'
                id="inspectionDeadline"
                type="date"
                value={selectedCreationDate}
                onChange={handleInspectionDeadlineChange}
                placeholder="Проверить до"
                />
            </th>
            <th>
            <label className='filter_inp' htmlFor="inspectionDate">Дата проверки:</label>
              <input
                  className='input_date'
                  id="inspectionDate"
                  type="date"
                  value={selectedCreationDate}
                  onChange={handleInspectionDateChange}
                  placeholder="Дата проверки"
                />
            </th>
          </tr>
          {currentCards.map((card) => (
              <tr key={card.id}>
                <td>{card.city}</td>
                <td>{card.street}</td>
                <td>{card.home}</td>
                <td>{card.apartment || '-'}</td>
                <td>{card.inspectorUsername}</td>
                <td>{card.formattedCreationDate}</td>
                <td>{card.formattedInspectionDeadline}</td>
                <td>{card.formattedInspectionDate}</td>
              </tr>
            ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={10} align="center">
              <div className="pagination">
                <button className='pag_btn' onClick={handlePrevPage} disabled={currentPage === 1}>
                  Назад
                </button>
                <span>Страница {currentPage} из {totalPages}</span>
                <button className='pag_btn' onClick={handleNextPage} disabled={currentPage === totalPages}>
                  Вперед
                </button>
              </div>
              <p>Всего карточек: {filteredCards.length}</p>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
  
export default observer(PPR)