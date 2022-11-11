import styled from "styled-components"

type TemplateProps = {
  children: React.ReactNode
}

const RecommandTemplateBlock = styled.div`

`

const RecommandTemplate = ({ children }: TemplateProps) => {
  return (
    <RecommandTemplateBlock>
      {children}
    </RecommandTemplateBlock>
  )
}

export default RecommandTemplate