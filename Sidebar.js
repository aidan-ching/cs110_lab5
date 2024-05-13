export default function Sidebar({ setSort, setTime, setAmount }) {
  const handleChangeSort = (e) => {
    setSort(e.target.value);
  };

  const handleChangeTime = (e) => {
    setTime(e.target.value);
  };

  const handleChangeAmount = (e) => {
    setAmount(e.target.value)
  }

  return (
    <div class="left-box">
      <h1>Filter</h1>
      <input className="article-amount-input" placeholder="Enter a number 1-15" type="number" min="1" max="15" onChange={handleChangeAmount}/>
      <div class="left-box-text-inside">
        <strong> Sort By:</strong>
        <label>
          <input
            onChange={handleChangeSort}
            type="radio"
            name="sort"
            value="viewed"
            defaultChecked
          />
          Most Viewed
        </label>
        <label>
          <input
            onChange={handleChangeSort}
            type="radio"
            name="sort"
            value="shared"
          />
          Most Shared
        </label>
        <label>
          <input
            onChange={handleChangeSort}
            type="radio"
            name="sort"
            value="emailed"
          />
          Most Emailed
        </label>
        <strong> Time Frame:</strong>
        <label>
          <input
            type="radio"
            name="time"
            value="1"
            onChange={handleChangeTime}
            defaultChecked
          />{" "}
          Day
        </label>
        <label>
          <input
            type="radio"
            name="time"
            value="7"
            onChange={handleChangeTime}
          />{" "}
          Week
        </label>
        <label>
          <input
            type="radio"
            name="time"
            value="30"
            onChange={handleChangeTime}
          />{" "}
          Month
        </label>
      </div>
    </div>
  );
}
