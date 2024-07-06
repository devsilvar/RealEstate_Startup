import Filter from '../../components/filter/Filter';
import { listData } from '../../api/fakeData';

import './listpage.scss';
import Cards from '../../components/card/Cards';
import Map from '../../components/map/Map';

export const Listpage = () => {
  const data = listData;

  return (
    <main className='listPage'>
      <div className='wrapper'>
        <Filter />

        {data.map((item) => {
          return <Cards key={item.id} item={item} />;
        })}
      </div>
      <section className='map-section'>
        <Map item={data} />
      </section>
    </main>
  );
};
