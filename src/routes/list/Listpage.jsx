import Filter from '../../components/filter/Filter';
import { listData } from '../../api/fakeData';

import './listpage.scss';
import Cards from '../../components/card/Cards';
import Map from '../../components/map/Map';

export const Listpage = () => {
  const data = listData;

  return (
    <main className='mainlistPage'>
      <section className='listPage'>
        <div className='wrapper'>
          <Filter />
          <div className='results'>
            {data.map((item) => {
              return <Cards key={item.id} item={item} />;
            })}
          </div>
        </div>
        <section className='map-section'>
          <Map items={data} />
        </section>
      </section>

      <div className='needRoomate'></div>
    </main>
  );
};
