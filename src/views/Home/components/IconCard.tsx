import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Card, CardBody, Box, CardProps } from '@pancakeswap/uikit'

const StyledCard = styled(Card)<{ background: string; rotation?: string; display?: string }>`
  height: fit-content;
  padding: 1px 1px 4px 1px;
  box-sizing: border-box;
  ${({display}) => `display: ${display};`}
  ${({ theme }) => theme.mediaQueries.md} {
    ${({ rotation }) => (rotation ? `transform: rotate(${rotation});` : '')}
  }
`

const IconWrapper = styled(Box)<{ rotation?: string }>`
  position: absolute;
  top: 24px;
  right: 24px;

  ${({ theme }) => theme.mediaQueries.md} {
    ${({ rotation }) => (rotation ? `transform: rotate(${rotation});` : '')}
  }
`

interface IconCardProps extends IconCardData, CardProps {
  children: ReactNode
}

export interface IconCardData {
  icon: ReactNode
  background?: string
  borderColor?: string
  rotation?: string
  display?: string
}

const IconCard: React.FC<IconCardProps> = ({ icon, background, borderColor, rotation, display, children, ...props }) => {
  return (
    <StyledCard background={background} borderBackground={borderColor} display={display} rotation={rotation} {...props}>
      <CardBody>
        <IconWrapper rotation={rotation}>{icon}</IconWrapper>
        {children}
      </CardBody>
    </StyledCard>
  )
}

export default IconCard
