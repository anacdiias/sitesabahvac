import Image from "next/image"

const LogoWhite = () => {
  return (
    <div className="relative h-12 w-auto">
      <Image
        src="/images/logo.png"
        alt="Sabahvac Logo"
        width={180}
        height={60}
        className="brightness-0 invert" // This makes the logo white
      />
    </div>
  )
}

export default LogoWhite
