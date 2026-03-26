import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PetList from './components/PetList'
import PetDetail from './components/PetDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 首页：宠物列表 */}
        <Route path="/" element={<PetList />} />

        {/* 详情页：根据 id 显示不同宠物 */}
        <Route path="/detail/:id" element={<PetDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App