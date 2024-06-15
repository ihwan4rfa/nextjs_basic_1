import React from 'react';
import axios from 'axios';

export async function getServerSideProps() {
  const resp = await axios.get("https://api-bootcamp.do.dibimbing.id/api/v1/foods", {
    headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" }
  });
  return {
    props: {
      food: resp.data.data
    }
  }
}

export default function Home({ food }) {
  return (
    <div>
      <ul className='flex flex-col px-16'>
        {food.map((food) => (
          <li className='flex items-center mb-5'>
            <img src={food.imageUrl} className='object-cover w-[100px] h-[100px] rounded-full aspect-video mr-5' />
            <div className='font-semibold text-left'>
              <h1 className='text-xl'>{food.name}</h1>
              <h1 className='text-sm'>{food.description}</h1>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
