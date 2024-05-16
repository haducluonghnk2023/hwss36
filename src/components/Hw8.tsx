import React from 'react'

export default function Hw8() {
    const getSeason = (month:any) => {
        if (month >= 0 && month <= 2) {
          return 'Xuân';
        } else if (month >= 3 && month <= 5) {
          return 'Hạ';
        } else if (month >= 6 && month <= 8) {
          return 'Thu';
        } else {
          return 'Đông';
        }
    }
    const currentMonth = new Date().getMonth();
    const currentSeason = getSeason(currentMonth);
  return (
    <div>
        <h2>Hw8</h2>
        <p>mua hien tai{currentSeason}</p>
    </div>
  )
}
