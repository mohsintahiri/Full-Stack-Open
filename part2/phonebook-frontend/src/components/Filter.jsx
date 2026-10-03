const Filter = ({text, newFilter, setNewFilter}) => {
  const handleFilterChange = event => setNewFilter(event.target.value)
  return <div>{text} <input value={newFilter} onChange={handleFilterChange}/></div>
}

export default Filter