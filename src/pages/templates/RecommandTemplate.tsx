import styled from "styled-components"

type TemplateProps = {
  children: React.ReactNode
}

const RecommandTemplateBlock = styled.div`
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
`

const RecommandTemplate = ({ children }: TemplateProps) => {
  return (
    <RecommandTemplateBlock>
      {children}
    </RecommandTemplateBlock>
  )
}

export default RecommandTemplate