# Project

1. create project

```bash
yarn create-vite
```

tulis nama project, pilih react -> pilih react + typescript

2. Hapus konten dalam div#app di App.tsx dan app.css.

3. Buat layout

    - Header
    - Search
    - ItemList

4. Sesuaikan Style

5. Tambahkan array di atas

```ts
const Items = [
    {nama: "A"},
    {nama: "B"},
    {nama: "C"},
]
```
6. Jabarkan Array menjadi Elemen

```ts

Items?.map((item, index) => {
    return <>
        {index}.
        {item?.nama}
    </>
})

```
7. Buat State

  const [pokeList, setPokeList] = useState<Array<any>>([]);

8. tambahkan API yang kamu udah ambil

```ts
const getPokemons = async () => {
const data = await axios.get("https://pokeapi.co/api/v2/pokemon", {
    params: {
    limit: 10, offset: 0
    }
}).then((data) => data?.data).catch(() => []);
setPokeList(data.results ?? []);
};

useEffect(() => {
getPokemons();
}, []);

```

9. integrasikan ke Aplikasi

```ts
  pokeList?.map(....);
```