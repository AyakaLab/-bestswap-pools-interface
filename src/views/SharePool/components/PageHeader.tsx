import React from 'react'
import styled from 'styled-components'

import Container from '../../../components/Container'

interface PageHeaderProps {
  icon?: React.ReactNode
  subtitle?: string
  title?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ icon, subtitle, title }) => {
  return (
    <Container size="md">
      <StyledPageHeader>
        <StyledIcon>{icon}</StyledIcon>
        {title && <StyledTitle>{title}</StyledTitle>}
        {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
      </StyledPageHeader>
    </Container>
  )
}

const StyledPageHeader = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => props.theme.spacing[6]}px;
  padding-top: ${(props) => props.theme.spacing[6]}px;
  margin: 0 auto;
`

const StyledIcon = styled.div`
  font-size: 120px;
  line-height: 120px;
  text-align: center;
  margin-bottom: 20px;
`

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.color.yellow};
  font-size: 28px;
  font-weight: 00;
  margin: 0;
  padding: 0;
`

const StyledSubtitle = styled.h3`
  color: ${(props) => props.theme.color.yellow};
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

export default PageHeader
