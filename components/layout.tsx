import React from 'react'
import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
type Props = {
  children: React.ReactNode
  preview?: boolean 

}
export default function Layout(props: Props) {
  const {preview, children} = props
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
