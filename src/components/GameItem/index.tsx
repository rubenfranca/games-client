import Image from 'next/image'
import { Download } from '@styled-icons/boxicons-solid/Download'
import * as S from './styles'

export type PaymentInfoProps = {
  number: string
  flag: string
  img: string
  purchaseDate: string
}

export type GameItemProps = {
  img: string
  title: string
  price: string
  downloadLink?: string
  paymentInfo?: PaymentInfoProps
}

const GameItem = ({
  img,
  title,
  price,
  downloadLink,
  paymentInfo
}: GameItemProps) => (
  <S.Wrapper>
    <S.GameContent>
      <S.ImageBox>
        <Image src={img} alt={title} width={150} height={70} />
      </S.ImageBox>

      <S.Content>
        <S.Title>
          {title}
          {!!downloadLink && (
            <S.DownloadLink
              href={downloadLink}
              target="_blank"
              aria-label={`Get ${title} here`}
            >
              <Download size={22} />
            </S.DownloadLink>
          )}
        </S.Title>
        <S.Price>{price}</S.Price>
      </S.Content>
    </S.GameContent>

    {!!paymentInfo && (
      <S.PaymentContent>
        <div>{paymentInfo.purchaseDate}</div>
        <S.CardInfo>
          <span>{paymentInfo.number}</span>
          {!!paymentInfo.img && !!paymentInfo.flag && (
            <Image
              src={paymentInfo.img}
              alt={paymentInfo.flag}
              width={38}
              height={24}
            />
          )}
        </S.CardInfo>
      </S.PaymentContent>
    )}
  </S.Wrapper>
)

export default GameItem
