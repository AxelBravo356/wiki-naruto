import axios from "axios";

const NarutoApi = axios.create({
  baseURL: "https://narutodb.xyz/api/",
});

export const NarutoAllCharacters = (page) =>
  NarutoApi.get(`/character?page=${page}&limit=20`);

export const GetByIdCharacter = (id) => NarutoApi.get(`/character/${id}`);

export const GetAllClan = (page) =>
  NarutoApi.get(`/clan?page=${page}&limit=20`);

export const GetClanById = (id) => NarutoApi.get(`/clan/${id}`);

export const GetAllAkatsuki = (page) =>
  NarutoApi.get(`/akatsuki?page=${page}&limit=20`);
