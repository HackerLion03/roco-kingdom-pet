import { useState } from 'react'
import { Link } from 'react-router-dom'
import { petList, allElements, elementColors } from '../data'
import './PetCard.css'

export default function PetList() {
  const [selectedEle, setSelectedEle] = useState("全部")

  // 👇 支持筛选双属性
  const filtered = selectedEle === "全部"
    ? petList
    : petList.filter(p => {
        if (Array.isArray(p.element)) {
          return p.element.includes(selectedEle)
        } else {
          return p.element === selectedEle
        }
      })

  return (
    <div className="page-container">
      <div className="title-center">
        <h1>洛克王国宠物图鉴</h1>
      </div>

      <div className="filter-bar">
        <button
          className={selectedEle === "全部" ? "filter-btn active" : "filter-btn"}
          onClick={() => setSelectedEle("全部")}
        >
          全部
        </button>

        {allElements.map(el => (
          <button
            key={el.name}
            className={selectedEle === el.name ? "filter-btn active" : "filter-btn"}
            onClick={() => setSelectedEle(el.name)}
            style={{
              background: selectedEle === el.name ? el.color : "#f5f5f5",
              color: selectedEle === el.name ? "#fff" : "#333",
              border: `2px solid ${el.color}`
            }}
          >
            <img src={el.icon} className="filter-icon" alt={el.name} />
            <span className="filter-text">{el.name}</span>
          </button>
        ))}
      </div>

      <div className="pet-grid">
        {filtered.map(pet => {
          // 👇 自动判断 单/双 属性
          const elems = Array.isArray(pet.element) ? pet.element : [pet.element]
          const c1 = elementColors[elems[0]]
          const c2 = elems[1] ? elementColors[elems[1]] : c1

          // ✅ 核心：单属性纯色 / 双属性渐变
          const boxBackground = elems.length === 1
            ? c1 // 单色
            : `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)` // 渐变

          return (
            <Link key={pet.id} to={`/detail/${pet.id}`} className="card-link">
              <div className="small-card">

                {/* ✅ 头像外盒：单色 / 双属性渐变 盒子 */}
                <div 
                  className="avatar-box"
                  style={{
                    background: boxBackground, // 单色 or 渐变
                    borderRadius: '20px',
                    padding: '5px 5px', // 盒子宽度
                    boxShadow: '0 3px 10px rgba(0,0,0,0.18)',
                    width: 'fit-content',
                    margin: '0 auto'
                  }}
                >
                  <img
                    src={pet.avatar}
                    className="avatar"
                    alt={pet.name}
                    style={{
                      backgroundColor: '#fff', // 头像白底更干净
                      borderRadius: '15px'
                    }}
                  />
                </div>

                <h3>{pet.name}</h3>

                {/* 👇 显示所有属性标签 */}
                <div style={{ display: 'flex', gap: '4px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  {elems.map((el, i) => (
                    <span key={i} className="element" style={{ background: elementColors[el] }}>
                      {el}
                    </span>
                  ))}
                </div>

              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}