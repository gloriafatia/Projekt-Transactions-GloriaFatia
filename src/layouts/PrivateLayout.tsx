import { FunctionComponent } from 'react'

interface PrivateLayoutPropsType {
  children: React.ReactNode
}

export const PrivateLayout: FunctionComponent<PrivateLayoutPropsType> = ({ children }) => {
  return <div>{children}</div>
}

export default PrivateLayout
