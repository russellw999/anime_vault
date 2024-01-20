"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

const fetchAnime = async (page: number, limit: number) => {
  const myUrl = `https://shikimori.one/api/animes?page=${page}&limit=${limit}&&order=popularity`;
  const response = await fetch(myUrl);

  const data = await response.json();

  console.log(data);

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};

export default fetchAnime;
