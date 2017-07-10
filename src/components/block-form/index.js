import React from 'react'
import styled from 'styled-components'
import { borderLarge } from '../../utils/borders'

const BlockFormWrapper = styled.div`
  width: 880px;
  background: ${({ theme }) => (theme.color.background)};
  border: 1px solid ${({ theme }) => (theme.color.miscLighter)};
  box-sizing: border-box;
  ${borderLarge}
`

const Head = styled.div`
  padding: 30px 42px 0;
`

const Title = styled.p`
  margin-top: 0;
  margin-bottom: ${({ description }) => (description ? '12px' : '18px')};
  text-transform: uppercase;
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  color: ${({ theme }) => (theme.color.textDarker)};
`

const Description = styled.p`
  margin: 0 0 30px;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => (theme.color.textDarker)};
`

const Content = styled.div`
  padding-top: ${({ contents }) => (contents > 1 ? '30px' : '0')};
  padding-bottom: 30px;
  padding-left: 42px;
  padding-right: 42px;
  border-top-width: ${({ contents }) => (contents > 1 ? '1px' : '0')};
  border-top-style: solid;
  border-top-color: ${({ theme }) => (theme.color.miscLighter)};
`

type Props = {
  contents: Array<React.Element>,
  title: string,
  description?: string,
}

const BlockForm = ({ title, description, contents, ...props }: Props) => (
  <BlockFormWrapper {...props}>
    <Head>
      <Title description={description} >{title}</Title>
      { description && <Description>{description}</Description> }
    </Head>
    {
      contents && contents.map((content) => (
        <Content contents={contents.length}>{content}</Content>
      ))
    }
  </BlockFormWrapper>
)

BlockForm.defaultProps = {
  description: '',
}

export default BlockForm
