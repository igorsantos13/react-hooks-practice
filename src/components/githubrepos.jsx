import React from 'react'
import { useEffect, useState } from 'react'

function Githubrepos() {
    const [repos, setRepos] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      const response = await fetch('https://api.github.com/users/igorsantos13/repos');
      const data = await response.json();

      setRepos(data)
    }

    fetchData()

  },[])

  useEffect(()=>{
    const filtered = repos.filter(repo => repo.favorite)

    document.title = `Você favoritou ${filtered.length} repos`
  },[repos])

  const handleFavorite = id => {
    const newRepos = repos.map(repo => {
      return repo.id === id ? {...repo, favorite: !repo.favorite} : repo
    });

    setRepos(newRepos)
}
  return (
    <div>
        <ul>
            {repos.map(repo => (
                <li key={repo.id}>
                  {repo.name}
                  {repo.favorite && <span> Favoritado! </span>}
                  <button onClick={()=>handleFavorite(repo.id)}>Favoritar</button>
                  </li>
            ))}
        </ul>
    </div>
  )
}

export default Githubrepos