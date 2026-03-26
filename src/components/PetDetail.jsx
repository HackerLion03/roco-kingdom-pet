import { useParams, Link } from 'react-router-dom'
import { petList, elementColors } from '../data'
import './PetCard.css'

export default function PetDetail() {
  const { id } = useParams()
  const pet = petList.find(p => p.id === Number(id))
  if (!pet) return <div>不存在</div>

  // 支持 单/双 属性
  const elem = Array.isArray(pet.element) ? pet.element : [pet.element]
  const color1 = elementColors[elem[0]]
  const color2 = elementColors[elem[1] || elem[0]]

  // ✅ 修复：定义渐变/单色背景（你之前漏了这行）
  const boxBackground = elem.length === 1
    ? color1
    : `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`

  return (
    <div className="page-container">
      <div style={{ textAlign: 'left', marginBottom: 16 }}>
        <Link to="/" className="back-btn">← 返回图鉴</Link>
      </div>

      <div className="detail-card">
        <div className="pet-layout">
          <div className="left-section">
            {/* ✅ 修复好的纤细盒子：左右超窄 */}
            <div 
              className="avatar-box"
              style={{
                background: boxBackground,
                borderRadius: '20px',
                padding: '5px 5px', // 👈 左右极细，想更细就改 1px 2px
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
                  width: '150px',   // 固定头像大小，不受CSS干扰
                  height: '150px',
                  objectFit: 'cover',
                  backgroundColor: '#fff',
                  borderRadius: '15px',
                  display: 'block'
                }}
              />
            </div>

            {/* 名字 + 多属性标签 */}
            <div className="name-row">
              <h2 className="pet-name">{pet.name}</h2>
              {elem.map((e, i) => (
                <span key={i} className="element" style={{ background: elementColors[e] }}>
                  {e}
                </span>
              ))}
            </div>

            {/* 特性 */}
            {pet.trait && (
              <div className="trait-box">
                <img src={pet.trait.icon} className="trait-icon" alt={pet.trait.name} />
                <div className="trait-text">
                  <div className="trait-name">{pet.trait.name}</div>
                  <div className="trait-desc">{pet.trait.desc}</div>
                </div>
              </div>
            )}
          </div>

          <div className="right-section">
            <h3>种族值</h3>
            <div className="stat-grid">
              <div className="stat">血量 {pet.hp}</div>
              <div className="stat">攻击 {pet.atk}</div>
              <div className="stat">魔攻 {pet.mat}</div>
              <div className="stat">防御 {pet.def}</div>
              <div className="stat">魔抗 {pet.mdf}</div>
              <div className="stat">速度 {pet.spd}</div>
            </div>

            <div style={{ marginTop: 20 }}>
              <h3>技能</h3>
              <div className="skill-list">
                {pet.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <img src={skill.icon} className="skill-icon" alt={skill.name} />
                    <div className="skill-info">
                      <div className="skill-name">{skill.name}</div>
                      <div className="skill-desc">{skill.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}