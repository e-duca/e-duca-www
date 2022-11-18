import style from './overview.module.scss'
import iconPage from '../../../assets/img/iconPage.svg'
import iconStar from '../../../assets/img/iconStar.svg'
import iconAdd from '../../../assets/img/iconAdd.svg'
import { Card } from './Card'
import { useState } from 'react'
import { Modal } from '../../../components/Modal'
import { RegisterContent } from '../RegisterContent'

type Props = {
  conteudos: number
  avaliacoes: number
}

export default function Overview({ conteudos, avaliacoes }: Props) {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  const toggle = () => {
    setIsModalVisible(true)
  }

  return (
    <div className={style.container}>
      <h1>Overview</h1>
      <div className={style.cOverviem}>
        <Card
          img={iconPage}
          value={conteudos}
          text={conteudos == 1 ? 'conteúdo postado' : 'conteúdos postados'}
        />
        <Card
          img={iconStar}
          value={avaliacoes}
          text={avaliacoes == 1 ? 'avaliação' : 'avaliações'}
        />
        <Card
          className={style.cardAdd}
          img={iconAdd}
          h4="Adicionar"
          text="um novo conteúdo"
          onClick={toggle}
        />
      </div>
      {isModalVisible ? (
        <Modal isOpen={isModalVisible} onClose={() => setIsModalVisible(false)}>
          <RegisterContent onClose={() => setIsModalVisible(false)} />
        </Modal>
      ) : null}
    </div>
  )
}
