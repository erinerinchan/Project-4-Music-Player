import { getProviders, signIn } from 'next-auth/react'
import Image from 'next/image'

function Login({ providers }) {
  return (
    <div>
      <Image
        className="w-52 mb-5"
        src="/logo.png"
        layout="fill"
        alt="logo"
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button type="button">Login with {provider.name}</button>
        </div>
      ))}
    </div>
  )
}

export default Login

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers
    }
  }
}
